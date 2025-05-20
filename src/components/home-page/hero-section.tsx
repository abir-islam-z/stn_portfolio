"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import HeroGrid from "./hero/hero-grid";

export interface IProfile {
  name: string;
  title: string;
  thumbnail: string;
  experience: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeFile: string;
}

export default function HeroSection({ data }: SectionProps<IProfile>) {
  const { name, title, experience, github, linkedin, twitter, thumbnail } =
    data;
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden"
    >
      <HeroGrid />

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              <span className="text-secondary">&lt;</span> Full-Stack Developer{" "}
              <span className="text-secondary">/&gt;</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance"
          >
            <span className="block">Hi, I'm</span>
            <span className="neon-text glitch" data-text="Abir">
              {name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-muted-foreground mb-4 max-w-lg mx-auto lg:mx-0"
          >
            <span className="text-xl font-semibold neon-text">{title}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground border-none"
              asChild
            >
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary/10"
            >
              <a
                href={data.resumeFile}
                target="_blank"
                download
                className="flex items-center gap-2"
              >
                <Download className="mr-2 size-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-4 mt-8 justify-center lg:justify-start"
          >
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-card p-3 rounded-md border border-primary/30 hover:bg-primary/10 transition-colors"
            >
              <Github className="size-5 text-primary" />
            </motion.a>
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-card p-3 rounded-md border border-primary/30 hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="size-5 text-primary" />
            </motion.a>
            <motion.a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-card p-3 rounded-md border border-primary/30 hover:bg-primary/10 transition-colors"
            >
              <Twitter className="size-5 text-primary" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative size-[300px] md:size-[400px] mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"></div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/50 overflow-hidden">
              <img
                src={thumbnail || "/placeholder.svg?height=400&width=400"}
                alt="Abir - Software Engineer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 left-0 right-0 text-center">
              <div className="inline-block bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                <span className="text-sm font-mono text-primary">
                  {experience}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-primary text-sm font-mono mb-2">Scroll Down</span>
        <ChevronDown className="size-6 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}
