"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Zap, Bot, Settings, BarChart3, CheckCircle, Clock, Users } from "lucide-react"

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

const projects = [
  {
    title: "E-commerce Automation Suite",
    category: "AI Workflows",
    description:
      "Complete order processing automation with AI-powered inventory management and customer communication.",
    results: ["90% reduction in processing time", "99.5% accuracy rate", "$50K annual savings"],
    technologies: ["n8n", "OpenAI API", "Shopify", "Slack"],
    icon: Zap,
    color: "blue",
    timeline: "3 weeks",
    client: "RetailCorp",
  },
  {
    title: "Customer Support Chatbot",
    category: "Chatbot Development",
    description: "Intelligent customer service bot handling 80% of inquiries with seamless human handoff.",
    results: ["80% query resolution", "24/7 availability", "60% cost reduction"],
    technologies: ["ChatGPT", "Dialogflow", "Zendesk", "React"],
    icon: Bot,
    color: "purple",
    timeline: "4 weeks",
    client: "TechSupport Inc",
  },
  {
    title: "Document Processing System",
    category: "Process Automation",
    description: "Automated invoice processing and approval workflow with OCR and intelligent routing.",
    results: ["95% processing accuracy", "5x faster approvals", "Zero manual errors"],
    technologies: ["Make.com", "OCR API", "DocuSign", "Airtable"],
    icon: Settings,
    color: "green",
    timeline: "2 weeks",
    client: "FinanceFlow",
  },
  {
    title: "Sales Analytics Dashboard",
    category: "AI Analytics",
    description: "Predictive sales analytics with real-time reporting and automated insights generation.",
    results: ["40% better forecasting", "Real-time insights", "3x faster reporting"],
    technologies: ["Python", "TensorFlow", "Tableau", "Salesforce API"],
    icon: BarChart3,
    color: "orange",
    timeline: "6 weeks",
    client: "SalesMax Pro",
  },
  {
    title: "Lead Generation Automation",
    category: "AI Workflows",
    description: "Multi-channel lead capture and qualification system with AI-powered scoring and nurturing.",
    results: ["300% more qualified leads", "50% higher conversion", "Automated follow-up"],
    technologies: ["Zapier", "HubSpot", "LinkedIn API", "OpenAI"],
    icon: Zap,
    color: "cyan",
    timeline: "3 weeks",
    client: "GrowthAgency",
  },
  {
    title: "HR Onboarding Bot",
    category: "Chatbot Development",
    description: "Interactive onboarding assistant guiding new employees through company processes and documentation.",
    results: ["90% completion rate", "50% time savings", "Improved satisfaction"],
    technologies: ["Microsoft Bot Framework", "SharePoint", "Teams", "Azure"],
    icon: Bot,
    color: "pink",
    timeline: "5 weeks",
    client: "HRTech Solutions",
  },
]

export default function PortfolioPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              💼 Our Portfolio
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Success Stories &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Explore our successful AI automation projects and discover how we've helped businesses transform their
            operations and achieve remarkable results.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: "100+", label: "Projects Completed", color: "blue" },
            { number: "95%", label: "Client Satisfaction", color: "purple" },
            { number: "$2M+", label: "Cost Savings Generated", color: "green" },
            { number: "24/7", label: "System Uptime", color: "orange" },
          ].map((stat, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <motion.div
                className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${
                  stat.color === "blue"
                    ? "from-blue-400 to-cyan-400"
                    : stat.color === "purple"
                      ? "from-purple-400 to-pink-400"
                      : stat.color === "green"
                        ? "from-green-400 to-emerald-400"
                        : "from-orange-400 to-red-400"
                } bg-clip-text text-transparent`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlowingCard className="bg-white/5 h-full" glowColor={project.color}>
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${
                          project.color === "blue"
                            ? "from-blue-500 to-cyan-500"
                            : project.color === "purple"
                              ? "from-purple-500 to-pink-500"
                              : project.color === "green"
                                ? "from-green-500 to-emerald-500"
                                : project.color === "orange"
                                  ? "from-orange-500 to-red-500"
                                  : project.color === "cyan"
                                    ? "from-cyan-500 to-teal-500"
                                    : "from-pink-500 to-rose-500"
                        } rounded-xl flex items-center justify-center mr-4`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <project.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <Badge
                          className={`mb-2 ${
                            project.color === "blue"
                              ? "bg-blue-600/20 text-blue-300 border-blue-500/30"
                              : project.color === "purple"
                                ? "bg-purple-600/20 text-purple-300 border-purple-500/30"
                                : project.color === "green"
                                  ? "bg-green-600/20 text-green-300 border-green-500/30"
                                  : project.color === "orange"
                                    ? "bg-orange-600/20 text-orange-300 border-orange-500/30"
                                    : project.color === "cyan"
                                      ? "bg-cyan-600/20 text-cyan-300 border-cyan-500/30"
                                      : "bg-pink-600/20 text-pink-300 border-pink-500/30"
                          }`}
                        >
                          {project.category}
                        </Badge>
                        <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {project.timeline}
                      </div>
                      <div className="text-gray-400 text-sm flex items-center mt-1">
                        <Users className="w-4 h-4 mr-1" />
                        {project.client}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <motion.li
                          key={resultIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: resultIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-white/10 text-gray-300 border-white/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <MagneticButton
                      className={`flex-1 bg-gradient-to-r ${
                        project.color === "blue"
                          ? "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                          : project.color === "purple"
                            ? "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            : project.color === "green"
                              ? "from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                              : project.color === "orange"
                                ? "from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                                : project.color === "cyan"
                                  ? "from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700"
                                  : "from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
                      } text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300`}
                    >
                      <Link href="/contact" className="flex items-center justify-center">
                        Similar Project <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">What our clients say about working with us</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
            {[
              {
                quote:
                  "Celestial Agents transformed our entire order processing system. What used to take hours now happens automatically in minutes. The ROI was evident within the first month.",
                author: "Jennifer Walsh",
                role: "Operations Director, RetailCorp",
                initials: "JW",
                color: "blue",
              },
              {
                quote:
                  "Their chatbot handles 80% of our customer inquiries flawlessly. Our support team can now focus on complex issues while customers get instant help 24/7.",
                author: "David Kim",
                role: "Customer Success Manager, TechSupport Inc",
                initials: "DK",
                color: "purple",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 p-8" glowColor={testimonial.color}>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${
                        testimonial.color === "blue" ? "from-blue-500 to-cyan-500" : "from-purple-500 to-pink-500"
                      } rounded-full flex items-center justify-center mr-4`}
                    >
                      <span className="text-white font-semibold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <GlowingCard
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-12"
              glowColor="blue"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our portfolio of successful businesses. Let's discuss how we can transform your operations with
                intelligent AI automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
                  <Link href="/contact">Start Your Project</Link>
                </MagneticButton>
                <MagneticButton className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-full font-semibold backdrop-blur-sm">
                  <Link href="/services">View Our Services</Link>
                </MagneticButton>
              </div>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
