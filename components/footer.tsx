import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="space-y-3 mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="font-bold">EncryptGate</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-[250px]">
              Advanced email security system powered by AI and cloud infrastructure
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-12">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EncryptGate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

