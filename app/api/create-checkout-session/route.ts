// app/api/create-checkout-session/route.ts

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-01-27.acacia',
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'YOUR_STRIPE_PRICE_ID',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
    });

    return NextResponse.json({ sessionUrl: session.url });
  } catch (error) {
    console.error('Stripe session creation error:', error);
    return NextResponse.json({ error: 'Failed to create Stripe session' }, { status: 500 });
  }
}
