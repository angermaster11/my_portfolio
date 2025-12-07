"use client"

import type React from "react"

import { Github, Play, Sparkles, Zap, Code2, Boxes } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const projects = [
  {
    id: 0,
    name: "Cosmo Agent AI",
    category: "Agentic AI",
    desc: "Autonomous tool-using AI agent.",
    summary:
      "Executes workflows, API calls, and browser tasks automatically with reasoning, decision-making, and error recovery.",
    image: "/cosmo-ai-agent-autonomous.jpg",
    stack: ["LLMs", "LangChain", "Python", "Tools"],
    github: "https://github.com/angermaster11",
    video: "https://drive.google.com/file/d/1TDxi4dBv5IidKmtoKBPWqqX0udz_T5rQ/view?usp=sharing",
    highlights: ["Multi-tool integration", "Autonomous execution", "Self-recovery"],
    stats: { tools: "50+", uptime: "99.9%", tasks: "1000+" },
  },

  {
    id: 1,
    name: "EvalX – OCR & NLP Exam Checker",
    category: "AI + Computer Vision",
    desc: "Automatic handwritten answer evaluation system.",
    summary:
      "Processes handwritten answers using OCR + NLP + CV pipelines to grade responses instantly.",
    image: "/evalx-exam-evaluation.jpg",
    stack: ["Vision Transformer", "OCR", "Python", "FastAPI"],
    github: "https://github.com/angermaster11",
    video: "https://youtu.be/lHsTRpS1Js4?si=WWMB9zhKJ4Ds17ak",
    highlights: ["OCR pipeline", "Semantic grading", "Real-time evaluation"],
    stats: { accuracy: "92%", speed: "0.8s/page", dataset: "50K+" },
  },

  {
    id: 2,
    name: "Exam Evaluation Dashboard",
    category: "AI + Web",
    desc: "Complete exam evaluation dashboard with model integration.",
    summary:
      "Upload questions and answers, run evaluation, generate scores, verify correctness, and download reports.",
    image: "/exam-evaluation-system-ai.jpg",
    stack: ["FastAPI", "React", "Python", "OCR", "NLP"],
    github: "https://github.com/angermaster11",
    video: "https://youtu.be/xAejgwBIVE4?si=Jji9_k5iO6HpmF8G",
    highlights: ["End-to-end workflow", "AI grading", "Detailed analytics"],
    stats: { accuracy: "90%+", users: "500+", uploads: "10K+" },
  },
];


  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      "Computer Vision": <Code2 size={16} />,
      "Deep Learning": <Zap size={16} />,
      "Agentic AI": <Boxes size={16} />,
    }
    return icons[category] || <Sparkles size={16} />
  }

  const getCategoryGradient = (category: string) => {
    const gradients: { [key: string]: string } = {
      "Computer Vision": "from-cyan-500/40 to-blue-500/40",
      "Deep Learning": "from-purple-500/40 to-pink-500/40",
      "Agentic AI": "from-emerald-500/40 to-teal-500/40",
    }
    return gradients[category] || "from-cyan-500/40 to-blue-500/40"
  }

  const handleMouseMove = (e: React.MouseEvent, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section id="featured-projects" className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 animate-scale-in">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Featured Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-shift">
            Showcase of Excellence
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI/ML projects demonstrating real-world applications, advanced architectures, and
            production-ready solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.08}s` }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="project-hover glass-effect glass-effect-strong overflow-hidden border-2 animate-border-glow glow-effect h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-card to-background">
                  <img
                    src={project.image || "/placeholder.svg?height=256&width=512"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${getCategoryGradient(project.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <Badge
                      className={`glass-effect flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-gradient-to-r ${getCategoryGradient(project.category)} border-accent/50 badge-glow`}
                    >
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </Badge>
                  </div>

                  {/* Stats preview on hover */}
                  {hoveredId === project.id && (
                    <div className="absolute inset-0 flex items-end justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent animate-fade-in">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-accent">{value}</div>
                          <div className="text-xs text-foreground/70 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent smooth-transition text-pretty">
                      {project.name}
                    </h3>
                    <p className="text-foreground/60 text-sm italic">{project.desc}</p>
                  </div>

                  {/* Summary */}
                  <p className="text-foreground/75 text-base leading-relaxed mb-6 flex-grow">{project.summary}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-3 py-1 glass-effect border-accent/30 text-accent group-hover:border-accent/80 group-hover:bg-accent/10 smooth-transition"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-border/50">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-full flex items-center gap-1.5 group-hover:border-cyan-500/60 smooth-transition"
                      >
                        <Zap size={12} />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/80 hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-blue-500/40 smooth-transition group/link"
                    >
                      <Github size={16} className="group-hover/link:scale-125 smooth-transition" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-500/80 hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-pink-500/40 smooth-transition group/link"
                    >
                      <Play size={16} className="group-hover/link:scale-125 smooth-transition" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-effect glass-effect-strong border-2 border-accent/50 text-accent hover:border-accent hover:bg-accent/10 smooth-transition group font-semibold"
          >
            <span>View All Projects</span>
            <span className="group-hover:translate-x-2 smooth-transition">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
