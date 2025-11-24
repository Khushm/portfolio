"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface SkillCategory {
  id: string
  title: string
  tags: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "ml-ai",
    title: "ML/AI Core",
    tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "RAG (LLMs)", "NLP", "Hugging Face"],
  },
  {
    id: "backend-apis",
    title: "Backend & APIs",
    tags: ["Java", "JavaScript (ES6+)", "System Design", "RESTful APIs", "FastAPI", "Django", "Spring Boot", "Node.js"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    tags: ["AWS", "Kubernetes", "Docker", "Linux/Unix", "GCP", "CI/CD pipelines", "Logging & Monitoring"],
  },
  {
    id: "data-quality",
    title: "Data & Quality",
    tags: ["PostgreSQL", "MongoDB", "SQL", "Performance Optimization", "Secure Coding", "TDD", "Agile/Scrum"],
  },
  {
    id: "fundamentals",
    title: "Engineering Fundamentals",
    tags: ["C++", "TypeScript", "Git/GitHub", "Scalable Architecture", "Kotlin"],
  },
  {
    id: "future-focus",
    title: "Future Focus",
    tags: [],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 md:px-8 bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono"
          >
            <span className="text-[#66fcf1]">03. </span>The Arsenal: Specialized Toolkit
          </motion.h2>
          <p className="text-gray-400 font-mono text-xs">Organized by Domain • Hover for Dynamic Effects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategoryBox key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategoryBox({ category, index }: { category: SkillCategory; index: number }) {
  const isFutureFocus = category.id === "future-focus"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative glass rounded-xl border border-gray-800/50 p-6 min-h-[280px] overflow-hidden group hover:border-[#66fcf1]/40 transition-all duration-500"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#66fcf1]/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category Title */}
      <h3 className="relative z-10 text-xl font-bold font-mono mb-6 text-white group-hover:text-[#66fcf1] transition-colors duration-300">
        {category.title}
      </h3>

      {/* Floating Tags Container */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {isFutureFocus ? (
          // Future Focus Visual
          <div className="w-full h-40 flex flex-col items-center justify-center">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Sparkles className="w-16 h-16 text-[#66fcf1] opacity-40" />
            </motion.div>
            <p className="text-gray-500 text-xs mt-4 font-mono">Continuously Evolving</p>
          </div>
        ) : (
          category.tags.map((tag, i) => (
            <motion.div
              key={i}
              className="px-3 py-1.5 rounded-full bg-[#1f2833]/80 border border-[#66fcf1]/30 text-[#66fcf1] text-xs font-mono backdrop-blur-sm"
              animate={{
                y: [0, -8, 0],
                x: [0, Math.sin(i) * 4, 0],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(102, 252, 241, 0.8)",
                backgroundColor: "rgba(102, 252, 241, 0.1)",
              }}
            >
              {tag}
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  )
}
