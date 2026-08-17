"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircleCode } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-max items-center px-0 py-8 sm:px-4 md:h-full md:min-h-screen md:py-16"
    >
      <div className="container mx-auto">
        <motion.h2
          className="heading-section mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="mb-8 text-base md:text-lg lg:text-xl">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll do my best to get back to
            you as soon as possible!
          </p>

          <a
            href="mailto:adeelazad591@gmail.com"
            className="border-theme text-theme hover:bg-theme/10 mb-12 inline-block rounded border-2 px-8 py-4 font-mono transition-all"
          >
            Say Hello
          </a>

          <div className="flex justify-center space-x-8">
            <a
              href="https://wa.me/923315186415"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-theme transition-colors"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <MessageCircleCode size={24} />
            </a>
            <a
              href="mailto:adeelazad591@gmail.com"
              className="text-slate hover:text-theme transition-colors"
              aria-label="Email Address"
              title="Email Address"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/adeelazad591"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-theme transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/adeelazad591"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-theme transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
