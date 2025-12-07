import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { FeaturedProjects } from "@/components/featured-projects"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
