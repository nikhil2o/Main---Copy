"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Badge } from "@/components/ui/badge"
import { Bot, CheckCircle, Clock, DollarSign, Users, Target, MessageSquare, Brain, Globe } from "lucide-react"

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

export default function ChatbotDevelopmentPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              🤖 Chatbot Development
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Intelligent
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              AI Chatbots
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Create sophisticated conversational AI that provides 24/7 customer support, qualifies leads, and enhances
            user engagement across all platforms.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={itemVariants}>
            <MagneticButton className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
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
            <GlowingCard className="bg-white/5 p-8" glowColor="purple">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">What We Deliver</h2>
                  <p className="text-gray-300">Complete chatbot solutions</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Custom conversational AI development",
                  "Natural language processing integration",
                  "Multi-platform deployment (web, mobile, social)",
                  "CRM and database integrations",
                  "Advanced analytics and reporting",
                  "Ongoing training and optimization",
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
            <GlowingCard className="bg-white/5 p-8" glowColor="pink">
              <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Starting Price</span>
                  </div>
                  <span className="text-white font-semibold">$3,500</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Timeline</span>
                  </div>
                  <span className="text-white font-semibold">3-6 weeks</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">Team Size</span>
                  </div>
                  <span className="text-white font-semibold">3-4 specialists</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-orange-400" />
                    <span className="text-gray-300">Success Rate</span>
                  </div>
                  <span className="text-white font-semibold">96%</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-purple-600/20 rounded-lg border border-purple-500/30">
                <p className="text-purple-300 text-sm">
                  💡 <strong>Pro Tip:</strong> Our chatbots typically handle 80% of customer inquiries automatically,
                  reducing support workload significantly.
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
              Our chatbots are equipped with cutting-edge AI capabilities for natural, intelligent conversations.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            {[
              {
                icon: Brain,
                title: "Natural Language Processing",
                description:
                  "Advanced NLP that understands context, intent, and sentiment for human-like conversations.",
                color: "purple",
              },
              {
                icon: MessageSquare,
                title: "Multi-Channel Support",
                description: "Deploy across websites, mobile apps, social media, and messaging platforms seamlessly.",
                color: "pink",
              },
              {
                icon: Globe,
                title: "Multi-Language Support",
                description: "Communicate with customers in their preferred language with real-time translation.",
                color: "blue",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center p-8" glowColor={feature.color}>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      feature.color === "purple"
                        ? "from-purple-500 to-pink-500"
                        : feature.color === "pink"
                          ? "from-pink-500 to-rose-500"
                          : "from-blue-500 to-cyan-500"
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

        {/* Use Cases Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Perfect For</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our chatbots excel in various business scenarios and industries.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {[
              {
                title: "Customer Support",
                description: "24/7 instant support with escalation to human agents when needed.",
              },
              {
                title: "Lead Generation",
                description: "Qualify prospects and capture leads through intelligent conversations.",
              },
              {
                title: "E-commerce",
                description: "Product recommendations, order tracking, and shopping assistance.",
              },
              {
                title: "Appointment Booking",
                description: "Automated scheduling with calendar integration and reminders.",
              },
            ].map((useCase, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 p-6 h-full" glowColor="purple">
                  <h3 className="text-white text-lg font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
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
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 p-12"
              glowColor="purple"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your AI Chatbot?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your customer interactions with an intelligent chatbot that works around the clock to support
                your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
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
