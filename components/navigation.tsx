"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <nav className="container flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <Shield className="h-8 w-8" />
          <span className="text-xl font-bold">EncryptGate</span>
        </Link>

        <div className="flex gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-lg transition-colors ${
                pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="navigation-underline"
                  className="absolute left-0 right-0 h-0.5 bg-foreground"
                  animate
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

