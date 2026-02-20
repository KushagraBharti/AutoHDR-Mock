"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu, Upload } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Contact", href: "#" },
]

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-display font-bold tracking-tight">
              Auto<span className="text-gradient-green">HDR</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm text-foreground/70 hover:text-foreground transition-colors duration-200 group"
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px bg-accent-green"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-accent-green/50 rounded-lg text-accent-green hover:border-accent-green hover:glow-green transition-all duration-300"
            >
              <Upload className="w-4 h-4" />
              Upload Photos
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-background/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <span className="text-xl font-display font-bold">
                Auto<span className="text-gradient-green">HDR</span>
              </span>
              <button
                className="p-2 text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-display font-semibold text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 + 0.1, duration: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 text-base font-medium border border-accent-green/50 rounded-xl text-accent-green hover:border-accent-green hover:glow-green transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  <Upload className="w-4 h-4" />
                  Upload Photos
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
