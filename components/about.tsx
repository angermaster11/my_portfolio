"use client"

import { Code2, Brain, Zap } from "lucide-react"

export function About() {
  const skills = [
    { category: "AI/ML", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"], icon: Brain },
    { category: "Computer Vision", items: ["YOLOv8", "OpenCV", "PIL", "Image Processing"], icon: Code2 },
    { category: "Deep Learning", items: ["CNN", "RNN", "Transformers", "GANs"], icon: Zap },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-card/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-in-down">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-up">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate AI/ML developer currently pursuing my 3rd year in B.Tech AIML. My journey with machine
              learning started with a fascination for how computers can "see" and interpret the world.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Through hands-on projects, I've developed expertise in computer vision, deep learning, and real-time
              detection systems. I'm particularly interested in building practical applications that solve real-world
              problems using Generative AI and Agentic AI systems.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, I'm exploring new ML techniques, contributing to open-source projects, and
              experimenting with innovative AI applications.
            </p>
          </div>

          <div className="grid gap-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              return (
                <div
                  key={skillGroup.category}
                  className="p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 hover-glow animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-accent" size={24} />
                    <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium hover:bg-accent/30 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
