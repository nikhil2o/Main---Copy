"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingElements } from "@/components/floating-elements"

interface PageLayoutProps {
  children: React.ReactNode
  showBreadcrumb?: boolean
}

export function PageLayout({ children, showBreadcrumb = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-x-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <FloatingElements />
      <Navigation />

      <main className="pt-24">
        {showBreadcrumb && (
          <div className="container mx-auto px-4">
            <Breadcrumb />
          </div>
        )}
        {children}
      </main>
    </div>
  )
}
