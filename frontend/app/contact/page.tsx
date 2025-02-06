"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Building, User, CheckCircle2, XCircle } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type SubmissionStatus = "idle" | "success" | "error"

export default function ContactPage() {
  const [status, setStatus] = useState<SubmissionStatus>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    const formData = {
      sender: (form.querySelector("#email") as HTMLInputElement).value,
      recipient: "contact@encryptgate.net",
      subject: `Message from ${(form.querySelector("#name") as HTMLInputElement).value}`,
      body: (form.querySelector("#message") as HTMLTextAreaElement).value,
      company: (form.querySelector("#company") as HTMLInputElement).value,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="container mx-auto pt-32 pb-32 md:pt-40 md:pb-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Get in Touch</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Have questions about EncryptGate? We're here to help. Fill out the form below and we'll get back to you
          shortly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-16 max-w-xl"
      >
        {status === "idle" ? (
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="name" placeholder="John Doe" className="pl-9" required />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="company" placeholder="Acme Inc." className="pl-9" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="john@example.com" className="pl-9" required />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px] pl-9" required />
                  </div>
                </div>

                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                {status === "success" ? (
                  <>
                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                    <CardTitle>Message Sent</CardTitle>
                    <CardDescription>We'll get back to you within 24 hours.</CardDescription>
                  </>
                ) : (
                  <>
                    <XCircle className="h-12 w-12 text-red-500" />
                    <CardTitle>Message Not Sent</CardTitle>
                    <CardDescription>Please try again later.</CardDescription>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  )
} 