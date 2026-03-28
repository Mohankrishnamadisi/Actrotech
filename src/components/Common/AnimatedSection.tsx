"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  from?: "left" | "right" | "up" | "scale";
  className?: string;
}

const getVariants = (from: AnimatedSectionProps["from"]) => {
  switch (from) {
    case "left":
      return {
        hidden: { opacity: 0, x: -60, y: 20, scale: 0.98 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: 60, y: 20, scale: 0.98 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1 },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.96, y: 24 },
        visible: { opacity: 1, scale: 1, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
      };
  }
};

export default function AnimatedSection({ children, delay = 0, from = "up", className = "" }: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={getVariants(from)}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
