"use client"

import { motion } from "framer-motion"
import { Send, Linkedin, Github, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 md:px-8 max-w-5xl mx-auto pb-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-8 md:p-12 border border-gray-800 relative overflow-hidden mb-10"
      >
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="text-[#66fcf1]">06. </span>Init Handshake
            </h2>
            <p className="text-gray-400 mb-8 font-mono leading-relaxed">
              System is ready for new connections. Whether you have a question about my research, a project proposal, or
              just want to discuss the singularity, transmit a message.
            </p>

            <div className="flex gap-6 mb-12 lg:mb-0">
              <a
                href="#"
                className="p-3 glass rounded-lg hover:border-[#66fcf1] text-gray-400 hover:text-[#66fcf1] transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 glass rounded-lg hover:border-[#66fcf1] text-gray-400 hover:text-[#66fcf1] transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 glass rounded-lg hover:border-[#66fcf1] text-gray-400 hover:text-[#66fcf1] transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form className="flex-1 space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#66fcf1]">user.name</label>
              <input
                type="text"
                className="w-full bg-[#0b0c10] border border-gray-800 rounded p-3 text-gray-300 focus:border-[#66fcf1] focus:outline-none font-mono text-sm"
                placeholder="Enter identifier..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-[#66fcf1]">user.email</label>
              <input
                type="email"
                className="w-full bg-[#0b0c10] border border-gray-800 rounded p-3 text-gray-300 focus:border-[#66fcf1] focus:outline-none font-mono text-sm"
                placeholder="Enter signal source..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-[#66fcf1]">message.content</label>
              <textarea
                rows={4}
                className="w-full bg-[#0b0c10] border border-gray-800 rounded p-3 text-gray-300 focus:border-[#66fcf1] focus:outline-none font-mono text-sm"
                placeholder="Enter payload..."
              />
            </div>

            <button className="w-full py-3 bg-[#1f2833] hover:bg-[#66fcf1] hover:text-[#0b0c10] text-[#66fcf1] border border-[#66fcf1] rounded transition-all duration-300 font-mono text-sm uppercase tracking-wide flex items-center justify-center gap-2 group cursor-pointer">
              <span>Transmit Data</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </motion.div>

      <div className="text-center mt-12 text-gray-600 text-sm font-mono">
        <p>System Status: ONLINE | {new Date().getFullYear()}</p>
      </div>
    </section>
  )
}
