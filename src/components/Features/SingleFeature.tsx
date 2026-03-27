"use client";

import { motion } from "framer-motion";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="rounded-2xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900"
        whileHover={{ y: -4, scale: 1.01 }}
      >
        <div className="bg-primary/10 text-primary mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-body-color text-base leading-relaxed font-medium dark:text-slate-300">
          {paragraph}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SingleFeature;
