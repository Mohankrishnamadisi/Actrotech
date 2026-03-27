"use client";

import { motion } from "framer-motion";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HomeAnimated = () => {
  return (
    <>
      <ScrollUp />
      <motion.main
        className="overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={sectionVariants} transition={{ delay: 0.1 }}>
          <Hero />
        </motion.div>

        <motion.div variants={sectionVariants} transition={{ delay: 0.2 }}>
          <Features />
        </motion.div>

        <motion.div variants={sectionVariants} transition={{ delay: 0.25 }}>
          <Video />
        </motion.div>

        <motion.div variants={sectionVariants} transition={{ delay: 0.3 }}>
          <Brands />
        </motion.div>

        <motion.div variants={sectionVariants} transition={{ delay: 0.35 }}>
          <AboutSectionOne />
        </motion.div>

        <motion.div variants={sectionVariants} transition={{ delay: 0.4 }}>
          <AboutSectionTwo />
        </motion.div>

        <motion.div variants={sectionVariants} transition={{ delay: 0.45 }}>
          <Testimonials />
        </motion.div>

        <motion.div variants={sectionVariants} transition={{ delay: 0.5 }}>
          <Pricing />
        </motion.div>

        <motion.div variants={sectionVariants} transition={{ delay: 0.55 }}>
          <Blog />
        </motion.div>

        <motion.div variants={sectionVariants} transition={{ delay: 0.6 }}>
          <Contact />
        </motion.div>
      </motion.main>
    </>
  );
};

export default HomeAnimated;
