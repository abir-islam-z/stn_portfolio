"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar, Clock, User } from "lucide-react";

// Define types for our data
export interface IBlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
}

export default function BlogSection({
  data: blogPosts,
}: SectionProps<IBlogPost[]>) {
  return (
    <section id="blog" className="py-24 bg-muted/30 dark:bg-black/50 relative">
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
              <span className="text-secondary">&lt;</span> Latest Articles{" "}
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
            My <span className="neon-text">Blog</span>
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
            I share my knowledge and insights about web development, design, and
            technology through articles and tutorials.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * post.id, duration: 0.5 }}
            >
              <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden h-full hover:border-primary/50 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary/80 hover:bg-secondary text-white backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="size-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="size-3 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <User className="size-3 mr-1" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-pretty line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="ghost"
                    className="w-full justify-between hover:bg-primary/10 group"
                  >
                    Read Article
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center"
        >
          <Button
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
            size="lg"
          >
            View All Articles <ArrowRight className="ml-2 size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
