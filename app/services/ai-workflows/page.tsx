"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, Clock, DollarSign, Users, Target, Workflow, Brain, Gauge } from "lucide-react"

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

export default function AIWorkflowsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 border-blue-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              ⚡ AI Workflows
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Intelligent
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Workflows
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Transform your business processes with intelligent workflow automation that adapts, learns, and optimizes
            itself for maximum efficiency.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={itemVariants}>
            <MagneticButton className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
              <Link href="/contact">Start Your Project</Link>
            </MagneticButton>
            <MagneticButton className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-full font-semibold backdrop-blur-sm">
              <Link href="/portfolio">View Examples</Link>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Service Overview */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="blue">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">What We Deliver</h2>
                  <p className="text-gray-300">Complete workflow automation solutions</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Custom workflow design and implementation",
                  "AI-powered decision nodes and logic",
                  "Multi-platform integrations (n8n, Make.com, Zapier)",
                  "Real-time monitoring and error handling",
                  "Performance optimization and scaling",
                  "Comprehensive documentation and training",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="cyan">
              <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Starting Price</span>
                  </div>
                  <span className="text-white font-semibold">$2,500</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Timeline</span>
                  </div>
                  <span className="text-white font-semibold">2-4 weeks</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">Team Size</span>
                  </div>
                  <span className="text-white font-semibold">2-3 specialists</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-orange-400" />
                    <span className="text-gray-300">Success Rate</span>
                  </div>
                  <span className="text-white font-semibold">98%</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
                <p className="text-blue-300 text-sm">
                  💡 <strong>Pro Tip:</strong> Most clients see 40-60% time savings within the first month of
                  implementation.
                </p>
              </div>
            </GlowingCard>
          </motion.div>
        </motion.div>

        {/* Features Section */}
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
                Advanced Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflows come packed with intelligent features designed to maximize efficiency and reliability.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            {[
              {
                icon: Brain,
                title: "AI Decision Making",
                description: "Smart nodes that make intelligent decisions based on data patterns and business rules.",
                color: "blue",
              },
              {
                icon: Workflow,
                title: "Visual Flow Builder",
                description: "Intuitive drag-and-drop interface for creating and modifying complex workflows.",
                color: "purple",
              },
              {
                icon: Gauge,
                title: "Performance Analytics",
                description: "Real-time monitoring with detailed analytics and performance optimization suggestions.",
                color: "green",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center p-8" glowColor={feature.color}>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      feature.color === "blue"
                        ? "from-blue-500 to-cyan-500"
                        : feature.color === "purple"
                          ? "from-purple-500 to-pink-500"
                          : "from-green-500 to-emerald-500"
                    } rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-white text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful workflow implementation every time.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-4 gap-8" variants={containerVariants}>
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your current processes and identify automation opportunities.",
              },
              {
                step: "02",
                title: "Design",
                description: "Create detailed workflow blueprints with AI decision points and integrations.",
              },
              {
                step: "03",
                title: "Development",
                description: "Build and test your custom workflows with rigorous quality assurance.",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launch your workflows with full training and ongoing support.",
              },
            ].map((process, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center p-6" glowColor="blue">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-3">{process.title}</h3>
                  <p className="text-gray-300 text-sm">{process.description}</p>
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
              className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30 p-12"
              glowColor="blue"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Workflows?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your specific workflow needs and create a custom AI automation solution that transforms
                your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
                  <Link href="/contact">Get Started Today</Link>
                </MagneticButton>
                <MagneticButton className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-full font-semibold backdrop-blur-sm">
                  <Link href="/services">View All Services</Link>
                </MagneticButton>
              </div>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
