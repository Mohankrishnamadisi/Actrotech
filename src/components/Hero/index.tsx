"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/Common/Button";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const productImage = isDark ? "/images/new/Product-dark.png" : "/images/new/Product-light.png";
  const fullHeadline = "Build premium software and talent solutions with confidence.";
  const [typedHeadline, setTypedHeadline] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 65;
    const typingInterval = setInterval(() => {
      setTypedHeadline((prev) => {
        const nextText = fullHeadline.slice(0, prev.length + 1);
        return nextText;
      });
      currentIndex += 1;
      if (currentIndex >= fullHeadline.length) {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [fullHeadline]);

  useEffect(() => {
    if (typingComplete) {
      setShowCursor(true);
      return;
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((visible) => !visible);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [typingComplete]);

  return (
    <section
      id="home"
      className={`relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24 lg:pb-20 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
          : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 text-slate-900"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={`absolute -left-20 top-10 h-56 w-56 rounded-full blur-3xl opacity-70 ${
          isDark ? "bg-cyan-500/20" : "bg-blue-400/20"
        } animate-float`} />
        <div className={`absolute -right-20 top-28 h-72 w-72 rounded-full blur-3xl opacity-70 ${
          isDark ? "bg-violet-500/20" : "bg-purple-400/20"
        } animate-float`} />
        <div className={`absolute left-1/2 top-[15rem] h-72 w-72 -translate-x-1/2 rounded-full blur-[90px] opacity-60 ${
          isDark ? "bg-sky-500/15" : "bg-slate-900/10"
        }`} />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:min-h-[calc(100vh-6rem)]">
          <motion.div
            initial={{ opacity: 0, x: -48, y: 24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold ${
              isDark ? "border-white/10 bg-white/10 text-slate-100" : "border-slate-200 bg-white text-slate-700"
            }`}>
              Trusted by growing software teams worldwide
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="mt-8 text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 dark:text-white sm:text-4xl lg:text-[2.75rem]"
            >
              <span aria-live="polite">{typedHeadline}</span>
              <span className={`ml-1 inline-block h-8 w-1 rounded bg-slate-900 dark:bg-white transition-opacity duration-200 ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.18 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl"
            >
              ActroTech helps modern companies accelerate product delivery with scalable platforms, design-driven engineering, and talent solutions built to move fast.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.26 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href="/signin" variant="primary" className="min-w-[160px] px-8 py-3 text-base transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                Get Started
              </Button>
              <Button href="/products" variant="secondary" className="min-w-[160px] px-8 py-3 text-base transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                View Products
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.34 }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Time to market</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">2x faster</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Reliability</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">99.9%</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Support</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">24/7</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative -mt-8 sm:-mt-10 lg:-mt-6">
              <div className={`relative overflow-hidden rounded-[2rem] border shadow-[0_40px_80px_-40px_rgba(15,23,42,0.25)] ${
                isDark ? "border-white/10 bg-slate-900/80" : "border-slate-200 bg-white/100"
              }`}>
                <div className="absolute -left-12 top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -right-12 bottom-8 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 p-4 sm:p-6"
                >
                  <Image
                    src={productImage}
                    width={760}
                    height={520}
                    alt="Product dashboard preview"
                    className="h-[420px] w-full rounded-[1.75rem] object-cover sm:h-[500px] lg:h-[560px]"
                    priority
                  />
                </motion.div>
                <div className={`absolute bottom-5 left-5 right-5 rounded-[1.5rem] border ${
                  isDark ? "border-white/10 bg-slate-950/90" : "border-white/50 bg-white/90"
                } p-4 backdrop-blur-xl shadow-2xl shadow-slate-900/10`}>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Revenue</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">$12.4M</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Active Users</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">8.7K</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">SLA</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">99.9%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
