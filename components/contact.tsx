"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const socials = [
    { icon: Github, href: "https://github.com/angermaster11", label: "GitHub" },
    { icon: Linkedin, href: "http://linkedin.com/in/arju-srivastava-48174129b/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/ArzooSriva14779", label: "Twitter" },
    { icon: Mail, href: "mailto:angermaster11@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background via-card/5 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-center text-foreground/70 mb-12 text-lg">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <Button type="submit" className="w-full bg-accent text-card hover:bg-accent/90 font-semibold py-2">
              Send Message
            </Button>

            {submitted && (
              <div className="p-3 bg-accent/20 text-accent rounded-lg text-sm text-center">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-accent flex-shrink-0" size={20} />
                  <a href="mailto:arju@example.com" className="text-foreground/80 hover:text-accent transition-colors">
                    angermaster11@gmail.com
                  </a>
                </div>

                <p className="text-foreground/70 text-sm">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                  just want to say hi, feel free to reach out!
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
