"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Menu, MoonStar, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.div
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="size-6 text-primary" />
            <span className="font-mono tracking-tight">ABIR</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 rounded-md border border-primary/30 hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="size-5 text-primary" />
              ) : (
                <MoonStar className="size-5 text-primary" />
              )}
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md border border-primary/30 hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="size-5 text-primary" />
              ) : (
                <MoonStar className="size-5 text-primary" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md border border-primary/30 hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="size-5 text-primary" />
            ) : (
              <Menu className="size-5 text-primary" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/90 backdrop-blur-md border-b border-primary/20"
        >
          <div className="container mx-auto px-6 py-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="py-3 border-b border-primary/10 last:border-0"
              >
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors block uppercase tracking-wider text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary font-mono mr-2">{`0${
                    index + 1
                  }.`}</span>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
