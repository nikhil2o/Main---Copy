"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, CheckCircle, Clock, DollarSign, Users, Target, TrendingUp, Eye, Brain } from "lucide-react"

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

export default function AIAnalyticsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-300 border-orange-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              📊 AI Analytics
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              Predictive
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              AI Analytics
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Transform raw data into actionable insights with advanced AI analytics that predict trends, identify
            opportunities, and drive data-driven decisions.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={itemVariants}>
            <MagneticButton className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
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
            <GlowingCard className="bg-white/5 p-8" glowColor="orange">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">What We Deliver</h2>
                  <p className="text-gray-300">Complete analytics solutions</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Custom predictive modeling and forecasting",
                  "Real-time dashboard development",
                  "Customer behavior analysis systems",
                  "Business intelligence automation",
                  "Performance monitoring and alerts",
                  "Advanced reporting and visualization",
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
            <GlowingCard className="bg-white/5 p-8" glowColor="red">
              <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Starting Price</span>
                  </div>
                  <span className="text-white font-semibold">$4,000</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Timeline</span>
                  </div>
                  <span className="text-white font-semibold">4-8 weeks</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">Team Size</span>
                  </div>
                  <span className="text-white font-semibold">3-5 specialists</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-orange-400" />
                    <span className="text-gray-300">Success Rate</span>
                  </div>
                  <span className="text-white font-semibold">94%</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-orange-600/20 rounded-lg border border-orange-500/30">
                <p className="text-orange-300 text-sm">
                  💡 <strong>Pro Tip:</strong> Our AI analytics typically improve decision-making accuracy by 60% and
                  identify 3-5 new revenue opportunities.
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
                Advanced Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analytics platform provides deep insights and predictive capabilities for strategic
              decision-making.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            {[
              {
                icon: Brain,
                title: "Predictive Modeling",
                description:
                  "Advanced machine learning models that forecast trends and predict future outcomes with high accuracy.",
                color: "orange",
              },
              {
                icon: Eye,
                title: "Real-time Insights",
                description:
                  "Live dashboards and monitoring systems that provide instant visibility into key business metrics.",
                color: "red",
              },
              {
                icon: TrendingUp,
                title: "Performance Optimization",
                description: "AI-driven recommendations for improving efficiency and maximizing business performance.",
                color: "yellow",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center p-8" glowColor={feature.color}>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      feature.color === "orange"
                        ? "from-orange-500 to-red-500"
                        : feature.color === "red"
                          ? "from-red-500 to-pink-500"
                          : "from-yellow-500 to-orange-500"
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
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Analytics Applications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analytics solutions drive results across various business functions and industries.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {[
              {
                title: "Sales Forecasting",
                description: "Predict sales trends and optimize revenue strategies with AI-powered forecasting.",
              },
              {
                title: "Customer Analytics",
                description: "Understand customer behavior, preferences, and lifetime value for better targeting.",
              },
              {
                title: "Risk Assessment",
                description: "Identify potential risks and opportunities before they impact your business.",
              },
              {
                title: "Market Intelligence",
                description: "Analyze market trends and competitive landscape for strategic planning.",
              },
            ].map((useCase, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 p-6 h-full" glowColor="orange">
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
              className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-orange-500/30 p-12"
              glowColor="orange"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Unlock Your Data's Potential?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business with AI-powered analytics that provide actionable insights and drive strategic
                decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
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
