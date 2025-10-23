"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-in fade-in slide-in-from-top duration-700">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-foreground/80">New: Instant Withdrawals Now Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Play Smart, <span className="text-primary">Win Real</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            India's most trusted real money gaming platform. Experience the thrill of poker, rummy, fantasy sports, and
            more with secure transactions and instant payouts.
          </p>

          <div className="mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-250">
            <p className="text-sm text-foreground/60 mb-4 font-medium">Choose Your Platform:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <a
                href="https://khelguru.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-sm font-medium text-foreground">khelguru.co.in</span>
                <ExternalLink className="w-3 h-3 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://khelguru777.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-sm font-medium text-foreground">khelguru777.com</span>
                <ExternalLink className="w-3 h-3 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://khelguru247.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-sm font-medium text-foreground">khelguru247.in</span>
                <ExternalLink className="w-3 h-3 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://khelguru247.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-sm font-medium text-foreground">khelguru247.com</span>
                <ExternalLink className="w-3 h-3 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <a
                href="https://khelguru.co.in"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-glow group cursor-pointer"
            >
              
              Start Playing Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 group bg-transparent"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/60 animate-in fade-in duration-700 delay-500">
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">✓</span>
              <span>100% Safe & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">✓</span>
              <span>Instant Withdrawals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">✓</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
