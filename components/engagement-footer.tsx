"use client"

import { useEffect, useState } from "react"
import { Activity, Brain, Eye, Cpu, Database } from "lucide-react"

export function EngagementFooter() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mouseActivity, setMouseActivity] = useState(0)
  const [engagementScore, setEngagementScore] = useState(85)
  const [systemStatus, setSystemStatus] = useState("OPTIMAL")

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(Math.round(progress), 100))
    }

    const handleMouseMove = () => {
      setMouseActivity((prev) => Math.min(prev + 1, 100))
    }

    // Decay mouse activity
    const interval = setInterval(() => {
      setMouseActivity((prev) => Math.max(prev - 5, 0))
      // Random fluctuation for "AI" feel
      setEngagementScore((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newVal = prev + change
        return Math.min(Math.max(newVal, 80), 99)
      })

      // Random system status updates
      if (Math.random() > 0.95) {
        const statuses = ["OPTIMAL", "PROCESSING", "ANALYZING", "INDEXING"]
        setSystemStatus(statuses[Math.floor(Math.random() * statuses.length)])
      }
    }, 1000)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  return (
    <footer className="w-full border-t border-[#66fcf1]/20 bg-[#0b0c10]/90 backdrop-blur-md py-3 px-6 fixed bottom-0 left-0 right-0 z-40 hidden md:block">
      <div className="container mx-auto flex items-center justify-between text-[10px] md:text-xs font-mono text-[#8892b0]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 min-w-[140px]">
            <Activity className="h-3 w-3 text-[#66fcf1] animate-pulse" />
            <span className="text-[#66fcf1]">SYS_STATUS: {systemStatus}</span>
          </div>
          <div className="flex items-center gap-2 hidden lg:flex">
            <Brain className="h-3 w-3 text-[#7c3aed]" />
            <span>NEURAL_NET: ONLINE</span>
          </div>
          <div className="flex items-center gap-2 hidden lg:flex">
            <Database className="h-3 w-3 text-[#7c3aed]" />
            <span>DB_CONNECTION: ESTABLISHED</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 min-w-[150px]">
            <Cpu className="h-3 w-3 text-[#66fcf1]" />
            <span>MODEL_CONFIDENCE: {engagementScore}%</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase hidden sm:inline text-[#7c3aed]">Scroll Depth</span>
            <div className="w-16 md:w-24 h-1 bg-[#1f2833] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#66fcf1] transition-all duration-300 ease-out box-glow"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <span className="w-8 text-right font-bold text-[#66fcf1]">{scrollProgress}%</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase hidden sm:inline text-[#7c3aed]">Cursor Activity</span>
            <div className="w-16 md:w-24 h-1 bg-[#1f2833] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7c3aed] transition-all duration-200 ease-out"
                style={{ width: `${mouseActivity}%` }}
              />
            </div>
            <Eye
              className={`h-3 w-3 transition-colors duration-300 ${mouseActivity > 50 ? "text-[#66fcf1]" : "text-[#7c3aed]"}`}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
