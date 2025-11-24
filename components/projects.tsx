"use client"

import { motion } from "framer-motion"
import { Bot, Brain, ArrowUpRight, Github, Code } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
          <span className="text-[#66fcf1]">02. </span>Compiled Research
        </h2>
        <div className="h-1 w-20 bg-[#66fcf1]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Project 1 - Large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 glass rounded-xl p-8 relative overflow-hidden group hover:border-[#66fcf1]/50 transition-all duration-300"
        >
          <div className="absolute top-4 right-4 flex gap-2">
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <ArrowUpRight className="w-5 h-5 text-[#66fcf1]" />
          </div>

          <div className="h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 text-[#66fcf1] font-mono text-sm mb-2">
                <Bot className="w-4 h-4" />
                <span>AUTONOMOUS_SYSTEMS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">RoboSpark</h3>
              <p className="text-gray-400 max-w-md">
                An autonomous drone fleet management system utilizing reinforcement learning for optimal pathfinding in
                complex environments.
              </p>
            </div>

            <div className="flex gap-3 text-sm font-mono text-gray-500">
              <span>Python</span>
              <span>ROS2</span>
              <span>PyTorch</span>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
            <Bot className="w-64 h-64 text-[#66fcf1]" />
          </div>
        </motion.div>

        {/* Project 2 - Small */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-8 relative overflow-hidden group hover:border-[#7c3aed]/50 transition-all duration-300"
        >
          <div className="absolute top-4 right-4">
            <ArrowUpRight className="w-5 h-5 text-[#7c3aed]" />
          </div>

          <div className="h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 text-[#7c3aed] font-mono text-sm mb-2">
                <Brain className="w-4 h-4" />
                <span>NEURAL_NETS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">CortexFlow</h3>
              <p className="text-gray-400 text-sm">
                Real-time data visualization tool for interpreting neural network decision boundaries.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-5 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <Brain className="w-40 h-40 text-[#7c3aed]" />
          </div>
        </motion.div>

        {/* Project 3 - Small */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-8 relative overflow-hidden group hover:border-[#66fcf1]/50 transition-all duration-300 md:col-span-1"
        >
          <div className="absolute top-4 right-4">
            <ArrowUpRight className="w-5 h-5 text-[#66fcf1]" />
          </div>

          <div className="h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 text-[#66fcf1] font-mono text-sm mb-2">
                <Code className="w-4 h-4" />
                <span>DEV_TOOLS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">CodeSynth</h3>
              <p className="text-gray-400 text-sm">
                AI-powered code snippet generator trained on high-quality open source repositories.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project 4 - Medium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-8 relative overflow-hidden group hover:border-[#7c3aed]/50 transition-all duration-300 md:col-span-2"
        >
          <div className="absolute top-4 right-4 flex gap-2">
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <ArrowUpRight className="w-5 h-5 text-[#7c3aed]" />
          </div>

          <div className="h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 text-[#7c3aed] font-mono text-sm mb-2">
                <Brain className="w-4 h-4" />
                <span>DEEP_LEARNING</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">VisionQuest</h3>
              <p className="text-gray-400 max-w-lg">
                Computer vision pipeline for detecting anomalies in industrial manufacturing lines using YOLOv8.
              </p>
            </div>
            <div className="flex gap-3 text-sm font-mono text-gray-500">
              <span>OpenCV</span>
              <span>Python</span>
              <span>TensorRT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
