"use client"

import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Shield, AlertTriangle, Users, Mail } from "lucide-react"

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

export default function TermsOfServicePage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              📋 Terms of Service
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Terms of Service
            </span>
          </motion.h1>

          <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" variants={itemVariants}>
            Please read these terms carefully before using our services. By accessing our website or using our services,
            you agree to be bound by these terms.
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
          {/* Agreement */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="blue">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Agreement to Terms</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service ("Terms") govern your use of our website located at celestialagents.com and our
                AI automation services (collectively, the "Service") operated by Celestial Agents ("us", "we", or
                "our"). By accessing or using our Service, you agree to be bound by these Terms. If you disagree with
                any part of these terms, then you may not access the Service.
              </p>
            </GlowingCard>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="purple">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-purple-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Description of Services</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Celestial Agents provides AI automation services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>AI workflow design and implementation</li>
                  <li>Chatbot development and deployment</li>
                  <li>Business process automation</li>
                  <li>AI analytics and reporting solutions</li>
                  <li>Consultation and strategic planning services</li>
                </ul>
                <p className="text-gray-300">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with or
                  without notice.
                </p>
              </div>
            </GlowingCard>
          </motion.div>

          {/* User Responsibilities */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="green">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-green-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">By using our services, you agree to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Payment Terms */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="orange">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-orange-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Payment Terms</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Payment terms are specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Payments are due according to the agreed schedule</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>All prices are subject to applicable taxes</li>
                  <li>We reserve the right to modify pricing with notice</li>
                </ul>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="cyan">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  The Service and its original content, features, and functionality are and will remain the exclusive
                  property of Celestial Agents and its licensors. The Service is protected by copyright, trademark, and
                  other laws.
                </p>
                <p className="text-gray-300">
                  Custom solutions developed for clients remain the property of the client upon full payment, while our
                  underlying methodologies and frameworks remain our intellectual property.
                </p>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Disclaimers */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="red">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Disclaimers and Limitations</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Our services are provided "as is" without warranties of any kind. We do not guarantee:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Uninterrupted or error-free service</li>
                  <li>Specific results or outcomes</li>
                  <li>Compatibility with all systems</li>
                  <li>Complete security against all threats</li>
                </ul>
                <p className="text-gray-300">
                  Our liability is limited to the amount paid for services. We are not liable for indirect, incidental,
                  or consequential damages.
                </p>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Termination */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="purple">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-purple-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Termination</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability,
                for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your
                right to use the Service will cease immediately. All provisions of the Terms which by their nature
                should survive termination shall survive termination.
              </p>
            </GlowingCard>
          </motion.div>

          {/* Governing Law */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="blue">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Governing Law</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of California, United States,
                without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of
                our services shall be resolved in the courts of California.
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
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: hello@celestialagents.com</p>
                <p>Address: San Francisco, CA</p>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-white/5 p-8" glowColor="orange">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion. By continuing to access or use our Service after those
                revisions become effective, you agree to be bound by the revised terms.
              </p>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
