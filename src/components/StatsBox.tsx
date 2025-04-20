"use client";

import React, { useEffect, useState, useRef } from "react";

// Hook to count up to the target value
function useCountUp(target: number, shouldAnimate: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start = 0;
    const end = target;
    const duration = 1000; // animation duration in ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it lands on the final value
      }
    };

    requestAnimationFrame(animate);
  }, [shouldAnimate, target]);

  return count;
}


// Hook to detect when element is in view
function useInViewOnce(ref: React.RefObject<HTMLElement>) {
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenInView) {
          setHasBeenInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, hasBeenInView]);

  return hasBeenInView;
}

function StatsBox() {
  const stats = [
    { title: "Projects Delivered", stats: 500 },
    { title: "Client Satisfaction", stats: 100 },
    { title: "High Positive Reviews", stats: 400 },
    { title: "Years of Expertise", stats: 15 },
  ];

  return (
    <div className="flex flex-wrap bg-foreground text-white my-10 py-10 px-16 items-start justify-between shadow-md shadow-foreground">
      {stats.map((stat, idx) => {
        const ref = useRef<HTMLDivElement>(null);
        const inViewOnce = useInViewOnce(ref);
        const count = useCountUp(stat.stats, inViewOnce);

        return (
          <div
            key={idx}
            ref={ref}
            className="flex flex-col items-center cursor-pointer text-center group m-4"
          >
            <h1 className="text-4xl font-medium group-hover:text-secondary text-center transition-all duration-300">
              {count}
              {stat.stats >= 100 ? "+" : ""}
            </h1>
            <p className="text-lg font-light">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default StatsBox;
