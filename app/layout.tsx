import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KHELGURU - Premier Real Money Gaming Platform | Play & Win",
  description:
    "Join KHELGURU, India's leading real money gaming platform. Play poker, rummy, fantasy sports, and more. Safe, secure, and exciting gaming experience with instant withdrawals.",
  keywords: "real money gaming, online poker, rummy, fantasy sports, skill games, cash games, KHELGURU",
  openGraph: {
    title: "KHELGURU - Premier Real Money Gaming Platform",
    description: "Play poker, rummy, fantasy sports and win real money. Safe and secure gaming platform.",
    type: "website",
  },
  generator: "khel-guru",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
