import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { AiChatbot } from "@/components/ai-chatbot"
import { EngagementFooter } from "@/components/engagement-footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Khushboo | The Neural Architect",
  description: "Software Engineer & AI/ML Specialist",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0b0c10] text-gray-300`}>
        {children}
        <AiChatbot />
        <EngagementFooter />
      </body>
    </html>
  )
}
