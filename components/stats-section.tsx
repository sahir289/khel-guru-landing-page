"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: "5M+", label: "Active Players", suffix: "" },
  { value: "₹500Cr+", label: "Winnings Paid", suffix: "" },
  { value: "50K+", label: "Daily Tournaments", suffix: "" },
  { value: "4.8", label: "User Rating", suffix: "/5" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-in fade-in slide-in-from-bottom ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
