"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";

export interface IExperience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface ICareerSummary {
  description: string;
}

interface IExperienceSectionProps {
  career_summary: ICareerSummary;
  experience: IExperience[];
}

export default function ExperienceSection({
  data,
}: SectionProps<IExperienceSectionProps>) {
  const { career_summary, experience: experiences } = data;

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 size-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 size-64 bg-secondary/10 rounded-full blur-3xl"></div>
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
              <span className="text-secondary">&lt;</span> Work Experience{" "}
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
            Professional <span className="neon-text">Journey</span>
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
            {career_summary?.description}
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="mb-12 relative"
            >
              <div
                className={`md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 size-6 rounded-full bg-gradient-to-r from-primary to-secondary hidden md:block"></div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div
                        className={`flex items-center mb-4 ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Briefcase className="size-6 text-primary" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2 neon-text">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-medium mb-4">
                        {experience.company}
                      </h4>

                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground justify-center md:justify-start">
                        <div className="flex items-center">
                          <Calendar className="size-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="size-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 text-pretty">
                        {experience.description}
                      </p>

                      <div className="mt-4">
                        <h5 className="text-sm font-semibold mb-2">
                          Key Responsibilities:
                        </h5>
                        <ul className="space-y-2">
                          {experience.responsibilities.map(
                            (responsibility, i) => (
                              <li key={i} className="flex items-start">
                                <ArrowRight className="size-4 mr-2 text-secondary shrink-0 mt-1" />
                                <span className="text-sm text-muted-foreground">
                                  {responsibility}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
