"use client"

import { Card } from "@/components/ui/card"
import { Shield, Zap, Headphones, Award, Lock, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "100% Safe & Secure",
    description: "Bank-grade encryption and secure payment gateways ensure your money is always safe.",
  },
  {
    icon: Zap,
    title: "Instant Withdrawals",
    description: "Get your winnings transferred to your account within minutes, 24/7.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help you with any queries.",
  },
  {
    icon: Award,
    title: "Fair Play Certified",
    description: "RNG certified games ensuring fair and transparent gameplay for all users.",
  },
  {
    icon: Lock,
    title: "Responsible Gaming",
    description: "Tools and resources to help you play responsibly and stay in control.",
  },
  {
    icon: TrendingUp,
    title: "Best Odds",
    description: "Competitive odds and exciting bonuses to maximize your winning potential.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why Choose <span className="text-primary">KHELGURU</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the best in real money gaming with our industry-leading features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
