"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Quote, User } from "lucide-react";

import { recommendationsData } from "@/lib/recommendationsData";
import { SectionHeading } from "./SectionHeading";

const RecommendationCard = ({
  recommendation,
  index,
}: {
  recommendation: (typeof recommendationsData)[number];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="border-border bg-card hover:border-primary flex flex-col rounded-lg border p-6 transition-colors"
    >
      <div className="mb-4 flex items-start justify-between">
        <Quote className="text-primary/40" size={26} fill="currentColor" />
        <a
          href={recommendation.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${recommendation.name}'s recommendation at the source`}
          className="text-faint hover:text-primary transition-colors"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <p
        className={`text-muted-foreground mb-1 text-[15px] leading-relaxed ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        &ldquo;{recommendation.quote}&rdquo;
      </p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="text-primary mb-4 self-start text-sm font-semibold hover:underline"
      >
        {expanded ? "Show less" : "Read full"}
      </button>

      <div className="border-border mt-auto flex items-center gap-3 border-t pt-4">
        <span className="bg-muted text-muted-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
          <User size={18} />
        </span>
        <div>
          <p className="text-foreground text-sm font-semibold">
            {recommendation.name}
          </p>
          <p className="text-muted-foreground text-xs">
            {recommendation.title} · {recommendation.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Recommendations = () => {
  return (
    <section
      id="recommendations"
      className="mx-auto max-w-6xl px-6 py-20 sm:px-10"
    >
      <SectionHeading number="05." title="Recommendations" />
      <p className="text-muted-foreground -mt-9 mb-13 text-lg">
        Recommendations from colleagues and leaders
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recommendationsData.map((recommendation, index) => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
