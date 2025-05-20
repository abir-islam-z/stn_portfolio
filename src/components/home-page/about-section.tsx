"use client";

import { Card, CardContent } from "@/components/ui/card";
import getIconComponent from "@/lib/getIconComponent";
import { motion } from "framer-motion";

export interface IAbout {
  description: string;
  details: string[];
  personalInfo: { label: string; value: string }[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export default function AboutSection({ data }: SectionProps<IAbout>) {
  const { description, details, personalInfo, features } = data;
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 size-64 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 size-64 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
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
              <span className="text-fuchsia-400">&lt;</span> About Me{" "}
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
            Crafting <span className="neon-text">Digital Experiences</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <div className="relative rounded-lg overflow-hidden border border-primary/20 h-full">
              <img
                src="/placeholder.svg?height=600&width=400"
                alt="Abir - About Me"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-mono text-green-400">
                    Available for Freelance
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="col-span-2"
          >
            <div className="space-y-6">
              <div
                className="text-lg text-gray-300 text-pretty space-y-5"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />

              <div className="grid grid-cols-2 gap-4 pt-4">
                {personalInfo.map((info, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {info.label}
                    </h3>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Card className="border border-cyan-500/20 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors overflow-hidden group h-full">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 flex justify-center"
                  >
                    {getIconComponent(
                      feature.icon,
                      "size-10 text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-300"
                    )}
                  </motion.div>
                  <h3 className="text-xl font-bold text-center mb-2 neon-text">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 w-0 group-hover:w-full transition-all duration-300"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
