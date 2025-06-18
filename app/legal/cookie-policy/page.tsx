"use client"

import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { Badge } from "@/components/ui/badge"
import { Cookie, Settings, Eye, Shield, Database, Mail } from "lucide-react"

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

export default function CookiePolicyPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 text-orange-300 border-orange-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              🍪 Cookie Policy
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              Cookie Policy
            </span>
          </motion.h1>

          <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" variants={itemVariants}>
            This policy explains how we use cookies and similar technologies to provide and improve our services.
          </motion.p>

          <motion.p className="text-gray-400" variants={itemVariants}>
            Last updated: December 17, 2024
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* What Are Cookies */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="orange">
              <div className="flex items-center mb-6">
                <Cookie className="w-8 h-8 text-orange-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and to provide information to website
                owners. Cookies allow websites to remember your preferences, login status, and other information to
                enhance your browsing experience.
              </p>
            </GlowingCard>
          </motion.div>

          {/* Types of Cookies */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="blue">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation, access to secure areas, and form submissions. The website cannot function properly
                    without these cookies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. This helps us improve our website's performance and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Functional Cookies</h3>
                  <p className="text-gray-300">
                    These cookies enable enhanced functionality and personalization, such as remembering your
                    preferences, language settings, and other customizable elements of the website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are used to track visitors across websites to display relevant and engaging
                    advertisements. They may be set by us or by third-party providers whose services we use.
                  </p>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          {/* How We Use Cookies */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="purple">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-purple-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">How We Use Cookies</h2>
              </div>
              <p className="text-gray-300 mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>To ensure our website functions correctly and securely</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and user behavior</li>
                <li>To improve our services and user experience</li>
                <li>To provide personalized content and recommendations</li>
                <li>To measure the effectiveness of our marketing campaigns</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </GlowingCard>
          </motion.div>

          {/* Third-Party Cookies */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="green">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Third-Party Cookies</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We may use third-party services that set cookies on our website. These include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Google Analytics for website analytics</li>
                  <li>Customer support and chat services</li>
                  <li>Marketing and advertising platforms</li>
                  <li>Performance monitoring tools</li>
                </ul>
                <p className="text-gray-300">
                  These third parties have their own privacy policies and cookie practices. We recommend reviewing their
                  policies to understand how they use cookies and your data.
                </p>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="cyan">
              <div className="flex items-center mb-6">
                <Settings className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">You have several options for managing cookies:</p>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                  <p className="text-gray-300 mb-2">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Opt-Out Tools</h3>
                  <p className="text-gray-300">
                    You can opt out of certain advertising cookies through industry opt-out pages such as the Digital
                    Advertising Alliance's opt-out page or the Network Advertising Initiative's opt-out page.
                  </p>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Cookie Consent */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="blue">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Cookie Consent</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                When you first visit our website, you may see a cookie banner asking for your consent to use
                non-essential cookies. You can choose to accept or decline these cookies. Essential cookies will always
                be used as they are necessary for the website to function. You can change your cookie preferences at any
                time through your browser settings or by contacting us.
              </p>
            </GlowingCard>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="purple">
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                updated policy on our website and updating the "Last updated" date at the top of this page.
              </p>
            </GlowingCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="green">
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-green-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: hello@celestialagents.com</p>
                <p>Address: San Francisco, CA</p>
              </div>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
