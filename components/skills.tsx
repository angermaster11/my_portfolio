"use client"

import { Brain, Zap, Code2, Sparkles, Bot } from "lucide-react"

export function Skills() {
  const skillsData = [
    {
      category: "AI/ML Foundations",
      icon: Brain,
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Computer Vision",
      icon: Code2,
      skills: ["YOLOv8", "OpenCV", "PIL", "Image Processing", "Real-time Detection"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Deep Learning",
      icon: Zap,
      skills: ["CNN", "RNN", "Transformers", "GANs", "Transfer Learning"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Generative AI",
      icon: Sparkles,
      skills: ["LLMs", "Prompt Engineering", "RAG Systems", "Fine-tuning", "Embeddings"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Agentic AI",
      icon: Bot,
      skills: ["Agent Design", "Tool Integration", "LangChain", "Multi-step Reasoning", "Workflow Automation"],
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-slide-in-down">Skills & Expertise</h2>
        <p className="text-center text-foreground/70 mb-12 animate-fade-in">
          Comprehensive toolkit for building cutting-edge AI/ML solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon
            return (
              <div
                key={skillGroup.category}
                className="group p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border hover:border-accent transition-all duration-300 hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${skillGroup.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}
                  >
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, idx) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium hover:bg-accent/30 transition-all duration-200 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + idx * 0.05}s` }}
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
    </section>
  )
}
