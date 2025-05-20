"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import getIconComponent from "@/lib/getIconComponent";
import { AnimatePresence, motion } from "framer-motion";
import { Braces, ChevronDown, ChevronUp, FileQuestion } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Define types for our data
interface ITechnology {
  name: string;
  category: string;
  icon: string;
}

interface ISkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ISkillsData {
  categories: ISkillCategory[];
  technologies: ITechnology[];
}

export default function SkillsSection({
  data: skillsData,
}: SectionProps<ISkillsData>) {
  const ref = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset expanded state when filter changes
  useEffect(() => {
    setIsExpanded(false);
  }, [activeFilter]);

  // If no data, show empty state
  if (!skillsData) {
    return (
      <section
        id="skills"
        className="py-24 bg-muted/30 dark:bg-black/50 relative"
      >
        <div className="container mx-auto px-6 z-10 relative">
          <div className="flex justify-center items-center min-h-[300px]">
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <FileQuestion className="size-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  No Skills Data Available
                </h3>
                <p className="text-muted-foreground">
                  Skills information could not be loaded.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  const { technologies, categories } = skillsData;

  // Filter technologies based on active filter
  const filteredTechnologies = technologies.filter(
    (tech) => activeFilter === "all" || tech.category === activeFilter
  );

  // Calculate if we need to show the expand button
  // Assuming 8 columns on large screens, 6 on medium, 4 on small, and 3 on extra small
  // We'll use the smallest number (3) to be safe
  const itemsPerRow = 3;
  const rowsNeeded = Math.ceil(filteredTechnologies.length / itemsPerRow);
  const needsExpansion = rowsNeeded > 2;

  return (
    <section
      id="skills"
      className="py-24 bg-muted/30 dark:bg-black/50 relative"
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 size-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 size-64 bg-secondary/10 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              <span className="text-secondary">&lt;</span> Technical Abilities{" "}
              <span className="text-secondary">/&gt;</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
          >
            My <span className="neon-text">Tech Stack</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            I've mastered a wide range of technologies to build modern,
            performant, and visually stunning applications.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 neon-text text-center flex items-center justify-center gap-2">
                <Braces className="size-5" />
                Technologies I Work With
              </h3>

              {/* Category filter tabs */}
              <div className="flex justify-center mb-6 overflow-x-auto pb-2">
                <div className="flex gap-2 p-1 bg-card/60 backdrop-blur-sm border border-primary/20 rounded-lg">
                  <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-3 py-1.5 text-xs rounded-md transition-all ${
                      activeFilter === "all"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    All
                  </button>

                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`px-3 py-1.5 text-xs rounded-md transition-all inline-flex gap-1 ${
                        activeFilter === category.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-primary/10"
                      }`}
                    >
                      {getIconComponent(category.icon)}
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Container with fixed height and overflow hidden */}
                <div className="relative">
                  {/* Technologies grid with fixed height for 2 rows or auto height if expanded */}
                  <div
                    className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 
                      ${
                        !isExpanded && needsExpansion
                          ? "h-[120px] overflow-hidden"
                          : "h-auto"
                      } 
                      transition-[height] duration-700 ease-in-out`}
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredTechnologies.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          layout
                          transition={{ delay: 0.02 * index, duration: 0.3 }}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className={
                            index >= 16 && !isExpanded
                              ? "opacity-0 transition-opacity duration-700 delay-300"
                              : "opacity-100 transition-opacity duration-700"
                          }
                        >
                          <div className="flex flex-col items-center p-2 rounded-lg border border-primary/20 bg-card/60 hover:border-primary/50 transition-all duration-300">
                            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                              {getIconComponent(tech.icon)}
                            </div>
                            <span className="text-xs text-center">
                              {tech.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Gradient overlay that fades out when expanded */}
                  {needsExpansion && !isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none transition-opacity duration-700 ease-in-out"></div>
                  )}
                </div>

                {/* Show/Hide button - only if we need expansion */}
                {needsExpansion && (
                  <div className="flex justify-center mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="size-4 mr-2" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="size-4 mr-2" />
                          Show More
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
