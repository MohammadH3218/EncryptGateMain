"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Server, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "We prioritize the security of your email communications above all else, implementing cutting-edge AI and multi-layer protection.",
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description:
      "Your data privacy is paramount. We maintain strict data protection standards and ensure complete confidentiality.",
  },
  {
    icon: Server,
    title: "Cloud Native",
    description:
      "Built for the modern cloud infrastructure, our platform seamlessly integrates with major cloud providers for maximum reliability.",
  },
  {
    icon: Users,
    title: "Customer Centric",
    description:
      "We believe in building lasting partnerships with our customers, providing dedicated support and continuous innovation.",
  },
]

export default function AboutPage() {
  return (
    <div className="container pt-32 pb-32 md:pt-40 md:pb-40">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-16">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{value.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Us in Securing the Future</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          We&apos;re on a mission to make email communications safer for organizations worldwide. Our team of security
          experts and AI researchers work tirelessly to stay ahead of emerging threats and provide cutting-edge
          protection for our customers.
        </p>
      </div>
    </div>
  )
}

