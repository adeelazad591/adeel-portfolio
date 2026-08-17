import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  centered?: boolean;
}

export const SectionHeading = ({
  number,
  title,
  centered = false,
}: SectionHeadingProps) => {
  if (centered) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <p className="text-primary mb-3 text-sm">{number}</p>
        <h2 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-13 flex items-center gap-5"
    >
      <span className="text-primary text-xl font-medium">{number}</span>
      <h2 className="text-foreground text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
      <span className="bg-border h-px flex-1" />
    </motion.div>
  );
};
