"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { motion } from "framer-motion"

export function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      return { label, href }
    }),
  ]

  return (
    <motion.nav
      className="flex items-center space-x-2 text-sm text-gray-400 mb-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          {index === 0 && <Home className="w-4 h-4" />}

          {index < breadcrumbItems.length - 1 ? (
            <Link href={item.href} className="hover:text-white transition-colors duration-300">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}

          {index < breadcrumbItems.length - 1 && <ChevronRight className="w-4 h-4" />}
        </div>
      ))}
    </motion.nav>
  )
}
