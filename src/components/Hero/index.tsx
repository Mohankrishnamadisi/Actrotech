"use client";

import { motion } from "framer-motion";
import Button from "@/components/Common/Button";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const heading = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="home"
      className={`relative overflow-hidden pt-28 pb-36 md:pt-32 md:pb-44 ${
        isDark
          ? "bg-linear-to-br from-slate-950 via-indigo-900 to-cyan-700 text-white"
          : "bg-linear-to-br from-blue-50 via-indigo-100 to-cyan-50 text-gray-900"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className={`absolute -left-20 top-10 h-48 w-48 rounded-full blur-3xl animate-float ${
          isDark ? "bg-cyan-400/30" : "bg-blue-400/20"
        }`} />
        <div className={`absolute right-1/4 top-32 h-72 w-72 rounded-full blur-3xl animate-float ${
          isDark ? "bg-indigo-500/30" : "bg-indigo-400/20"
        }`} />
        <div className={`absolute bottom-16 left-1/2 h-56 w-56 rounded-full blur-3xl animate-float ${
          isDark ? "bg-violet-500/35" : "bg-purple-400/20"
        }`} />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            className={`mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl ${
              isDark ? "text-white" : "text-slate-900"
            }`} 
            variants={heading}
            transition={{ duration: 0.8, ease: "easeOut" as any }}
          >
            Build Future-ready Products & Teams with ActroTech
          </motion.h1>

          <motion.p
            className={`mx-auto mb-10 max-w-3xl text-base leading-relaxed sm:text-lg md:text-xl ${
              isDark ? "text-slate-200" : "text-slate-700"
            }`} 
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as any }}
          >
            Accelerate your roadmap with intelligent engineering, cloud-first architecture, and on-demand global talent. Visualize success in every sprint.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as any }}
          >
            <Button href="/contact" variant="primary" className="w-full max-w-xs">
              Hire Expert Teams
            </Button>
            <Button href="/careers" variant="secondary" className="w-full max-w-xs">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="container relative mt-16 min-h-80 px-4"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" as any }}
      >
        <div
          className={`mx-auto max-w-6xl overflow-hidden rounded-3xl border p-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl md:p-8 ${
            isDark ? "border-white/20 bg-white/10" : "border-slate-200/60 bg-white/90"
          }`}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Enterprise Design",
                content: "Pixel-perfect UI systems with interaction-first flows and adaptive analytics.",
              },
              {
                title: "Scalable Engineering",
                content: "Serverless architecture, API-driven products, and CI/CD reliability at scale.",
              },
              {
                title: "Global Staffing",
                content: "Curated talent pods and on-demand squads for sprint-by-sprint growth.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className={`rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  isDark ? "border-white/10 bg-white/10 text-slate-100" : "border-slate-200 bg-slate-50 text-slate-800"
                }`}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
