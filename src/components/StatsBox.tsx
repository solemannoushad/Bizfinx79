"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { title: "Projects Delivered", stats: "500+" },
  { title: "Client Satisfaction", stats: "100%" },
  { title: "High Positive Reviews", stats: "400+" },
  { title: "Years of Expertise", stats: "15+" },
];

const parseStat = (stat: string) => {
  const match = stat.match(/(\d+)(.*)/);
  return {
    number: parseInt(match?.[1] || "0", 10),
    suffix: match?.[2] || "",
  };
};

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCount = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    let current = 0;
    const step = Math.ceil(value / 50);
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 20);
  };

  return (
    <motion.h1
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      onViewportEnter={animateCount}
      className="text-4xl font-medium group-hover:text-secondary text-center transition-all duration-300"
    >
      {count}
      {suffix}
    </motion.h1>
  );
}

function StatsBox() {
  return (
    <div className="flex flex-wrap bg-foreground text-white my-10 py-10 px-16 items-start justify-between shadow-md shadow-foreground">
      {stats.map(({ title, stats }) => {
        const { number, suffix } = parseStat(stats);
        return (
          <div
            key={title}
            className="flex flex-col items-center cursor-pointer text-center group"
          >
            <AnimatedStat value={number} suffix={suffix} />
            <p className="text-lg font-light">{title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default StatsBox;
