"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Database, LayoutDashboard, Mail, Smartphone, Layers, Globe, Search, PenTool, Code2, Rocket, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// --- PROSOLV OFFICIAL LOGO (Code Block) ---
const ProSolvLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4H14C19.5228 4 24 8.47715 24 14V14C24 19.5228 19.5228 24 14 24H6V4Z" stroke="#3B82F6" strokeWidth="3" />
    <path d="M14 10L18 14L14 18" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 28H14" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-2xl tracking-tight">
            <ProSolvLogo />
            <span>ProSolv</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:inline-flex px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
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
              className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-md"
            >
              <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
                <Link
                  href="#services"
                  className="px-4 py-3 hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="px-4 py-3 hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-3 hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-all text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for new projects
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">Digital Products</span> that scale.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                From high-performance mobile apps to complex field operating systems. We transform your business requirements into powerful software solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Link
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  Start a Project <ArrowRight size={18} />
                </Link>
                <Link
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mt-16 mx-auto max-w-5xl"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20" />
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20 bg-background/50 backdrop-blur-sm">
                  <Image
                    src="/images/hero-dashboard.png"
                    alt="ProSolv Digital Dashboard"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">Powered by modern technologies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {["Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS", "AWS"].map((tech) => (
                <span key={tech} className="text-lg md:text-xl font-bold text-white/80 hover:text-blue-400 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-muted/20 border-y border-white/5 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive development services for the modern web.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={<Smartphone className="text-blue-400" />}
                title="Mobile Apps"
                description="Native and cross-platform mobile applications for iOS and Android using React Native."
              />
              <ServiceCard
                icon={<Globe className="text-purple-400" />}
                title="Web Platforms"
                description="Scalable web applications built with Next.js. Fast, SEO-friendly, and secure."
              />
              <ServiceCard
                icon={<Layers className="text-emerald-400" />}
                title="Field OS"
                description="Specialized operating systems for field crews, inventory, and logistics management."
              />
              <ServiceCard
                icon={<Database className="text-pink-400" />}
                title="Backend Systems"
                description="Robust API architecture and database design to power your business logic."
              />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 uppercase tracking-wider">
                Proven Track Record
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Real Projects, Real Results</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Field-tested systems powering operations for businesses across multiple industries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Power Connect */}
              <CaseStudyCard
                badge="1+ Year in Production"
                badgeColor="emerald"
                title="Power Connect"
                description="Complete field operations platform with crew management, real-time tracking, and automated workflows. Serving utility companies with mission-critical operations."
                features={["Live GPS Tracking", "Crew Dispatch", "Work Orders", "Analytics Dashboard"]}
                gradient="from-emerald-400 to-cyan-500"
                image="/images/power-connect.png"
              />

              {/* Superior Technologies */}
              <CaseStudyCard
                badge="Active Production"
                badgeColor="blue"
                title="Superior Technologies"
                description="Equipment lifecycle management system handling maintenance schedules, inventory control, and asset tracking for industrial operations."
                features={["Equipment Registry", "Maintenance Logs", "Inventory Control", "Service History"]}
                gradient="from-blue-400 to-purple-500"
                image="/images/superior-tech.png"
              />

              {/* Conquest Field OS */}
              <CaseStudyCard
                badge="Latest Release"
                badgeColor="purple"
                title="Conquest Field OS"
                description="Next-generation field service operating system with advanced role management, locate ticket processing, and comprehensive reporting."
                features={["Role-Based Access", "Locate Tickets", "Daily Reports", "Customer Portal"]}
                gradient="from-purple-400 to-pink-500"
                image="/images/conquest-os.png"
              />
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-24 bg-muted/20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A transparent and agile process to bring your vision to life.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0" />

              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We dive deep into your requirements to understand your business goals.",
                  icon: <Search className="w-6 h-6 text-blue-400" />
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "We create intuitive and beautiful interfaces that users love.",
                  icon: <PenTool className="w-6 h-6 text-purple-400" />
                },
                {
                  step: "03",
                  title: "Development",
                  desc: "We build robust, scalable solutions using modern technologies.",
                  icon: <Code2 className="w-6 h-6 text-emerald-400" />
                },
                {
                  step: "04",
                  title: "Launch",
                  desc: "We deploy your product and ensure smooth operation and scaling.",
                  icon: <Rocket className="w-6 h-6 text-pink-400" />
                }
              ].map((item, index) => (
                <div key={item.step} className="relative pt-8 group">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center z-10 group-hover:border-blue-500/50 transition-colors shadow-lg shadow-black/50">
                    {item.icon}
                  </div>
                  <div className="text-center space-y-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors h-full">
                    <div className="text-sm font-mono text-muted-foreground opacity-50">{item.step}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-muted/40 rounded-3xl p-8 md:p-16 border border-white/10 backdrop-blur-sm shadow-2xl">
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
                    <p className="text-muted-foreground text-lg">
                      Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you shortly.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Mail className="text-blue-400" />
                      </div>
                      <span className="text-lg">contact@prosolv.dev</span>
                    </div>
                  </div>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all h-40 resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-blue-500/25">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 bg-background text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <ProSolvLogo />
            <span className="font-bold text-lg">ProSolv</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ProSolv LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl bg-muted/30 border border-white/5 hover:border-blue-500/30 hover:bg-muted/50 transition-all group"
    >
      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-2xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  )
}

function CaseStudyCard({
  badge,
  badgeColor,
  title,
  description,
  features,
  gradient,
  image
}: {
  badge: string
  badgeColor: 'emerald' | 'blue' | 'purple'
  title: string
  description: string
  features: string[]
  gradient: string
  image?: string
}) {
  const badgeColors = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      {/* Gradient Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`} />

      {image && (
        <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        </div>
      )}

      <div className="p-8 space-y-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${badgeColors[badgeColor]} uppercase tracking-wider`}>
          {badge}
        </div>

        <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="space-y-2 pt-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
