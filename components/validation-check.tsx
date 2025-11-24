import { FileText, Trophy, ArrowUpRight } from "lucide-react"

export function ValidationCheck() {
  return (
    <section className="py-12 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-[#66fcf1] font-mono">04.</span>
            <span className="text-gray-100">Validation Check</span>
          </h2>
          <div className="h-1 w-20 bg-[#66fcf1] rounded-full" />
          <p className="mt-4 text-gray-400 font-mono text-sm">Academic Achievements & Industry Recognition</p>
        </div>

        {/* 2-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Publications */}
          <div className="group relative p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-[#66fcf1]/50 transition-colors duration-300 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#66fcf1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-lg bg-[#66fcf1]/10 text-[#66fcf1]">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-400">PUBLICATIONS & RESEARCH</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">White Paper: Public Health NLP</h3>

              <div className="flex-grow">
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  Published in <span className="text-[#66fcf1]">JMIR (2023)</span>. Developed novel NLP pipelines to
                  analyze multilingual text, identifying linguistic markers of distress for early risk detection in
                  underserved populations. This research lays the groundwork for real-time public health interventions.
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5 flex gap-4">
                <button className="text-[#66fcf1] text-xs font-mono hover:underline">View Abstract Snippet</button>
                <a
                  href="https://doi.org/10.2196/55511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#66fcf1] hover:text-[#45a29e] transition-colors font-mono text-xs group/link ml-auto"
                >
                  <span>DOI: 10.2196/55511</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Recognition */}
          <div className="group relative p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-[#66fcf1]/50 transition-colors duration-300 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#66fcf1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-lg bg-[#66fcf1]/10 text-[#66fcf1]">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-400">RECOGNIZED CONTRIBUTIONS</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Competitive Grants & Technical Leadership</h3>

              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#66fcf1] flex-shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#66fcf1]">Grace Hopper Celebration (GHC '25):</strong> Grant Recipient (
                    <span className="text-white font-mono">$1500</span>). Hosted a Braindate session on "Navigating ML
                    in Early-Stage Companies."
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#66fcf1] flex-shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#66fcf1]">ACM Transactions on Computing Education (ATCE '25):</strong>{" "}
                    Travel Grant Recipient (<span className="text-white font-mono">$1000</span>). Presented advanced
                    findings on image processing components of my research to industry leaders.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#66fcf1] flex-shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#66fcf1]">Ohio Celebration of Women in Computing (OCWIC '25):</strong>{" "}
                    Scholarship Recipient (<span className="text-white font-mono">$800</span>). Engaged with leaders
                    from 43+ organizations, gaining technical leadership insights.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#66fcf1] flex-shrink-0 mt-2" />
                  <span>
                    <strong className="text-[#66fcf1]">ACM SIGCHI '22:</strong> Grant Recipient (
                    <span className="text-white font-mono">$1250</span>) for presenting technical findings to a global
                    audience.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
