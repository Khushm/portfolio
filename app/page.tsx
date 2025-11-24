import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import { CodePlayground } from "@/components/code-playground"
import { ValidationCheck } from "@/components/validation-check" // Import ValidationCheck component
import { CommunityLeadership } from "@/components/community-leadership" // Import the new component
import { ImpactBeyondCode } from "@/components/impact-beyond-code" // Import the new component

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c10] overflow-x-hidden selection:bg-[#66fcf1] selection:text-[#0b0c10]">
      {/* Fixed Navigation or Status Bar could go here */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#66fcf1] to-[#7c3aed] z-50" />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <CodePlayground />
      <ValidationCheck /> {/* Add ValidationCheck section */}
      <CommunityLeadership />
      <Contact />
      <ImpactBeyondCode /> {/* Add ImpactBeyondCode section at the end */}
    </main>
  )
}
