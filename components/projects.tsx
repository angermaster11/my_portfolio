"use client"

import { Github, Play, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
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
    video:
      "https://drive.google.com/file/d/1TDxi4dBv5IidKmtoKBPWqqX0udz_T5rQ/view?usp=sharing",
    highlights: ["Multi-tool integration", "Autonomous execution", "Self-recovery"],
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
  },

  {
    id: 2,
    name: "Exam Evaluation Dashboard",
    category: "AI + Web",
    desc: "Complete exam evaluation dashboard with integrated AI grading.",
    summary:
      "Upload questions and answers, run evaluation, generate automated scoring with verification and reports.",
    image: "/exam-evaluation-system-ai.jpg",
    stack: ["FastAPI", "React", "Python", "OCR", "NLP"],
    github: "https://github.com/angermaster11",
    video: "https://youtu.be/xAejgwBIVE4?si=Jji9_k5iO6HpmF8G",
    highlights: ["End-to-end workflow", "AI grading", "Detailed analytics"],
  },

  {
    id: 3,
    name: "Car License Plate Detection",
    category: "Computer Vision",
    desc: "Real-time ANPR using YOLO + OCR.",
    summary:
      "Detect number plates, extract characters, and process live video streams with high accuracy.",
    image: "/car-license-plate-detection-yolo.jpg",
    stack: ["YOLOv8", "OpenCV", "Python", "EasyOCR"],
    github: "https://github.com/angermaster11",
    video: "https://youtube.com/watch?v=demo1",
    highlights: ["98% accuracy", "Real-time processing", "40 FPS"],
  },

  {
    id: 4,
    name: "Facial Recognition System",
    category: "Computer Vision",
    desc: "Deep learning-based face detection and recognition.",
    summary:
      "Detect, recognize, and verify identities using CNN-based face embeddings.",
    image: "/facial-recognition-deep-learning.jpg",
    stack: ["TensorFlow", "OpenCV", "Python", "CNN"],
    github: "https://github.com/angermaster11",
    video: "https://youtube.com/watch?v=demo2",
    highlights: ["99% accuracy", "Multi-face detection", "Edge deployment"],
  },
];


  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Computer Vision": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "Deep Learning": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "Agentic AI": "bg-green-500/20 text-green-300 border-green-500/30",
    }
    return colors[category] || "bg-accent/20 text-accent border-accent/30"
  }

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-slide-in-down">Featured Projects</h2>
        <p className="text-center text-foreground/70 mb-12 animate-fade-in">
          AI/ML projects showcasing real-world applications and cutting-edge technologies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:border-accent transition-all duration-300 hover-glow flex flex-col animate-scale-in hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-card/50 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=192&width=384"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <Badge className={`${getCategoryColor(project.category)} border`}>{project.category}</Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
                <p className="text-foreground/70 text-sm mb-3">{project.summary}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs px-2 py-1 bg-accent/20 text-accent rounded flex items-center gap-1"
                    >
                      <TrendingUp size={12} />
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:bg-accent/20 transition-all">
                      {tech}
                    </Badge>
                  ))}
                  {project.stack.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.stack.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-all duration-200 hover:scale-110"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-all duration-200 hover:scale-110"
                  >
                    <Play size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
