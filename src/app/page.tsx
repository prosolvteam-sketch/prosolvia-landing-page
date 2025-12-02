"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Database, LayoutDashboard, Mail, Smartphone, Layers, Globe, Search, PenTool, Code2, Rocket, Menu, X, ChevronRight, Terminal, Cpu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"

// --- PROSOLV OFFICIAL LOGO (Industrial Theme) ---
const ProSolvLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="2" stroke="#06b6d4" strokeWidth="2" />
    <path d="M10 16H22" stroke="#06b6d4" strokeWidth="2" strokeLinecap="square" />
    <path d="M16 10V22" stroke="#06b6d4" strokeWidth="2" strokeLinecap="square" />
    <rect x="14" y="14" width="4" height="4" fill="#06b6d4" />
  </svg>
)

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden font-sans selection:bg-cyan-500/30">

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight uppercase">
            <ProSolvLogo />
            <span className="tracking-widest">ProSolv</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:inline-flex px-6 py-2.5 bg-primary text-background text-sm font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all rounded-sm"
            >
              Initiate Project
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/5 transition-colors rounded-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10 bg-background"
            >
              <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
                <Link
                  href="#services"
                  className="px-4 py-3 hover:bg-white/5 transition-colors text-sm font-medium uppercase tracking-wider border-l-2 border-transparent hover:border-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="px-4 py-3 hover:bg-white/5 transition-colors text-sm font-medium uppercase tracking-wider border-l-2 border-transparent hover:border-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-3 hover:bg-white/5 transition-colors text-sm font-medium uppercase tracking-wider border-l-2 border-transparent hover:border-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-3 bg-primary text-background text-sm font-bold uppercase tracking-wider text-center rounded-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Initiate Project
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-grid-pattern">
          {/* Industrial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-widest rounded-sm"
                >
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                  System Operational
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
                >
                  ENGINEERING <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">DIGITAL EXCELLENCE</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-cyan-500/30 pl-6"
                >
                  We architect high-performance software solutions. From field operating systems to complex data dashboards, we build the infrastructure for your business growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Link
                    href="#contact"
                    className="px-8 py-4 bg-primary text-background font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all flex items-center gap-2 rounded-sm group"
                  >
                    Start Project <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#services"
                    className="px-8 py-4 bg-transparent text-foreground font-medium uppercase tracking-wider border border-white/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all rounded-sm"
                  >
                    View Capabilities
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-full opacity-20" />
                <div className="relative border border-white/10 bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl shadow-cyan-900/20">
                  <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    <div className="ml-4 text-xs font-mono text-muted-foreground">dashboard.sys</div>
                  </div>
                  <Image
                    src="/images/hero-dashboard.png"
                    alt="ProSolv Interface"
                    width={800}
                    height={500}
                    className="w-full h-auto opacity-90"
                    priority
                  />
                  {/* Tech Overlay */}
                  <div className="absolute bottom-6 left-6 p-4 bg-background/90 border border-white/10 backdrop-blur-md rounded-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-mono text-green-400">SYSTEM ONLINE</span>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">
                      <div>UPTIME: 99.99%</div>
                      <div>LATENCY: 24ms</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack Ticker */}
        <section className="py-8 border-y border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6 overflow-hidden">
            <div className="flex gap-16 items-center justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {["NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "SUPABASE", "POSTGRESQL", "AWS"].map((tech) => (
                <span key={tech} className="text-lg font-mono font-bold tracking-widest text-white/60 hover:text-cyan-400 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">CORE CAPABILITIES</h2>
                <p className="text-muted-foreground max-w-xl text-lg border-l-2 border-cyan-500/20 pl-4">
                  Deploying advanced technical solutions for complex operational challenges.
                </p>
              </div>
              <Link href="#contact" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm uppercase tracking-widest flex items-center gap-2 group">
                Full Service List <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={<Smartphone />}
                title="Mobile Engineering"
                description="Native-performance applications for iOS and Android. Built for reliability in the field."
              />
              <ServiceCard
                icon={<Globe />}
                title="Web Platforms"
                description="Scalable, secure, and SEO-optimized web applications using Next.js architecture."
              />
              <ServiceCard
                icon={<Cpu />}
                title="Field OS"
                description="Custom operating systems for logistics, inventory, and crew management."
              />
              <ServiceCard
                icon={<Database />}
                title="Backend Systems"
                description="High-availability API infrastructure and secure database architecture."
              />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 bg-muted/20 border-y border-white/5 relative">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <div className="inline-block px-3 py-1 mb-4 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest rounded-sm">
                Case Studies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">DEPLOYED SOLUTIONS</h2>
            </div>

            <div className="space-y-24">
              {/* Power Connect */}
              <CaseStudyRow
                title="Power Connect"
                category="Utility Management Platform"
                description="A comprehensive field operations platform enabling real-time crew tracking, automated dispatch, and work order management for major utility providers."
                stats={[
                  { label: "Active Users", value: "500+" },
                  { label: "Uptime", value: "99.9%" },
                  { label: "Efficiency", value: "+40%" }
                ]}
                image="/images/power-connect.png"
                align="left"
              />

              {/* Superior Technologies */}
              <CaseStudyRow
                title="Superior Technologies"
                category="Industrial Asset Management"
                description="Lifecycle management system for heavy industrial equipment. Features predictive maintenance scheduling and real-time inventory tracking."
                stats={[
                  { label: "Assets Tracked", value: "10k+" },
                  { label: "Cost Savings", value: "25%" },
                  { label: "Data Points", value: "1M/day" }
                ]}
                image="/images/superior-tech.png"
                align="right"
              />

              {/* Conquest Field OS */}
              <CaseStudyRow
                title="Conquest Field OS"
                category="Field Service Operating System"
                description="Next-generation OS for field service teams. Integrates locate tickets, daily reporting, and customer portals into a unified interface."
                stats={[
                  { label: "Response Time", value: "<100ms" },
                  { label: "Adoption", value: "100%" },
                  { label: "Errors", value: "~0%" }
                ]}
                image="/images/conquest-os.png"
                align="left"
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">EXECUTION PROTOCOL</h2>
              <p className="text-muted-foreground">Our systematic approach to software delivery.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", icon: Search },
                { step: "02", title: "Architecture", icon: Layers },
                { step: "03", title: "Development", icon: Terminal },
                { step: "04", title: "Deployment", icon: Rocket }
              ].map((item, i) => (
                <div key={item.step} className="relative p-6 border border-white/10 bg-background/50 backdrop-blur-sm hover:border-cyan-500/50 transition-colors group rounded-sm">
                  <div className="text-4xl font-bold text-white/5 mb-4 absolute top-4 right-4">{item.step}</div>
                  <item.icon className="w-8 h-8 text-cyan-400 mb-6" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="h-1 w-12 bg-cyan-500/50 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-cyan-950/10 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-background border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">INITIATE COLLABORATION</h2>
                  <p className="text-muted-foreground mb-8">
                    Ready to upgrade your digital infrastructure? Contact our engineering team to discuss your requirements.
                  </p>

                  <div className="flex items-center gap-4 text-cyan-400 font-mono text-sm">
                    <Mail className="w-5 h-5" />
                    <span>contact@prosolv.dev</span>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="NAME" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none transition-colors rounded-sm" />
                    <input type="email" placeholder="EMAIL" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none transition-colors rounded-sm" />
                  </div>
                  <textarea placeholder="PROJECT DETAILS" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none transition-colors h-32 resize-none rounded-sm" />
                  <button className="w-full bg-primary text-background font-bold uppercase tracking-wider py-4 hover:bg-cyan-400 transition-colors rounded-sm">
                    Send Transmission
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 bg-background text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-50">
            <ProSolvLogo />
            <span className="font-bold text-lg tracking-widest uppercase">ProSolv</span>
          </div>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} ProSolv LLC. Systems Operational.
          </p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all group rounded-sm">
      <div className="text-cyan-400 mb-6 w-12 h-12 flex items-center justify-center bg-cyan-500/10 rounded-sm group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function CaseStudyRow({ title, category, description, stats, image, align }: { title: string, category: string, description: string, stats: { label: string, value: string }[], image: string, align: 'left' | 'right' }) {
  return (
    <div className={`flex flex-col lg:flex-row gap-12 items-center ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
      <div className="flex-1 space-y-6">
        <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest">{category}</div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>

        <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <button className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-cyan-400 transition-colors group">
          View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex-1 w-full">
        <div className="relative aspect-video bg-muted rounded-sm overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors z-10" />
          <Image src={image} alt={title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />

          {/* Decorative UI Elements */}
          <div className="absolute top-4 right-4 z-20 flex gap-1">
            <div className="w-1 h-1 bg-white/50" />
            <div className="w-1 h-1 bg-white/50" />
            <div className="w-1 h-1 bg-white/50" />
          </div>
          <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] text-white/50">
            IMG_SRC: {image.split('/').pop()}
          </div>
        </div>
      </div>
    </div>
  )
}
