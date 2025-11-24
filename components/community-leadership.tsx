import { Users, Globe, Award, FileCheck, Cpu, Heart } from "lucide-react"

const roles = [
  {
    title: "Vice President",
    organization: "OSU - Society of Petroleum",
    metric: "Strategy & Outreach",
    icon: Award,
    color: "text-[#66fcf1]",
  },
  {
    title: "Website Secretary",
    organization: "Social Welfare Initiative",
    metric: "+30% Engagement",
    icon: Globe,
    color: "text-white",
  },
  {
    title: "Co-Head",
    organization: "Ekasutram",
    metric: "250+ Participants",
    icon: Users,
    color: "text-[#66fcf1]",
  },
  {
    title: "External Examiner",
    organization: "VIT Pune",
    metric: "100+ Projects",
    icon: FileCheck,
    color: "text-white",
  },
  {
    title: "Senior Technical Member",
    organization: "Robotics Forum",
    metric: "AR/VR Development",
    icon: Cpu,
    color: "text-[#66fcf1]",
  },
  {
    title: "Digital Literacy Advocate",
    organization: "Aatmabodh",
    metric: "50+ Seniors Empowered",
    icon: Heart,
    color: "text-white",
  },
]

export function CommunityLeadership() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#e5e7eb]">
            <span className="text-[#66fcf1]">05.</span> Community & Leadership
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">Extracurricular Impact</p>
        </div>

        <div className="relative w-full">
          {/* Gradient Masks for scrolling indication */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0b0c10] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0b0c10] to-transparent z-20 pointer-events-none" />

          {/* Horizontal Scroll Container */}
          <div className="flex justify-center overflow-x-auto pb-8 pt-4 gap-6 snap-x scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {roles.map((role, index) => (
              <div key={index} className="snap-center shrink-0 group relative">
                {/* Connecting Line (Decorational) */}
                <div className="absolute top-1/2 -right-3 w-6 h-[2px] bg-[#1f2833] hidden md:block last:hidden" />

                {/* Circular Card */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#1f2833]/30 backdrop-blur-sm border border-[#66fcf1]/20 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-[#66fcf1] group-hover:bg-[#1f2833]/50 group-hover:shadow-[0_0_20px_rgba(102,252,241,0.2)]">
                  <div
                    className={`p-3 rounded-full bg-[#0b0c10]/50 mb-2 ${role.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <role.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-white font-bold text-center text-sm md:text-base leading-tight mb-1">
                    {role.title}
                  </h3>
                  <p className="text-[#66fcf1] text-xs md:text-sm font-mono font-bold mb-1">{role.metric}</p>
                  <p className="text-gray-400 text-[10px] md:text-xs text-center leading-tight">{role.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
