"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  heading: string;
  subheading: string;
}

function Hero({ heading, subheading }: HeroProps) {
  return (
    <>
      <section className="w-full h-screen min-h-[400px] flex items-center justify-center bg-foreground z-30">
        <div className="w-[80%] max-w-7xl z-30">
          <motion.h1
            className="hero-heading inline relative text-3xl font-medium text-secondary uppercase"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {heading}
          </motion.h1>
          <motion.h2
            className="text-5xl lg:text-6xl text-white font-semibold mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          >
            {subheading}
          </motion.h2>
        </div>
      </section>
      <div className="absolute top-0 left-0 w-screen h-screen fade z-20"></div>
      <div className="absolute top-0 left-0 w-screen h-screen z-10">
        <motion.video
          className="w-screen h-full object-cover"
          autoPlay
          muted
          loop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <source src="/bg.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </>
  );
}

export default Hero;
