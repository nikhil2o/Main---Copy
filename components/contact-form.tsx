"use client"

import type React from "react"
import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlowingCard } from "@/components/glowing-card"
import { MagneticButton } from "@/components/magnetic-button"
import { CheckCircle, AlertCircle, Send, Shield } from "lucide-react"

interface ContactFormProps {
  title?: string
  description?: string
  className?: string
  glowColor?: "blue" | "purple" | "green" | "orange" | "pink" | "cyan"
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  industry: string
  projectType: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

export function ContactForm({
  title = "Get Your Free Consultation",
  description = "Tell us about your business and we'll create a custom AI automation strategy",
  className = "",
  glowColor = "blue",
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    projectType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [submissionId, setSubmissionId] = useState("")

  const validateForm = (): boolean => {
    const errors: FormErrors = {}
    let isValid = true

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required"
      isValid = false
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
      isValid = false
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = "Please enter a valid email address"
        isValid = false
      }
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          industry: formData.industry,
          projectType: formData.projectType,
          message: formData.message.trim(),
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus("success")
        setSubmissionId(result.submissionId || "")

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          industry: "",
          projectType: "",
          message: "",
        })
        setFormErrors({})

        // Auto-hide success message after 8 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 8000)
      } else {
        throw new Error(result.error || "Submission failed")
      }
    } catch (error) {
      setSubmitStatus("error")
      if (error instanceof TypeError && error.message.includes("fetch")) {
        setErrorMessage("Network error: Please check your connection and try again.")
      } else if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("An unexpected error occurred. Please try again or contact us directly.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <GlowingCard className={`bg-white/5 ${className}`} glowColor={glowColor}>
      <CardHeader>
        <div>
          <CardTitle className="text-white text-3xl mb-2">{title}</CardTitle>
          <CardDescription className="text-gray-300 text-lg">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg animate-in fade-in duration-500">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-green-300 font-semibold">Message Sent Successfully!</p>
                <p className="text-green-200 text-sm">
                  Your inquiry has been submitted seamlessly without any interruptions.
                </p>
              </div>
            </div>
            <div className="bg-green-500/10 p-3 rounded-md">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-4 h-4 text-green-400" aria-hidden="true" />
                <p className="text-green-200 text-sm font-medium">Secure Submission Completed</p>
              </div>
              <ul className="text-green-200 text-sm space-y-1">
                <li>• No CAPTCHA required - submitted via secure server</li>
                <li>• We'll respond to {formData.email || "your email"} within 24 hours</li>
                <li>• Your message was delivered directly to our team</li>
                {submissionId && <li>• Reference ID: {submissionId}</li>}
              </ul>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg animate-in fade-in duration-500">
            <div className="flex items-center space-x-3 mb-3">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-red-300 font-semibold">Submission Error</p>
                <p className="text-red-200 text-sm">{errorMessage}</p>
              </div>
            </div>
            <div className="bg-red-500/10 p-3 rounded-md">
              <p className="text-red-200 text-sm font-medium">Alternative Contact Methods:</p>
              <div className="text-red-200 text-sm mt-1 space-y-1">
                <p>📧 Email: hello@celestialagents.com</p>
                <p>🌐 Website: celestialagents.com</p>
                <p>💬 We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name *"
                required
                disabled={isSubmitting}
                aria-invalid={!!formErrors.firstName}
                aria-describedby={formErrors.firstName ? "firstName-error" : undefined}
                className={`w-full bg-white/10 border ${
                  formErrors.firstName ? "border-red-500" : "border-white/20"
                } text-white placeholder:text-gray-400 h-12 text-lg px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all duration-200`}
              />
              {formErrors.firstName && (
                <p id="firstName-error" className="mt-1 text-sm text-red-400">
                  {formErrors.firstName}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name *"
                required
                disabled={isSubmitting}
                aria-invalid={!!formErrors.lastName}
                aria-describedby={formErrors.lastName ? "lastName-error" : undefined}
                className={`w-full bg-white/10 border ${
                  formErrors.lastName ? "border-red-500" : "border-white/20"
                } text-white placeholder:text-gray-400 h-12 text-lg px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all duration-200`}
              />
              {formErrors.lastName && (
                <p id="lastName-error" className="mt-1 text-sm text-red-400">
                  {formErrors.lastName}
                </p>
              )}
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address *"
              required
              disabled={isSubmitting}
              aria-invalid={!!formErrors.email}
              aria-describedby={formErrors.email ? "email-error" : undefined}
              className={`w-full bg-white/10 border ${
                formErrors.email ? "border-red-500" : "border-white/20"
              } text-white placeholder:text-gray-400 h-12 text-lg px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all duration-200`}
            />
            {formErrors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-400">
                {formErrors.email}
              </p>
            )}
          </div>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Company Name"
            disabled={isSubmitting}
            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 h-12 text-lg px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all duration-200"
          />
          <select
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full bg-white/10 border border-white/20 text-white h-12 text-lg px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all duration-200"
          >
            <option value="" className="bg-gray-800 text-white">
              Select Industry
            </option>
            <option value="healthcare" className="bg-gray-800 text-white">
              Healthcare
            </option>
            <option value="finance" className="bg-gray-800 text-white">
              Finance
            </option>
            <option value="retail" className="bg-gray-800 text-white">
              Retail & E-commerce
            </option>
            <option value="manufacturing" className="bg-gray-800 text-white">
              Manufacturing
            </option>
            <option value="real-estate" className="bg-gray-800 text-white">
              Real Estate
            </option>
            <option value="technology" className="bg-gray-800 text-white">
              Technology
            </option>
            <option value="other" className="bg-gray-800 text-white">
              Other
            </option>
          </select>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message *"
              required
              disabled={isSubmitting}
              aria-invalid={!!formErrors.message}
              aria-describedby={formErrors.message ? "message-error" : undefined}
              className={`w-full bg-white/10 border ${
                formErrors.message ? "border-red-500" : "border-white/20"
              } text-white placeholder:text-gray-400 h-32 text-lg px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all duration-200 resize-none`}
            />
            {formErrors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-400">
                {formErrors.message}
              </p>
            )}
          </div>
          <MagneticButton
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-md font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Send Message <Send className="ml-2 w-5 h-5" />
              </span>
            )}
          </MagneticButton>
        </form>
      </CardContent>
    </GlowingCard>
  )
}
