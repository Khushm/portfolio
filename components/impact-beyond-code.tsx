"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Mountain, Puzzle, Heart, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/images/whatsapp-20image-202025-11-19-20at-203.jpeg",
    alt: "Khushboo at tech conference with diverse group of professionals",
  },
  {
    src: "/images/img-20220723-225955.jpg",
    alt: "Khushboo presenting at a technical workshop",
  },
  {
    src: "/images/img20220723144447.jpg",
    alt: "Khushboo with team at academic event",
  },
  {
    src: "/images/img1.jpeg",
    alt: "Khushboo at SPE/ATCE conference",
  },
  {
    src: "/images/img-20200125-wa0038.jpg",
    alt: "Khushboo leading classroom workshop with students",
  },
  {
    src: "/images/img-20200125-wa0021.jpg",
    alt: "Khushboo mentoring students on digital literacy",
  },
]

export function ImpactBeyondCode() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 font-mono">
          <span className="text-[#66fcf1]">07. </span>Impact Beyond Code
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Photo Carousel - The Visual Register */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#66fcf1] to-[#45a29e] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass rounded-xl overflow-hidden aspect-video border border-gray-800">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Carousel Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-[#66fcf1]/20 text-white hover:text-[#66fcf1] rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-[#66fcf1]/20 text-white hover:text-[#66fcf1] rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImage === idx ? "bg-[#66fcf1] w-4" : "bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4 font-mono">The Visual Register</p>
        </div>

        {/* Right Side: Personal Focus */}
        <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
          <h3 className="text-xl text-gray-400 font-mono border-b border-[#66fcf1]/30 pb-2 inline-block">
            Personal Focus
          </h3>

          <div className="grid gap-6 w-full max-w-sm">
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-[#66fcf1]/20 transition-all group"
            >
              <div className="p-3 rounded-full bg-[#66fcf1]/10 text-[#66fcf1] group-hover:scale-110 transition-transform">
                <Puzzle className="w-8 h-8" />
              </div>
              <span className="text-xl text-gray-300 font-mono group-hover:text-white">Puzzle-solving</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-[#66fcf1]/20 transition-all group"
            >
              <div className="p-3 rounded-full bg-[#66fcf1]/10 text-[#66fcf1] group-hover:scale-110 transition-transform">
                <Mountain className="w-8 h-8" />
              </div>
              <span className="text-xl text-gray-300 font-mono group-hover:text-white">Trekking</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-[#66fcf1]/20 transition-all group"
            >
              <div className="p-3 rounded-full bg-[#66fcf1]/10 text-[#66fcf1] group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl text-gray-300 font-mono group-hover:text-white">Reading</span>
                <span className="text-xs text-gray-500 font-mono">Continuous Learning</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-[#66fcf1]/20 transition-all group"
            >
              <div className="p-3 rounded-full bg-[#66fcf1]/10 text-[#66fcf1] group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl text-gray-300 font-mono group-hover:text-white">Volunteering</span>
                <span className="text-xs text-gray-500 font-mono">Community Impact</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
