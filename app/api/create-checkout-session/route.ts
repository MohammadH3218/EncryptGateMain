import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json();

    // Validate the price ID
    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    // Create a checkout session in subscription mode
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",  // Subscription mode for recurring prices
      success_url: `${req.nextUrl.origin}/success`,
      cancel_url: `${req.nextUrl.origin}/cancel`,
    });

    return NextResponse.json({ sessionUrl: session.url });
  } catch (error: any) {
    console.error("Stripe Error:", error);

    // Return detailed error responses
    return NextResponse.json({
      error: error.message || "Failed to create subscription checkout session",
      type: error.type,
    }, { status: 500 });
  }
}
