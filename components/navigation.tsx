"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          AS
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {["about", "featured-projects", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-foreground/80 hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              {item === "featured-projects" ? "Featured" : item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border">
          <div className="flex flex-col gap-4 p-4">
            {["about", "featured-projects", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-foreground/80 hover:text-accent transition-colors duration-300 text-left py-2"
              >
                {item === "featured-projects" ? "Featured" : item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
