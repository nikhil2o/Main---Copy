"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Settings, BarChart3, ArrowRight, CheckCircle, Clock, Users, Award } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "AI Workflows",
    slug: "ai-workflows",
    description: "Intelligent workflow design with n8n & Make.com integration",
    features: ["AI-driven decision nodes", "Multi-app integrations", "Smart error handling", "Real-time monitoring"],
    color: "blue",
    price: "Starting at $2,500",
    timeline: "2-4 weeks",
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    slug: "chatbot-development",
    description: "Custom conversational AI for customer support and lead generation",
    features: ["24/7 customer service", "Lead qualification", "Multi-language support", "CRM integration"],
    color: "purple",
    price: "Starting at $3,500",
    timeline: "3-6 weeks",
  },
  {
    icon: Settings,
    title: "Process Automation",
    slug: "process-automation",
    description: "Streamline operations with intelligent automation solutions",
    features: ["Document processing", "Email automation", "Inventory management", "Data synchronization"],
    color: "green",
    price: "Starting at $2,000",
    timeline: "1-3 weeks",
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    slug: "ai-analytics",
    description: "Predictive analytics and intelligent business insights",
    features: ["Predictive forecasting", "Customer behavior analysis", "Real-time dashboards", "Custom reporting"],
    color: "orange",
    price: "Starting at $4,000",
    timeline: "4-8 weeks",
  },
]

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

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              🚀 AI Automation Services
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Transform Your Business with
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Comprehensive AI automation services designed to streamline your operations, boost productivity, and drive
            measurable growth for your business.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <GlowingCard className="bg-white/5 h-full" glowColor={service.color}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${
                        service.color === "blue"
                          ? "from-blue-500 to-cyan-500"
                          : service.color === "purple"
                            ? "from-purple-500 to-pink-500"
                            : service.color === "green"
                              ? "from-green-500 to-emerald-500"
                              : "from-orange-500 to-red-500"
                      } rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="text-right">
                      <div className="text-white font-semibold">{service.price}</div>
                      <div className="text-gray-400 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.timeline}
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-white text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
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

                  <MagneticButton
                    className={`w-full bg-gradient-to-r ${
                      service.color === "blue"
                        ? "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                        : service.color === "purple"
                          ? "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          : service.color === "green"
                            ? "from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                            : "from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                    } text-white py-3 px-6 rounded-full font-semibold shadow-lg transition-all duration-300`}
                  >
                    <Link href={`/services/${service.slug}`} className="flex items-center justify-center">
                      Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </MagneticButton>
                </CardContent>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-8" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Services?
            </span>
          </motion.h2>

          <motion.div className="grid md:grid-cols-3 gap-8 mt-12" variants={containerVariants}>
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified AI specialists with years of experience in automation and machine learning.",
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "95% client satisfaction rate with measurable ROI improvements across all projects.",
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Rapid implementation with ongoing support to ensure your success from day one.",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center p-8">
                  <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
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
            <GlowingCard className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation to discuss your specific needs and discover how our AI solutions can
                transform your business.
              </p>
              <MagneticButton className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
                <Link href="/contact">Get Free Consultation</Link>
              </MagneticButton>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
