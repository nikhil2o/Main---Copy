"use client"

import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Clock, Shield, Award, Users } from "lucide-react"

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

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-6 py-2 text-lg backdrop-blur-sm">
              📞 Get In Touch
            </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" variants={itemVariants}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Let's Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Your Business
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to harness the power of AI automation? Get a free consultation and discover how we can streamline your
            operations and boost your productivity.
          </motion.p>
        </motion.div>

        {/* Contact Form & Info */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    text: "hello@celestialagents.com",
                    color: "blue",
                    href: "mailto:hello@celestialagents.com",
                  },
                  { icon: MapPin, text: "San Francisco, CA", color: "green", href: "#" },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${
                        contact.color === "blue" ? "from-blue-500 to-cyan-500" : "from-green-500 to-emerald-500"
                      } rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">
                      {contact.text}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <h4 className="text-2xl font-semibold text-white mb-6">Business Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <h4 className="text-2xl font-semibold text-white mb-6">Why Choose Celestial Agents?</h4>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Enterprise-grade security & compliance", color: "green" },
                  { icon: Clock, text: "24/7 support & monitoring", color: "blue" },
                  { icon: Award, text: "Certified AI specialists", color: "purple" },
                  { icon: Users, text: "95% client satisfaction rate", color: "orange" },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <benefit.icon
                      className={`w-6 h-6 ${
                        benefit.color === "green"
                          ? "text-green-400"
                          : benefit.color === "blue"
                            ? "text-blue-400"
                            : benefit.color === "purple"
                              ? "text-purple-400"
                              : "text-orange-400"
                      }`}
                    />
                    <span className="text-gray-300 text-lg">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
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
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Common questions about our AI automation services</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity. Simple automations take 1-3 weeks, while comprehensive AI solutions may take 4-8 weeks. We provide detailed timelines during consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes! We offer 24/7 monitoring, regular maintenance, and continuous optimization to ensure your AI systems perform at peak efficiency.",
              },
              {
                question: "What's included in the free consultation?",
                answer:
                  "Our free consultation includes process analysis, automation opportunity identification, custom solution recommendations, and a detailed project roadmap with pricing.",
              },
              {
                question: "Can you integrate with our existing systems?",
                answer:
                  "We specialize in seamless integrations with popular platforms like Salesforce, HubSpot, Shopify, and hundreds of other business applications.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlowingCard className="bg-white/5 p-6" glowColor="blue">
                  <h3 className="text-white text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
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
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't let manual processes hold your business back. Schedule your free consultation today and discover
                how AI automation can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full font-semibold shadow-lg">
                  Schedule Consultation
                </MagneticButton>
                <MagneticButton className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-full font-semibold backdrop-blur-sm">
                  <a href="mailto:hello@celestialagents.com">Email Us: hello@celestialagents.com</a>
                </MagneticButton>
              </div>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
