"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Badge } from "@/components/ui/badge"
import { Settings, CheckCircle, Clock, DollarSign, Users, Target, FileText, Mail, Database } from "lucide-react"

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

export default function ProcessAutomationPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 border-green-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              ⚙️ Process Automation
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Streamline Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
              Business Processes
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Eliminate repetitive tasks and human error with intelligent process automation that scales with your
            business and adapts to your needs.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={itemVariants}>
            <MagneticButton className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
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
            <GlowingCard className="bg-white/5 p-8" glowColor="green">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">What We Deliver</h2>
                  <p className="text-gray-300">Complete automation solutions</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Custom process analysis and optimization",
                  "Automated document processing and routing",
                  "Email and communication automation",
                  "Data entry and synchronization systems",
                  "Inventory and resource management",
                  "Compliance and audit trail automation",
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
            <GlowingCard className="bg-white/5 p-8" glowColor="emerald">
              <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Starting Price</span>
                  </div>
                  <span className="text-white font-semibold">$2,000</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Timeline</span>
                  </div>
                  <span className="text-white font-semibold">1-3 weeks</span>
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
                  <span className="text-white font-semibold">99%</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                <p className="text-green-300 text-sm">
                  💡 <strong>Pro Tip:</strong> Process automation typically reduces manual work by 70-90% and eliminates
                  human errors completely.
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
                Automation Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our process automation solutions handle complex business workflows with precision and reliability.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            {[
              {
                icon: FileText,
                title: "Document Processing",
                description: "Automated document classification, data extraction, and routing with OCR technology.",
                color: "green",
              },
              {
                icon: Mail,
                title: "Communication Automation",
                description:
                  "Smart email routing, response automation, and notification systems for seamless communication.",
                color: "emerald",
              },
              {
                icon: Database,
                title: "Data Synchronization",
                description: "Real-time data sync across multiple systems, databases, and applications.",
                color: "teal",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center p-8" glowColor={feature.color}>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      feature.color === "green"
                        ? "from-green-500 to-emerald-500"
                        : feature.color === "emerald"
                          ? "from-emerald-500 to-teal-500"
                          : "from-teal-500 to-cyan-500"
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

        {/* Benefits Section */}
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
                Key Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with measurable improvements across all key metrics.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {[
              {
                metric: "70-90%",
                title: "Time Savings",
                description: "Reduce manual work and focus on strategic tasks",
              },
              {
                metric: "99.9%",
                title: "Accuracy Rate",
                description: "Eliminate human errors and ensure consistency",
              },
              {
                metric: "24/7",
                title: "Operation",
                description: "Continuous processing without breaks or downtime",
              },
              {
                metric: "50%+",
                title: "Cost Reduction",
                description: "Lower operational costs through automation",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center p-6 h-full" glowColor="green">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                    {benefit.metric}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
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
              className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/30 p-12"
              glowColor="green"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Processes?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let us analyze your current processes and create custom automation solutions that save time, reduce
                costs, and eliminate errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
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
