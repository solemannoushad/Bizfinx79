"use client";
import React from 'react';
import Button from './Button';
import { useNavigate } from '@/utils/navigation';
import { motion } from 'framer-motion';

interface TrustBadgeProps {
  title: string;
  txt: string;
  image: string;
  navigateTo?: string;
  home?: boolean;
}

// Variants
const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

function TrustBadge({ title, txt, image, navigateTo, home = false }: TrustBadgeProps) {
  const navigate = useNavigate();

  return (
    <section className="section trust-badge-section mt-10">
      <motion.div
        className="trust-badge-container w-full flex flex-col-reverse md:flex-row items-center my-10 mx-auto px-10 py-14 rounded-4xl bg-foreground text-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Text Column */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col"
          variants={leftVariants}
        >
          <p className="font-semibold text-5xl uppercase">{title}</p>
          <p className="text-lg my-2">{txt}</p>
          {navigateTo && (
            <div className="inline">
              <Button onClick={() => navigate(navigateTo)} title="let's do this" />
            </div>
          )}
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          className="w-full md:w-1/2 flex items-center px-10 relative"
          variants={rightVariants}
        >
          <img
            src={`/images/${image}`}
            alt=""
            className={`object-cover ${home ? 'md:absolute md:w-96 md:left-10 md:-bottom-32' : 'w-full h-full'}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default TrustBadge;
