"use client";

import { Card, CardContent } from "@/components/ui/card";
import getIconComponent from "@/lib/getIconComponent";
import { motion } from "framer-motion";
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";

export interface Achievement {
  icon: string; // Name of the lucide icon
  title: string;
  description: string;
}

export interface Subject {
  name: string;
  icon: string; // Name of the lucide icon
}

export interface Course {
  name: string;
  provider: string;
  year: string;
  icon: string; // Name of the lucide icon
}

export interface IEducation {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  cgpa: string;
  achievements: Achievement[];
  subjects: Subject[];
  courses: Course[];
}

export default function EducationSection({ data }: SectionProps<IEducation>) {
  const {
    degree,
    institution,
    location,
    period,
    description,
    cgpa,
    achievements,
    subjects,
    courses,
  } = data;
  return (
    <section
      id="education"
      className="py-24 bg-muted/30 dark:bg-black/50 relative"
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
              <span className="text-secondary">&lt;</span> Education{" "}
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
            Academic <span className="neon-text">Journey</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Main degree card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden h-full hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="size-10 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-2 neon-text">
                  {degree}
                </h3>
                <h4 className="text-xl font-medium text-center mb-4">
                  {institution}
                </h4>

                <div className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="size-4 mr-1" />
                    {period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="size-4 mr-1" />
                    {location}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-pretty text-center">
                  {description}
                </p>

                <div className="flex justify-center mb-6">
                  <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                    <span className="text-sm font-medium text-primary">
                      CGPA: {cgpa}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-sm font-semibold flex items-center mb-4 justify-center">
                    <Award className="size-4 mr-1 text-secondary" />{" "}
                    Achievements & Activities
                  </h5>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start mb-4">
                        <div className="mr-2 p-2 rounded-full bg-primary/10">
                          {getIconComponent(achievement.icon, "text-primary")}
                        </div>
                        <div>
                          <h6 className="text-sm font-medium">
                            {achievement.title}
                          </h6>
                          <p className="text-xs text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Complementary education visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="space-y-6">
              <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 neon-text">
                    Key Areas of Study
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {subjects.map((subject, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        className="flex items-center p-3 rounded-lg border border-primary/20 bg-card/60"
                      >
                        <div className="mr-3 p-2 rounded-full bg-primary/10">
                          {getIconComponent(subject.icon, "text-primary")}
                        </div>
                        <span className="text-sm">{subject.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 neon-text">
                    Continuing Education
                  </h3>
                  <div className="space-y-4">
                    {courses.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-primary/20 bg-card/60"
                      >
                        <div className="flex items-center">
                          <div className="mr-3 p-2 rounded-full bg-primary/10">
                            {getIconComponent(course.icon, "text-primary")}
                          </div>
                          <div>
                            <h6 className="text-sm font-medium">
                              {course.name}
                            </h6>
                            <p className="text-xs text-muted-foreground">
                              {course.provider}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs bg-secondary/10 px-2 py-1 rounded-full">
                          {course.year}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
