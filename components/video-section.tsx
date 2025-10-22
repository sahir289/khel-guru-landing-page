"use client"

import { Card } from "@/components/ui/card"
import { url } from "inspector";
import { Play } from "lucide-react"

const videos = [
  {
    title: "How to Get Started",
    description: "Learn the basics of playing on KHELGURU",
    thumbnail: "/gaming-tutorial-video-thumbnail.jpg",
    url: "/getting-started-video.mp4",
    duration: "3:45",
  },
  {
    title: "Poker Strategy Guide",
    description: "Master the art of poker with expert tips",
    thumbnail: "/poker-cards-strategy-video.jpg",
    url: "/poker-strategy-video.mp4",
    duration: "8:20",
  },
  {
    title: "Winning Moments",
    description: "Watch our players celebrate their big wins",
    thumbnail: "/celebration-winning-gaming.jpg",
    url: "/winning-moments-video.mp4",
    duration: "5:15",
  },
  {
    title: "Fantasy Sports Tips",
    description: "Build winning teams with our expert advice",
    thumbnail: "/fantasy-sports-cricket.jpg",
    url: "/fantasy-sports-tips-video.mp4",
    duration: "6:30",
  },
]

export function VideoSection() {
  return (
    <section id="videos" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Learn & <span className="text-primary">Master</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Watch tutorials, strategies, and winning moments from our community
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card
              key={video.title}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video Wrapper */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary group-hover:bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-all animate-pulse-glow">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-md bg-black/80 text-white text-sm font-medium">
                  {video.duration}
                </div>

                {/* Actual Video Element */}
                <video
                  src={video.url}
                  controls
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  poster={video.thumbnail}
                  preload="metadata"
                  muted
                  playsInline
                ></video>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                <p className="text-foreground/70">{video.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

