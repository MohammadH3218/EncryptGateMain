import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import type React from "react" // Added import for React

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

import "./globals.css"

export const metadata = {
  title: "EncryptGate - Enterprise Email Security with AI",
  description: "Advanced email security system powered by AI and cloud infrastructure",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex-1 px-4 sm:px-6 lg:px-8 min-h-screen bg-background font-sans antialiased", GeistSans.variable, GeistMono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="encryptgate-theme">
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}

