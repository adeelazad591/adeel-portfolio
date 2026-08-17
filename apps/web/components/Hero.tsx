"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { FloatingTechTerms } from "./FloatingTechTerms";

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Engaging, intuitive web experiences.",
      "Accessible, human-centered interfaces.",
      "AI-enhanced, scalable front-end apps.",
      "Clean, maintainable, future-ready code.",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 80,
  });

  return (
    <section className="flex min-h-screen items-center px-0 py-8 sm:px-6 md:h-full md:py-0 lg:px-8">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <p className="text-theme font-mono text-sm sm:text-base">
                Hi, my name is
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-lightest mb-4 text-2xl font-bold leading-none sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Adeel Azad.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-slate mb-2 flex items-center text-base font-bold sm:text-xl md:text-2xl lg:text-3xl"
            >
              <span className="break-words">{text}</span>
              <Cursor cursorStyle="|" cursorColor="hsl(var(--primary))" />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-slate mb-8 max-w-xl text-base sm:text-lg lg:mb-12"
            >
              I&apos;m a front-end developer focused on crafting engaging and
              intuitive web experiences. Currently, I&apos;m building
              accessible, human-centered products at{" "}
              <a
                href="https://www.knowledgeplatform.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme underline"
              >
                Knowledge Platform
              </a>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <a
                href="#projects"
                className="border-theme text-theme hover:bg-theme/10 mt-6 inline-flex items-center rounded border-2 px-6 py-3 font-mono text-sm transition-all sm:mt-0 sm:px-8 sm:py-4 sm:text-base"
              >
                View my work <ChevronRight className="ml-2" size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right side - Interactive tech visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="relative hidden lg:block"
          >
            <FloatingTechTerms />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
