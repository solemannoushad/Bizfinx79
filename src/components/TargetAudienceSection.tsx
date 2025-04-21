"use client";
import { targetAudienceContent } from '@/content/target-audience';
import React from 'react';
import TargetAudienceCard from './TargetAudienceCard';
import Heading from './Heading';
import { motion } from 'framer-motion';

// Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

function TargetAudienceSection() {
  return (
    <section className="section my-10">
      {/* Heading enters when in view */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // triggers only once, 20% visible
      >
        <Heading title={targetAudienceContent.headline} />
      </motion.div>

      {/* Cards enter when in view */}
      <motion.div
        className="target-audience-cards-main grid grid-cols-1 md:grid-cols-2 gap-6 py-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {targetAudienceContent.cards.map((item) => (
          <motion.div key={item.title} variants={cardVariants}>
            <TargetAudienceCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              bg={item.bg}
              color={item.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TargetAudienceSection;
