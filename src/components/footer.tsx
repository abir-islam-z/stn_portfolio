"use client";

import { motion } from "framer-motion";
import { ArrowUp, Code } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-background py-10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
        <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link href="/">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary flex items-center gap-2">
                <Code className="size-6 text-primary" />
                <span className="font-mono tracking-tight">ABIR</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center md:items-end"
          >
            <button
              onClick={scrollToTop}
              className="bg-card p-3 rounded-md border border-primary/30 hover:bg-primary/10 transition-colors mb-4 group"
            >
              <ArrowUp className="size-5 text-primary group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-muted-foreground text-sm text-balance">
              &copy; {new Date().getFullYear()} Abir. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
