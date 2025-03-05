import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Use the latest stable Stripe API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: NextRequest) {
  // Log environment variables for debugging
  console.log('Stripe Route Environment:', {
    STRIPE_SECRET_KEY: !!process.env.STRIPE_SECRET_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
  });

  try {
    const body = await req.json();
    const { priceId, customerEmail } = body;

    // Validate required fields
    if (!priceId) {
      return NextResponse.json({ 
        error: "Missing required field: priceId" 
      }, { status: 400 });
    }

    // Validate site URL
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
      return NextResponse.json({ 
        error: "Site URL is not configured" 
      }, { status: 500 });
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ 
        price: priceId, 
        quantity: 1 
      }],
      mode: "subscription",
      
      // Optional: Add customer email if provided
      ...(customerEmail && { customer_email: customerEmail }),
      
      // Success and cancel URLs
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing`,
      
      // Optional: Add more configuration
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
    });

    // Return the checkout session URL
    return NextResponse.json({ 
      sessionUrl: session.url,
      sessionId: session.id 
    });

  } catch (error: any) {
    // Comprehensive error logging
    console.error('Stripe Checkout Error:', {
      message: error.message,
      type: error.type,
      code: error.code,
      stack: error.stack
    });

    return NextResponse.json({
      error: "Failed to create checkout session",
      details: error.message,
      type: error.type,
      code: error.code
    }, { status: 500 });
  }
}