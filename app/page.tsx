import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Key, Server } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">EncryptGate</span>
          </Link>
          <nav className="hidden md:flex space-x-10">
            <Link href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-base font-medium text-gray-500 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="#pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center">
            <Button variant="outline" className="mr-4">
              Log in
            </Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Secure Your Data with</span>
                <span className="block text-blue-600">EncryptGate</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                State-of-the-art encryption for businesses and individuals. Protect your sensitive information with
                ease.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Lock className="h-12 w-12 text-blue-600" />}
                title="End-to-End Encryption"
                description="Secure your data with military-grade encryption algorithms."
              />
              <FeatureCard
                icon={<Key className="h-12 w-12 text-blue-600" />}
                title="Key Management"
                description="Easily manage and rotate encryption keys to maintain security."
              />
              <FeatureCard
                icon={<Server className="h-12 w-12 text-blue-600" />}
                title="Secure Storage"
                description="Store your encrypted data in our highly secure cloud infrastructure."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-gray-200">
                <TimelineItem
                  step={1}
                  title="Sign Up"
                  description="Create your EncryptGate account and set up your encryption preferences."
                />
                <TimelineItem
                  step={2}
                  title="Upload Data"
                  description="Securely upload your sensitive data to the EncryptGate platform."
                />
                <TimelineItem
                  step={3}
                  title="Encrypt"
                  description="Your data is automatically encrypted using advanced algorithms."
                />
                <TimelineItem
                  step={4}
                  title="Access Securely"
                  description="Retrieve your data anytime, anywhere, with proper authentication."
                />
              </ol>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <PricingCard
                title="Basic"
                price="$9.99"
                features={["1GB Encrypted Storage", "End-to-End Encryption", "Basic Key Management", "Email Support"]}
              />
              <PricingCard
                title="Pro"
                price="$29.99"
                features={[
                  "10GB Encrypted Storage",
                  "Advanced Encryption Options",
                  "Full Key Management Suite",
                  "Priority Support",
                ]}
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                features={[
                  "Unlimited Encrypted Storage",
                  "Custom Encryption Solutions",
                  "Dedicated Key Management",
                  "24/7 Premium Support",
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Secure Your Data?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust EncryptGate with their sensitive information.
            </p>
            <Button size="lg" variant="secondary">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} EncryptGate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-500">{description}</p>
    </div>
  )
}

function TimelineItem({ step, title, description }) {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
        <span className="text-blue-600 font-bold">{step}</span>
      </span>
      <h3 className="font-medium leading-tight text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </li>
  )
}

function PricingCard({ title, price, features, highlighted = false }) {
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden ${highlighted ? "border-2 border-blue-500" : ""}`}>
      <div className={`px-6 py-8 ${highlighted ? "bg-blue-500 text-white" : "bg-white"}`}>
        <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>
        <div className="text-center">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-600">/month</span>}
        </div>
      </div>
      <div className="px-6 py-8 bg-gray-50">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Button className={`w-full mt-8 ${highlighted ? "bg-blue-500 hover:bg-blue-600" : ""}`}>
          {highlighted ? "Get Started" : "Choose Plan"}
        </Button>
      </div>
    </div>
  )
}

