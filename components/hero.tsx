"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-1000 animate-float" />
      <div
        className="absolute top-1/2 left-1/3 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight animate-slide-in-down">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-glow-pulse">
              Arju Srivastava
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-foreground/80 text-balance animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            3rd Year B.Tech AIML Student | Computer Vision & Deep Learning Enthusiast
          </p>
        </div>

        <p
          className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed text-pretty animate-scale-in"
          style={{ animationDelay: "0.4s" }}
        >
          Building intelligent systems through machine learning. Specialized in YOLO-based detection, OCR, Generative
          AI, and Agentic AI systems.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-rotate-in"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-accent text-card rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 hover-glow"
          >
            View My Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-8 flex justify-center animate-bounce">
          <button
            onClick={() => scrollToSection("skills")}
            className="text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
