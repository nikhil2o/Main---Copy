"use client"

import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Database, Users, Mail } from "lucide-react"

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

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 border-green-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              🔒 Privacy Policy
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </motion.h1>

          <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" variants={itemVariants}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
          {/* Overview */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="green">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Overview</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Celestial Agents ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or use
                our services. Please read this privacy policy carefully. If you do not agree with the terms of this
                privacy policy, please do not access the site or use our services.
              </p>
            </GlowingCard>
          </motion.div>

          {/* Information We Collect */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="blue">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-gray-300 mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Fill out contact forms or request consultations</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Create an account or use our services</li>
                    <li>Participate in surveys or provide feedback</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-300 mb-3">
                    When you visit our website, we may automatically collect certain information about your device and
                    usage patterns, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>IP address and browser type</li>
                    <li>Operating system and device information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website and search terms used</li>
                  </ul>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          {/* How We Use Information */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="purple">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-purple-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </GlowingCard>
          </motion.div>

          {/* Information Sharing */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="orange">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-orange-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Information Sharing and Disclosure</h2>
              </div>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in our operations</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>To prevent fraud or protect the safety of our users</li>
              </ul>
            </GlowingCard>
          </motion.div>

          {/* Data Security */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="red">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-red-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. These measures include
                encryption, secure servers, access controls, and regular security assessments. However, no method of
                transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </GlowingCard>
          </motion.div>

          {/* Your Rights */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="cyan">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Your Rights and Choices</h2>
              </div>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
                <li>Object to processing of your personal information</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise these rights, please contact us using the information provided below.
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
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: hello@celestialagents.com</p>
                <p>Address: San Francisco, CA</p>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Updates */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="blue">
              <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this
                Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are
                posted on this page.
              </p>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
