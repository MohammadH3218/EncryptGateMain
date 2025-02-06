"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Mail, Server, Bot, Cloud, Users, Bell } from "lucide-react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    name: "AI-Powered Threat Detection",
    description:
      "Advanced machine learning models analyze email content, attachments, and sender behavior to detect sophisticated threats in real-time.",
    icon: Shield,
  },
  {
    name: "Multi-Stage Sandboxing",
    description:
      "Triple-layer sandbox architecture ensures complete isolation of threats, protecting your organization's infrastructure.",
    icon: Lock,
  },
  {
    name: "Automated Response",
    description:
      "Intelligent automation handles threats according to severity, from quarantine to immediate blocking of malicious senders.",
    icon: Mail,
  },
  {
    name: "Cloud Integration",
    description:
      "Seamless integration with major cloud providers including AWS, Azure, and Google Cloud for ultimate scalability, reliability, and enterprise-grade security.",
    icon: Server,
  },
  {
    name: "Generative AI Analysis",
    description:
      "Advanced AI models analyze email patterns and content to identify potential threats that traditional systems might miss.",
    icon: Bot,
  },
  {
    name: "Cloud Infrastructure",
    description:
      "Built on reliable cloud infrastructure with multiple availability zones for high availability and redundancy.",
    icon: Cloud,
  },
  {
    name: "Role-Based Access",
    description: "Granular access controls and permissions ensure secure access for administrators and employees.",
    icon: Users,
  },
  {
    name: "Real-time Alerts",
    description: "Instant notifications for security events and threats, with detailed analytics and reporting.",
    icon: Bell,
  },
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto pt-32 pb-32 md:pt-40 md:pb-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Advanced Security Features</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Discover how EncryptGate protects your organization with cutting-edge security features powered by artificial
          intelligence and cloud infrastructure.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mt-16 sm:mt-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ADgwyWOeSzG47QDUG3zRx4UQ1XGVcN.png"
                alt="EncryptGate Dashboard"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto mt-32 max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{feature.name}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

