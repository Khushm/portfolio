"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Database, Cloud, Code2, X, GraduationCap } from "lucide-react"
import { useState } from "react"

interface StackTraceContent {
  code: string
  cloud: string
  db: string
}

interface Job {
  role: string
  company: string
  location: string
  headline: string
  date: string
  summary: string // Changed description to summary
  achievements: string[] // Added achievements array
  stackTrace: StackTraceContent
  isAcademic?: boolean
  academicStats?: string[]
}

const jobs: Job[] = [
  {
    role: "Graduate Student",
    company: "The Ohio State University",
    location: "US",
    headline: "MS in Computer Science and Engineering",
    date: "2024 – Expected 2026",
    summary:
      "Pursuing a research-focused Master's with an emphasis on AI and Data Mining. Actively engaging in advanced coursework and hands-on projects to deepen understanding of scalable intelligent systems.",
    achievements: ["Advanced AI & Data Mining", "Research-focused curriculum", "GPA: 3.78/4.0"],
    stackTrace: {
      code: "Advanced AI, Data Mining, Operating Systems",
      cloud: "Research-focused curriculum with hands-on projects",
      db: "GPA: 3.78/4.0",
    },
    isAcademic: true,
    academicStats: ["GPA: 3.78/4.0"],
  },
  {
    role: "Undergraduate Student",
    company: "Vishwakarma Institute of Technology",
    location: "India",
    headline: "B.Tech in Computer Engineering",
    date: "2019 – 2023",
    summary:
      "Completed a rigorous Computer Engineering curriculum, laying a strong foundation in full-stack development and system architecture. Demonstrated consistent academic excellence.",
    achievements: ["Core Computer Engineering", "Full-Stack Development", "Rank: Top 17%, CGPA: 9.24/10"],
    stackTrace: {
      code: "Computer Engineering Core, Full-Stack Development",
      cloud: "Comprehensive engineering curriculum with practical applications",
      db: "Rank: Top 17%, CGPA: 9.24/10",
    },
    isAcademic: true,
    academicStats: ["Rank: Top 17%", "CGPA: 9.24/10"],
  },
  {
    role: "Data Scientist",
    company: "The Ohio State University",
    location: "US",
    headline: "[Current Focus] Architecting Real-time Autonomous Diagnostics",
    date: "Sep 2024 – Present",
    summary:
      "Currently architecting real-time diagnostic solutions and automating data pipelines. Leading the development of a RAG-powered chatbot to democratize data access for non-technical stakeholders.",
    achievements: [
      "Automated ETL for 10-year FDA data",
      "Built RAG Chatbot (LangChain/LLM)",
      "Cut diagnostic costs by $200+/unit",
    ],
    stackTrace: {
      code: "Python, SQL, RAG (LangChain/LLM) implementation.",
      cloud: "Google Maps API, Mobile Sensor Integration, Agile/Scrum best practices.",
      db: "Cut $200+ per wheelchair in diagnostic costs; Enabled non-technical query access.",
    },
  },
  {
    role: "Data Scientist",
    company: "North South University",
    location: "Bangladesh, Remote",
    headline: "Deploying Advanced NLP for Global Public Health & Policy",
    date: "Jan 2023 – Jul 2024",
    summary:
      "Led advanced NLP research on suicide-ideation detection, processing large-scale multilingual datasets. Developed robust statistical models to identify linguistic markers of distress.",
    achievements: ["Published in JMIR (2023)", "Improved stress prediction by 15%", "Processed 10,000+ posts"],
    stackTrace: {
      code: "NLP (Transformers), Statistical Modeling, Python/R.",
      cloud: "Remote/Distributed Data Scraping, Data Engineering.",
      db: "Published research (JMIR DOI); Improved stress-level prediction accuracy by 15%; Identified infodemic trends.",
    },
  },
  {
    role: "Data Analyst",
    company: "Markytics",
    location: "India, Remote",
    headline: "End-to-End ML Pipeline for Client Retention",
    date: "Mar 2022 – Dec 2022",
    summary:
      "Engineered end-to-end ML pipelines for client retention, significantly improving predictive accuracy. Designed interactive dashboards to streamline executive decision-making.",
    achievements: [
      "Increased retention prediction by 12%",
      "Reduced reporting time by 40%",
      "Processed 50K+ user events",
    ],
    stackTrace: {
      code: "Python, XGBoost, ETL pipelines, Feature Engineering.",
      cloud: "Power BI, Cloud-based Data Warehousing.",
      db: "Increased client retention predictions by 12%; Reduced executive reporting time by 40%.",
    },
  },
  {
    role: "Product Data Analyst",
    company: "TomTom",
    location: "India",
    headline: "Geospatial Analytics for Strategic Decision-Making",
    date: "Jun 2021 – Feb 2022",
    summary:
      "Conducted large-scale geospatial analysis to inform strategic product roadmaps. Developed automation tools that processed millions of data points for C-suite insights.",
    achievements: ["Analyzed 1M+ geospatial points", "Built Python automation tools", "Influenced strategic roadmap"],
    stackTrace: {
      code: "Python, Geospatial Analysis, Automation Scripts.",
      cloud: "Data Visualization, Executive Presentation.",
      db: "Analyzed 1M+ geospatial data points; Influenced product roadmap decisions; Presented to C-suite.",
    },
  },
  {
    role: "MLOps Architect",
    company: " Integrated Active Monitoring Pvt. Ltd.",
    location: "India",
    headline: "End-to-End Deep Learning Pipeline & Operational Automation",
    date: "Oct 2021 – Feb 2022",
    summary:
      "Developed and deployed a high-performance, real-time Computer Vision solution that automated critical fleet and infrastructure monitoring tasks, shifting the focus from manual observation to alert validation. This project demanded expertise across customized model training, scalable full-stack deployment, and measurable business impact via resource optimization.",
    achievements: ["SLASHED operational manual monitoring time by over 96% (from 24 hours to 1 hour/day) by automating mission-critical logistics tracking alerts.", "Engineered a proprietary solution that integrated customized detection (PPYolo) and tracking (ByteTracker) models, achieving >98% detection precision across variable environmental conditions.", "Reduced administrative and retail operational errors through parallel systems (Behavioral Analytics and OCR validation), decreasing promotional text errors by 70% and cutting invoice search time from hours to seconds."],
    stackTrace: {
      code: "Python, PPYolo, ByteTracker, OpenCV, VGG, FaceNet, PaddleOCR \n Custom model architecture selection, fine-tuning, integration of proprietary tracking logic, and high-performance image processing.",
      infra: "FastAPI, Docker, RabbitMQ, React, Bash, NVIDIA Jetson Nano \n Full-stack orchestration, microservice communication via message queues, containerization for portability, and optimized deployment on edge hardware.",
      db: "MongoDB, Elasticsearch, Postman, OCR/Invoice Data \n Designed the document retrieval schema, implemented efficient real-time data ingestion, and utilized specialized indexing for near-instantaneous search (hours $\rightarrow$ seconds).",
    },
  },
]

interface ModalContentProps {
  type: "code" | "cloud" | "db"
  job: Job
}

function ModalContent({ type, job }: ModalContentProps) {
  const titles = {
    code: "Technical Stack & Implementation",
    cloud: "Infrastructure & Tools",
    db: "Impact Metrics & Outcomes",
  }

  const content = {
    code: job.stackTrace.code,
    cloud: job.stackTrace.cloud,
    db: job.stackTrace.db,
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white mb-4">{titles[type]}</h3>
      <div className="bg-[#0b0c10] p-4 rounded-md border border-gray-800">
        <p className="text-[#66fcf1] text-sm font-mono leading-relaxed">{content[type]}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const [activeModal, setActiveModal] = useState<{ type: "code" | "cloud" | "db"; jobIndex: number } | null>(null)

  return (
    <section id="experience" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10" // Reduced bottom margin
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
          <span className="text-[#66fcf1]">02. </span>Execution Log
        </h2>
        <div className="h-1 w-20 bg-[#66fcf1]" />
      </motion.div>

      <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-8">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div
              className={`absolute -left-[5px] top-0 h-3 w-3 rounded-full ${"bg-[#66fcf1] shadow-[0_0_10px_#66fcf1]"}`}
            />

            <div className="group glass p-5 md:p-6 rounded-xl hover:border-[#66fcf1]/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 justify-between">
                {/* Left Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    {job.isAcademic && <GraduationCap className="w-6 h-6 text-[#66fcf1]" />}
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#66fcf1] transition-colors">
                      {job.role} | {job.company}, {job.location}
                    </h3>
                  </div>
                  <p className="text-[#66fcf1] font-semibold text-sm italic">{job.headline}</p>
                  <p className="text-[#45a29e] font-mono text-sm">{job.date}</p>

                  <div className="mt-4 text-gray-400 space-y-3">
                    <p className="leading-relaxed text-sm md:text-base">{job.summary}</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="text-xs md:text-sm font-mono text-gray-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Visual - Stack Trace Icons */}
                <div className="w-full md:w-48 flex-shrink-0 mt-4 md:mt-0">
                  {job.isAcademic ? (
                    <div className="bg-[#0b0c10]/50 p-4 rounded-lg border border-[#66fcf1]/30 h-full flex flex-col justify-center">
                      <div className="text-xs text-gray-500 font-mono mb-3 border-b border-gray-800 pb-2">
                        ACADEMIC_METRICS
                      </div>
                      <div className="space-y-3">
                        {job.academicStats?.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-[#66fcf1]">{stat.split(": ")[1]}</div>
                            <div className="text-xs text-gray-400 font-mono">{stat.split(": ")[0]}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#0b0c10]/50 p-4 rounded-lg border border-gray-800 h-full flex flex-col justify-center">
                      <div className="text-xs text-gray-500 font-mono mb-3 border-b border-gray-800 pb-2">
                        STACK_TRACE
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div
                          className="flex flex-col items-center gap-1 group/icon cursor-pointer"
                          onClick={() => setActiveModal({ type: "code", jobIndex: index })}
                        >
                          <Code2 className="w-6 h-6 text-gray-400 group-hover/icon:text-[#66fcf1] transition-colors hover:scale-110" />
                          <span className="text-[10px] text-gray-500 font-mono">CODE</span>
                        </div>
                        <div
                          className="flex flex-col items-center gap-1 group/icon cursor-pointer"
                          onClick={() => setActiveModal({ type: "cloud", jobIndex: index })}
                        >
                          <Cloud className="w-6 h-6 text-gray-400 group-hover/icon:text-[#66fcf1] transition-colors hover:scale-110" />
                          <span className="text-[10px] text-gray-500 font-mono">CLOUD</span>
                        </div>
                        <div
                          className="flex flex-col items-center gap-1 group/icon cursor-pointer"
                          onClick={() => setActiveModal({ type: "db", jobIndex: index })}
                        >
                          <Database className="w-6 h-6 text-gray-400 group-hover/icon:text-[#66fcf1] transition-colors hover:scale-110" />
                          <span className="text-[10px] text-gray-500 font-mono">DB</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeModal && !jobs[activeModal.jobIndex].isAcademic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0b0c10] border border-[#66fcf1] p-6 rounded-xl shadow-[0_0_30px_rgba(102,252,241,0.2)] max-w-md w-full relative z-10"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <ModalContent type={activeModal.type} job={jobs[activeModal.jobIndex]} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
