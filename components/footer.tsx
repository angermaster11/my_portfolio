"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground/70 text-sm">© {currentYear} Arju Srivastava. All rights reserved.</p>
            <p className="text-foreground/50 text-xs mt-1">Building intelligent systems with AI/ML</p>
          </div>

          <div className="flex gap-6 text-sm text-foreground/70">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
