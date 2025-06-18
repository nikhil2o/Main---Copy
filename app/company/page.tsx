"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Badge } from "@/components/ui/badge"
import { Target, Lightbulb, Heart, CheckCircle, Globe, TrendingUp, Users, Rocket } from "lucide-react"

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

export default function CompanyPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              🏢 About Celestial Agents
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Pioneering the Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Automation
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We're a team of AI specialists, automation experts, and visionary technologists dedicated to transforming
            businesses through intelligent automation solutions.
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8 h-full" glowColor="blue">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                  <p className="text-gray-300">Empowering businesses through AI</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize AI automation by making cutting-edge technology accessible to businesses of all sizes. We
                believe every organization deserves the competitive advantage that intelligent automation provides, and
                we're committed to delivering solutions that drive real, measurable results.
              </p>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8 h-full" glowColor="purple">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                  <p className="text-gray-300">Shaping tomorrow's workplace</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To create a world where AI and humans work seamlessly together, where repetitive tasks are automated,
                and where every professional can focus on creative, strategic, and meaningful work. We envision a future
                where intelligent automation amplifies human potential rather than replacing it.
              </p>
            </GlowingCard>
          </motion.div>
        </motion.div>

        {/* Our Story */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Story</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded by AI enthusiasts who saw the transformative potential of automation
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-12" glowColor="blue">
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Celestial Agents was born from a simple observation: while AI technology was advancing rapidly, most
                  businesses struggled to implement and benefit from these innovations. Our founders, seasoned
                  professionals in AI, machine learning, and business automation, recognized the gap between
                  cutting-edge technology and practical business applications.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Starting with a small team of passionate technologists, we began developing custom AI solutions for
                  forward-thinking businesses. Our early successes in workflow automation and chatbot development
                  quickly established our reputation as trusted AI implementation partners.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Today, we've grown into a comprehensive AI automation agency, serving over 100 businesses across
                  various industries. Our commitment remains unchanged: to deliver intelligent automation solutions that
                  drive real business value and empower our clients to achieve their goals.
                </p>
              </div>
            </GlowingCard>
          </motion.div>
        </motion.div>

        {/* Core Values */}
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
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            {[
              {
                icon: Heart,
                title: "Client-Centric",
                description:
                  "Every solution is tailored to our clients' unique needs and goals. We measure our success by your success.",
                color: "red",
              },
              {
                icon: Lightbulb,
                title: "Innovation First",
                description:
                  "We stay at the forefront of AI technology, constantly exploring new ways to solve complex business challenges.",
                color: "yellow",
              },
              {
                icon: CheckCircle,
                title: "Quality Excellence",
                description:
                  "We deliver robust, reliable solutions with rigorous testing and continuous optimization for peak performance.",
                color: "green",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center p-8 h-full" glowColor={value.color}>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      value.color === "red"
                        ? "from-red-500 to-pink-500"
                        : value.color === "yellow"
                          ? "from-yellow-500 to-orange-500"
                          : "from-green-500 to-emerald-500"
                    } rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-white text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Measurable results that speak for themselves</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-4 gap-8" variants={containerVariants}>
            {[
              {
                icon: Users,
                number: "100+",
                label: "Happy Clients",
                description: "Businesses transformed",
              },
              {
                icon: Rocket,
                number: "500+",
                label: "Projects Delivered",
                description: "Successful implementations",
              },
              {
                icon: Globe,
                number: "15+",
                label: "Countries Served",
                description: "Global reach",
              },
              {
                icon: TrendingUp,
                number: "95%",
                label: "Client Retention",
                description: "Long-term partnerships",
              },
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 text-center p-6" glowColor="blue">
                  <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
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
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI automation expertise can transform your business operations and drive
                measurable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
                  <Link href="/contact">Start Your Journey</Link>
                </MagneticButton>
                <MagneticButton className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-full font-semibold backdrop-blur-sm">
                  <Link href="/portfolio">View Our Work</Link>
                </MagneticButton>
              </div>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
