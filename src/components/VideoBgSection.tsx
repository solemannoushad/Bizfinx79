"use client";
import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

function VideoBgSection() {
  return (
    <section className='w-screen h-[37rem] relative flex items-center justify-end text-white'>
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
        autoPlay
        muted
        loop
      >
        <source src="/global-impact.mp4" type="video/mp4" />
      </video>

      <div className="overlay w-full h-full absolute top-0 left-0 z-20 bg-black/40" />

      <motion.div
        className="video-top-content z-30 w-[80%] max-w-6xl mx-6 lg:mx-auto text-right"
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="text-5xl font-medium">GLOBAL IMPACT</h4>
        <h5 className="font-normal mt-4 text-2xl">
          At BizFinx79, we empower businesses globally with human-centered financial solutions that spark growth, create opportunities, and build authentic global connections.
        </h5>
      </motion.div>
    </section>
  );
}

export default VideoBgSection;
