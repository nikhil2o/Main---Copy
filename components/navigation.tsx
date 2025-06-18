"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X, ChevronDown, Bot, Zap, Settings, BarChart3, Building, Briefcase, Mail } from "lucide-react"

const navigationItems = [
  {
    label: "Services",
    href: "/services",
    icon: Bot,
    submenu: [
      { label: "AI Workflows", href: "/services/ai-workflows", icon: Zap },
      { label: "Chatbot Development", href: "/services/chatbot-development", icon: Bot },
      { label: "Process Automation", href: "/services/process-automation", icon: Settings },
      { label: "AI Analytics", href: "/services/ai-analytics", icon: BarChart3 },
    ],
  },
  {
    label: "Company",
    href: "/company",
    icon: Building,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: Briefcase,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Celestial Agents
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`relative text-gray-300 hover:text-white transition-colors duration-300 ${
                pathname === "/" ? "text-white" : ""
              }`}
            >
              Home
              {pathname === "/" && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  layoutId="activeSection"
                />
              )}
            </Link>

            {navigationItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 ${
                    isActive(item.href) ? "text-white" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      layoutId="activeSection"
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 ${
                                isActive(subItem.href) ? "text-white bg-white/10" : ""
                              }`}
                            >
                              <subItem.icon className="w-5 h-5" />
                              <span>{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300"
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className={`text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg ${
                    pathname === "/" ? "text-white bg-white/10" : ""
                  }`}
                >
                  Home
                </Link>

                {navigationItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg ${
                        isActive(item.href) ? "text-white bg-white/10" : ""
                      }`}
                      onClick={() =>
                        item.submenu && setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                    >
                      <span>{item.label}</span>
                      {item.submenu && <ChevronDown className="w-4 h-4" />}
                    </Link>

                    {/* Mobile Submenu */}
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        className="ml-4 mt-2 space-y-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`flex items-center space-x-3 py-2 px-4 rounded-lg text-gray-400 hover:text-white transition-colors duration-300 ${
                              isActive(subItem.href) ? "text-white bg-white/10" : ""
                            }`}
                          >
                            <subItem.icon className="w-4 h-4" />
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-4 mx-4">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
