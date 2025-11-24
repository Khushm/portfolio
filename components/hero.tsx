"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 60 // Reduced for cleaner look

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "#66fcf1"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(102, 252, 241, ${0.1 - distance / 1500})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center justify-center py-12 px-4 md:px-8 relative overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-8 left-8 z-20"
      >
        <div className="relative">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(102, 252, 241, 0.4), 0 0 20px rgba(102, 252, 241, 0.2)",
                "0 0 20px rgba(102, 252, 241, 0.6), 0 0 40px rgba(102, 252, 241, 0.3)",
                "0 0 10px rgba(102, 252, 241, 0.4), 0 0 20px rgba(102, 252, 241, 0.2)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="rounded-full w-32 h-32 md:w-40 md:h-40 border-2 border-[#66fcf1] overflow-hidden"
          >
            <Image
              src="/images/mundada-khushboo-734-07087.jpg"
              alt="Khushboo Mundada - Software Engineer"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="z-10 text-center space-y-6 max-w-4xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-[#66fcf1] font-mono text-xl md:text-2xl mb-4 tracking-wider">SYSTEM.INIT_SEQUENCE()</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Khushboo
            <span className="block text-2xl md:text-4xl mt-2 text-gray-400 font-light">
              Architecting Intelligent, Scalable Systems
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-mono"
        >
          Graduate Student @ OSU | I build and deploy data-driven products that deliver measurable business impact,
          increasing efficiency and accelerating data-to-decision cycles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="pt-12"
        >
          <button
            onClick={() => {
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group relative px-8 py-4 bg-transparent border border-[#66fcf1] text-[#66fcf1] font-mono text-sm uppercase tracking-widest hover:bg-[#66fcf1] hover:text-[#0b0c10] transition-all duration-300 cursor-pointer"
          >
            Initialize Sequence
            <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6" />
            </span>
          </button>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent z-0 pointer-events-none" />
    </section>
  )
}
