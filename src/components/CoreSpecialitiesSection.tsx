"use client";
import { coreSpecialities } from '@/content/core-specialities';
import React from 'react';
import CoreSpaeialitiesCard from './CoreSpaeialitiesCard';
import Heading from './Heading';
import { motion } from 'framer-motion';

function CoreSpecialitiesSection() {
  const leftColumn = coreSpecialities.filter((_, index) => index % 2 === 0);
  const rightColumn = coreSpecialities.filter((_, index) => index % 2 !== 0);

  const columnVariants = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  });

  return (
    <section className="section">
      <Heading title="Core Specialities" />
      <div className="my-10 flex flex-col gap-4 lg:flex-row">
        {/* Left Column */}
        <motion.div
          className="flex-1 flex flex-col gap-4"
          variants={columnVariants("left")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {leftColumn.map(({ icon, title, description }) => (
            <motion.div key={title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <CoreSpaeialitiesCard icon={icon} title={title} description={description} />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="flex-1 flex flex-col gap-4"
          variants={columnVariants("right")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {rightColumn.map(({ icon, title, description }) => (
            <motion.div key={title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <CoreSpaeialitiesCard icon={icon} title={title} description={description} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CoreSpecialitiesSection;
