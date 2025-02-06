"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small teams getting started with email security",
    features: [
      "Up to 10 users",
      "Basic AI threat detection",
      "Email sandboxing",
      "Standard support",
      "Real-time threat monitoring",
    ],
  },
  {
    name: "Professional",
    price: "$299",
    description: "Advanced features for growing organizations",
    features: [
      "Up to 50 users",
      "Advanced AI analysis",
      "Multi-stage sandboxing",
      "Priority support",
      "Advanced phishing protection",
      "Custom rules engine",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large enterprises",
    features: [
      "Unlimited users",
      "Custom AI models",
      "Dedicated sandbox environments",
      "24/7 premium support",
      "Zero-day threat prevention",
      "Advanced automation",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="container pt-32 pb-32 md:pt-40 md:pb-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Simple, Transparent Pricing</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Choose the plan that best fits your organization's needs. All plans include our core security features.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3"
      >
        {plans.map((plan, index) => (
          <Card key={plan.name} className="relative flex flex-col">
            {index === 1 && (
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              {index === 0 && (
                <Button className="w-full" variant="outline">
                  Continue
                </Button>
              )}
              {index === 1 && <Button className="w-full">Continue</Button>}
              {index === 2 && (
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </div>
  )
}

