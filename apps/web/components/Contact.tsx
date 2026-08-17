"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MessageCircleCode,
  Send,
} from "lucide-react";

const EMAIL = "adeelazad591@gmail.com";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — the mailto
      // link below still works as a fallback.
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = form.subject || `Message from ${form.name || "your site"}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-2xl px-6 py-20 text-center sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary mb-4 text-sm">05. What&apos;s Next?</p>
        <h2 className="text-foreground mb-5 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mx-auto mb-7 max-w-lg text-lg leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hi, my inbox is always open.
        </p>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="border-border bg-card text-foreground hover:border-primary mb-9 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition-colors"
        >
          <Mail size={16} /> {EMAIL}
          {copied ? (
            <Check size={15} className="text-emerald-500" />
          ) : (
            <Copy size={15} className="text-faint" />
          )}
        </button>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-left"
      >
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="text-foreground mb-2 block text-sm font-semibold"
            >
              Name
            </label>
            <input
              id="contact-name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-border bg-muted text-foreground focus:border-primary w-full rounded-lg border px-4 py-3 text-[15px] outline-none transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="text-foreground mb-2 block text-sm font-semibold"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border-border bg-muted text-foreground focus:border-primary w-full rounded-lg border px-4 py-3 text-[15px] outline-none transition-colors"
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="contact-subject"
            className="text-foreground mb-2 block text-sm font-semibold"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            placeholder="What's this about?"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="border-border bg-muted text-foreground focus:border-primary w-full rounded-lg border px-4 py-3 text-[15px] outline-none transition-colors"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="contact-message"
            className="text-foreground mb-2 block text-sm font-semibold"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Your message..."
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border-border bg-muted text-foreground focus:border-primary w-full resize-y rounded-lg border px-4 py-3 text-[15px] outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2.5 rounded-full py-4 text-base font-semibold text-white transition-colors"
        >
          <Send size={17} /> Send Message
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-9 flex justify-center gap-8"
      >
        <a
          href="https://wa.me/923315186415"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <MessageCircleCode size={22} />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email Address"
          title="Email Address"
        >
          <Mail size={22} />
        </a>
        <a
          href="https://linkedin.com/in/adeelazad591"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://github.com/adeelazad591"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub Profile"
          title="GitHub Profile"
        >
          <Github size={22} />
        </a>
      </motion.div>
    </section>
  );
};
