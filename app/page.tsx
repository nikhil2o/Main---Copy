"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Bot,
  Zap,
  BarChart3,
  Settings,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Menu,
  X,
  ChevronDown,
  Play,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollProgress } from "@/components/scroll-progress"
import { MagneticButton } from "@/components/magnetic-button"
import { GlowingCard } from "@/components/glowing-card"
import { TypewriterText } from "@/components/typewriter-text"
import { ContactForm } from "@/components/contact-form"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollY } = useScroll()
  const heroRef = useRef<HTMLElement>(null)

  const heroY = useTransform(scrollY, [0, 500], [0, -150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "tech-stack", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-x-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <FloatingElements />

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Celestial Agents
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#tech-stack", label: "Tech Stack" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-gray-300 hover:text-white transition-colors duration-300 ${
                    activeSection === item.href.slice(1) ? "text-white" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      layoutId="activeSection"
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <MagneticButton className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300">
                Get Free Consultation
              </MagneticButton>

              {/* Mobile Menu Button */}
              <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden mt-4 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4">
                  {[
                    { href: "#home", label: "Home" },
                    { href: "#services", label: "Services" },
                    { href: "#tech-stack", label: "Tech Stack" },
                    { href: "#about", label: "About" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-4">
                    Get Free Consultation
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div
          className="container mx-auto px-4 text-center relative z-20"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              🚀 AI Automation Partner
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Transform Your Business with{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              <TypewriterText texts={["Intelligent AI", "Smart Automation", "Future Technology"]} />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Celestial Agents delivers cutting-edge AI solutions that streamline operations, boost productivity, and
            drive measurable growth for forward-thinking businesses.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MagneticButton 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-2xl shadow-blue-500/25 border border-blue-400/20"
              aria-label="Start your AI journey and contact us"
            >
              Start Your AI Journey <ArrowRight className="ml-3 w-6 h-6" />
            </MagneticButton>
            <MagneticButton 
              onClick={() => router.push('/portfolio')}
              className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-full font-semibold backdrop-blur-sm"
              aria-label="View our portfolio and past work"
            >
              View Our Work <Play className="ml-3 w-6 h-6" />
            </MagneticButton>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-lg">Trusted by 100+ businesses</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg">4.9/5 Client Rating</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-5xl md:text-6xl font-bold mb-8" variants={itemVariants}>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our AI Automation
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto" variants={itemVariants}>
              Comprehensive AI solutions designed to transform your business operations and accelerate growth
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: "AI-Powered Workflows",
                description: "Intelligent workflow design with n8n & Make.com integration",
                features: ["AI-driven decision nodes", "Multi-app integrations", "Smart error handling"],
                color: "blue",
              },
              {
                icon: Bot,
                title: "AI Chatbot Development",
                description: "Custom conversational AI for customer support and lead generation",
                features: ["24/7 customer service", "Lead qualification", "Multi-language support"],
                color: "purple",
              },
              {
                icon: Settings,
                title: "Process Automation",
                description: "Streamline operations with intelligent automation solutions",
                features: ["Document processing", "Email automation", "Inventory management"],
                color: "green",
              },
              {
                icon: BarChart3,
                title: "AI-Powered Analytics",
                description: "Predictive analytics and intelligent business insights",
                features: ["Predictive forecasting", "Customer behavior analysis", "Real-time dashboards"],
                color: "orange",
              },
              {
                icon: Target,
                title: "Custom AI Solutions",
                description: "Tailored AI applications for your specific business needs",
                features: ["Machine learning models", "Computer vision apps", "Recommendation engines"],
                color: "pink",
              },
              {
                icon: Users,
                title: "AI Integration & Consulting",
                description: "Strategic guidance and seamless AI implementation",
                features: ["Technology assessment", "Implementation roadmap", "Staff training & support"],
                color: "cyan",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 h-full" glowColor={service.color}>
                  <CardHeader className="pb-4">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${
                        service.color === "blue"
                          ? "from-blue-500 to-cyan-500"
                          : service.color === "purple"
                            ? "from-purple-500 to-pink-500"
                            : service.color === "green"
                              ? "from-green-500 to-emerald-500"
                              : service.color === "orange"
                                ? "from-orange-500 to-red-500"
                                : service.color === "pink"
                                  ? "from-pink-500 to-rose-500"
                                  : "from-cyan-500 to-teal-500"
                      } rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-white text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-5xl md:text-6xl font-bold mb-8" variants={itemVariants}>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Tech Stack &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Integrations
              </span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto" variants={itemVariants}>
              Cutting-edge tools and platforms that power our AI automation solutions
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Workflow Automation",
                tools: ["n8n", "Make.com", "Go High Level", "Zapier", "Pipedream", "Activepieces"],
                color: "blue",
              },
              {
                title: "AI & Prompt Engineering",
                tools: ["ChatGPT", "Claude", "Gemini", "OpenAI API", "Anthropic API", "LangChain"],
                color: "purple",
              },
              {
                title: "Deployment & Hosting",
                tools: ["Vercel", "Supabase", "Netlify", "Cloudflare", "Render"],
                color: "green",
              },
              {
                title: "Database & CRM",
                tools: ["Airtable", "Firebase", "HubSpot", "Notion API", "Postgres", "Retool"],
                color: "orange",
              },
            ].map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 h-full" glowColor={category.color}>
                  <CardHeader>
                    <CardTitle className="text-white text-xl mb-4">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {category.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={tool}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: toolIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`${
                              category.color === "blue"
                                ? "bg-blue-600/20 text-blue-300 border-blue-500/30"
                                : category.color === "purple"
                                  ? "bg-purple-600/20 text-purple-300 border-purple-500/30"
                                  : category.color === "green"
                                    ? "bg-green-600/20 text-green-300 border-green-500/30"
                                    : "bg-orange-600/20 text-orange-300 border-orange-500/30"
                            } px-3 py-1 text-sm font-medium`}
                          >
                            {tool}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-5xl md:text-6xl font-bold mb-8" variants={itemVariants}>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Who Is This</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">For?</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto" variants={itemVariants}>
              Our AI automation solutions are designed for forward-thinking professionals and businesses
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Bot,
                title: "Future AI Agency Owners",
                description: "Ideal if you run or want to start an agency leveraging AI for client results.",
                color: "blue",
              },
              {
                icon: TrendingUp,
                title: "Entrepreneurs",
                description: "Build the knowledge foundation to automate, scale operations, and maximize efficiency.",
                color: "purple",
              },
              {
                icon: Target,
                title: "Sales Professionals",
                description: "Automate lead generation, personalize outreach, and focus more time on closing deals.",
                color: "green",
              },
            ].map((audience, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center h-full" glowColor={audience.color}>
                  <CardHeader className="pb-6">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-r ${
                        audience.color === "blue"
                          ? "from-blue-500 to-cyan-500"
                          : audience.color === "purple"
                            ? "from-purple-500 to-pink-500"
                            : "from-green-500 to-emerald-500"
                      } rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <audience.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <CardTitle className="text-white text-2xl mb-4">{audience.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">{audience.description}</p>
                    <MagneticButton
                      className={`w-full bg-gradient-to-r ${
                        audience.color === "blue"
                          ? "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                          : audience.color === "purple"
                            ? "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            : "from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      } text-white py-3 px-6 rounded-full font-semibold shadow-lg transition-all duration-300`}
                    >
                      Get Started
                    </MagneticButton>
                  </CardContent>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-5xl md:text-6xl font-bold mb-8" variants={itemVariants}>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Trusted by</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "100+", label: "Businesses Transformed", color: "blue" },
              { number: "95%", label: "Client Satisfaction Rate", color: "purple" },
              { number: "$2M+", label: "Cost Savings Generated", color: "green" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <motion.div
                  className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r ${
                    stat.color === "blue"
                      ? "from-blue-400 to-cyan-400"
                      : stat.color === "purple"
                        ? "from-purple-400 to-pink-400"
                        : "from-green-400 to-emerald-400"
                  } bg-clip-text text-transparent`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                rating: 5,
                text: "Celestial Agents transformed our customer service with their AI chatbot. We've seen a 70% reduction in response time and 90% customer satisfaction.",
                author: "John Davis",
                role: "CEO, TechCorp",
                initials: "JD",
                color: "blue",
              },
              {
                rating: 5,
                text: "The workflow automation saved us 20 hours per week. Our team can now focus on strategic work instead of repetitive tasks.",
                author: "Sarah Miller",
                role: "Operations Director, GrowthCo",
                initials: "SM",
                color: "green",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5" glowColor={testimonial.color}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${
                          testimonial.color === "blue" ? "from-blue-500 to-purple-500" : "from-green-500 to-teal-500"
                        } rounded-full flex items-center justify-center mr-4`}
                      >
                        <span className="text-white font-semibold">{testimonial.initials}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">{testimonial.author}</div>
                        <div className="text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-20" variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a free consultation and discover how AI automation can revolutionize your operations
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <ContactForm />
              </motion.div>

              {/* Contact Info */}
              <motion.div className="space-y-8" variants={itemVariants}>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, text: "hello@celestialagents.com", color: "blue" },
                      { icon: MapPin, text: "San Francisco, CA", color: "green" },
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${
                            contact.color === "blue" ? "from-blue-500 to-cyan-500" : "from-green-500 to-emerald-500"
                          } rounded-full flex items-center justify-center`}
                        >
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-300 text-lg">{contact.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-white/20" />

                <div>
                  <h4 className="text-2xl font-semibold text-white mb-6">Why Choose Celestial Agents?</h4>
                  <div className="space-y-4">
                    {[
                      { icon: Shield, text: "Enterprise-grade security", color: "green" },
                      { icon: Clock, text: "24/7 support & monitoring", color: "blue" },
                      { icon: Award, text: "Certified AI specialists", color: "purple" },
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <benefit.icon
                          className={`w-6 h-6 ${
                            benefit.color === "green"
                              ? "text-green-400"
                              : benefit.color === "blue"
                                ? "text-blue-400"
                                : "text-purple-400"
                          }`}
                        />
                        <span className="text-gray-300 text-lg">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Celestial Agents
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Transforming businesses with intelligent AI automation solutions.
              </p>
            </motion.div>

            {[
              {
                title: "Services",
                links: [
                  { label: "AI Workflows", href: "/services/ai-workflows" },
                  { label: "Chatbot Development", href: "/services/chatbot-development" },
                  { label: "Process Automation", href: "/services/process-automation" },
                  { label: "AI Analytics", href: "/services/ai-analytics" },
                ],
              },
              {
                title: "Company",
                links: [
                  { label: "About Us", href: "/company" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { label: "Privacy Policy", href: "/legal/privacy-policy" },
                  { label: "Terms of Service", href: "/legal/terms-of-service" },
                  { label: "Cookie Policy", href: "/legal/cookie-policy" },
                ],
              },
            ].map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h4 className="text-white font-semibold mb-6 text-lg">{section.title}</h4>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 block text-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Separator className="bg-white/20 mb-8" />

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 text-lg">© 2024 Celestial Agents. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
