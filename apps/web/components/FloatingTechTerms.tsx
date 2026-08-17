"use client";

import { motion } from "framer-motion";

export const FloatingTechTerms = () => {
  const topSnippet = `const developer = {
  name: 'Adeel Azad',
  role: 'Frontend Developer'
};`;

  const bottomSnippet = `<Button
  variant="primary"
  onClick={() => viewWork()}
/>`;

  const snippetBaseClasses =
    "absolute bg-navy-light/30 p-4 rounded-lg text-xs text-slate font-mono border border-navy-lightest/20 select-none";

  return (
    <div className="relative flex h-96 w-full items-center justify-center overflow-hidden">
      {/* Top Code Snippet */}
      <motion.pre
        className={`${snippetBaseClasses} left-0 top-4 -translate-x-8 transform sm:-translate-x-4`}
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <code>{topSnippet}</code>
      </motion.pre>

      {/* Bottom Code Snippet */}
      <motion.pre
        className={`${snippetBaseClasses} bottom-4 right-0 translate-x-8 transform sm:translate-x-4`}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <code>{bottomSnippet}</code>
      </motion.pre>
    </div>
  );
};
