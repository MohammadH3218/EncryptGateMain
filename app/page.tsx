"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Mail, Server } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      <section className="relative pt-32 md:pt-40">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent animate-gradient sm:text-6xl">
              Secure Your Email Communications with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              EncryptGate provides enterprise-grade email security powered by artificial intelligence and cloud
              infrastructure. Protect your organization from advanced threats.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg">
                  Learn more
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

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
      </section>

      <section className="mt-32 md:mt-40">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Enterprise-Grade Security Features</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Protect your organization with our comprehensive suite of security features powered by artificial
              intelligence and cloud infrastructure.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">AI-Powered Threat Detection</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Advanced machine learning models analyze email content, attachments, and sender behavior to detect
                    sophisticated threats in real-time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Lock className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Multi-Stage Sandboxing</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Triple-layer sandbox architecture ensures complete isolation of threats, protecting your
                    organization's infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Automated Response</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Intelligent automation handles threats according to severity, from quarantine to immediate blocking
                    of malicious senders.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Server className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Cloud Integration</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Seamless integration with major cloud providers ensures scalability, reliability, and
                    enterprise-grade security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 mb-32 md:mt-40 md:mb-40">
        <div className="container mx-auto">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-24 text-center shadow-2xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Securing Your Email Communications Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join leading organizations in protecting their email infrastructure with EncryptGate's advanced security
              platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.15" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="white" />
                  <stop offset={1} stopColor="white" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

