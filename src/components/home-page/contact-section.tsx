"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import getIconComponent from "@/lib/getIconComponent";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Loader2Icon,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

export interface ISocialLinks {
  title: string;
  url: string;
  icon: string;
  iconType: "lucide" | string;
}

export interface IContact {
  email: string;
  phone: string;
  location: string;
  availability: string;
  socialLinks: ISocialLinks[];
}

export default function ContactSection({ data }: SectionProps<IContact>) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, isSubmitting: true });

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormState({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Here you would typically send the data to your backend
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-muted/30 dark:bg-black/50 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 size-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 size-64 bg-secondary/10 rounded-full blur-3xl"></div>
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
              <span className="text-secondary">&lt;</span> Get In Touch{" "}
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
            Let's <span className="neon-text">Connect</span>
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
            Have a project in mind or want to collaborate? Feel free to reach
            out and let's create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden h-full">
              <CardContent className="p-6">
                {formState.isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full py-12"
                  >
                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <CheckCircle className="size-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 neon-text">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground text-center max-w-md mb-6 text-pretty">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible.
                    </p>
                    <Button
                      onClick={() =>
                        setFormState({
                          isSubmitting: false,
                          isSubmitted: false,
                          error: null,
                        })
                      }
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="contact-form-input"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="contact-form-input"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="contact-form-input"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        className="contact-form-input"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={formState.isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground"
                    >
                      {formState.isSubmitting ? (
                        <span className="flex items-center">
                          <Loader2Icon className="animate-spin mr-2 size-4" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 size-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6 neon-text">
                  Contact Information
                </h3>

                <div className="space-y-4 flex-grow">
                  <div className="contact-info-item">
                    <div className="contact-icon-container">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a
                        href="mailto:abir@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {data?.email}
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon-container">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a
                        href="tel:+8801234567890"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {data?.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon-container">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">{data?.location}</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon-container">
                      <Calendar className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Availability</h4>
                      <p className="text-muted-foreground">
                        {data?.availability}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-muted">
                  <h4 className="font-medium mb-4">Connect With Me</h4>
                  <div className="flex gap-3">
                    {data?.socialLinks.map((link) => {
                      const Icon = link.iconType;
                      return (
                        <motion.a
                          key={link.title}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -5, scale: 1.1 }}
                          className="bg-card p-3 rounded-md border border-primary/30 hover:bg-primary/10 transition-colors"
                        >
                          {getIconComponent(link.icon, "size-5 text-primary")}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
