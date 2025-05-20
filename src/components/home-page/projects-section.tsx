"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Eye, Github } from "lucide-react";
import Link from "next/link";

// Define types for our data
export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  features: string[];
}

export default function ProjectsSection({
  data: projects,
}: SectionProps<IProject[]>) {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 size-64 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 size-64 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-2"
          >
            <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase">
              <span className="text-fuchsia-400">&lt;</span> Featured Work{" "}
              <span className="text-fuchsia-400">/&gt;</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
          >
            My <span className="neon-text">Projects</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty"
          >
            Check out some of my recent work showcasing my skills in web
            development, 3D graphics, and UI/UX design. These projects represent
            my passion for creating innovative and visually stunning digital
            experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * project.id, duration: 0.5 }}
                className="flex"
              >
                <Card className="border border-cyan-500/20 bg-black/40 backdrop-blur-sm overflow-hidden flex flex-col h-full">
                  <div className="relative overflow-hidden group h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-black/50 border-cyan-500/50 backdrop-blur-sm"
                        >
                          <Eye className="size-4 mr-1" /> Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 neon-text">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-pretty line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-cyan-500/30 text-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2 text-cyan-400">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-gray-400"
                          >
                            <ArrowRight className="size-3 mr-2 text-fuchsia-400 shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.demoUrl}>
                        <ExternalLink className="size-4 mr-1" /> Demo
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.repoUrl}>
                        <Github className="size-4 mr-1" /> Code
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/50 hover:bg-cyan-500/10"
                    >
                      See Details
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center"
        >
          <Button
            className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white"
            size="lg"
          >
            View All Projects <ArrowRight className="ml-2 size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
