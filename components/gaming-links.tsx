"use client"

import { Card } from "@/components/ui/card"
import { Spade, Diamond, Trophy, Gamepad2, Dices, Target, Zap, Crown } from "lucide-react"

const games = [
  {
    name: "Poker",
    icon: Spade,
    description: "Texas Hold'em, Omaha & more",
    color: "from-primary/20 to-primary/5",
    link: "/poker",
  },
  {
    name: "Rummy",
    icon: Diamond,
    description: "Classic & Pool Rummy",
    color: "from-secondary/20 to-secondary/5",
    link: "/rummy",
  },
  {
    name: "Fantasy Sports",
    icon: Trophy,
    description: "Cricket, Football & more",
    color: "from-primary/20 to-primary/5",
    link: "/fantasy",
  },
  {
    name: "Teen Patti",
    icon: Gamepad2,
    description: "Indian Poker variant",
    color: "from-secondary/20 to-secondary/5",
    link: "/teen-patti",
  },
  {
    name: "Ludo",
    icon: Dices,
    description: "Classic board game",
    color: "from-primary/20 to-primary/5",
    link: "/ludo",
  },
  {
    name: "Quiz Games",
    icon: Target,
    description: "Test your knowledge",
    color: "from-secondary/20 to-secondary/5",
    link: "/quiz",
  },
  {
    name: "Casual Games",
    icon: Zap,
    description: "Quick & fun games",
    color: "from-primary/20 to-primary/5",
    link: "/casual",
  },
  {
    name: "Tournaments",
    icon: Crown,
    description: "Compete for big prizes",
    color: "from-secondary/20 to-secondary/5",
    link: "/tournaments",
  },
]

export function GamingLinks() {
  return (
    <section id="games" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Choose Your <span className="text-primary">Game</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our wide range of skill-based games and start winning real money today
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => {
            const Icon = game.icon
            return (
              <Card
                key={game.name}
                className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${game.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{game.name}</h3>
                  <p className="text-sm text-foreground/60">{game.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
