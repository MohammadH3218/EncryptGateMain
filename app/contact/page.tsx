"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Building, User } from "lucide-react"
import React from "react"
import { ToastProvider, useToast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <ToastProvider>
      <ContactForm />
    </ToastProvider>
  )
}

function ContactForm() {
  const { toast } = useToast()

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
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000"

      // Make a POST request to your backend /send-email route
      const response = await fetch(`${apiBaseUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          message: "Message sent: We'll get back to you as soon as possible.",
          type: "success",
        })
        form.reset()
      } else {
        const errorData = await response.json()
        toast({
          message: errorData.error || "Failed to send your message. Please try again later.",
          type: "error",
        })
      }
    } catch (error) {
      toast({
        message: "There was an error sending your message. Please try again later.",
        type: "error",
      })
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
          Have questions about EncryptGate? We are here to help. Fill out the form below and we will get back to you
          shortly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-16 max-w-xl"
      >
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
      </motion.div>
    </div>
  )
}
