"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedNotification = ({
  message = "",
  duration = 5000,
  isVisible,
  setIsVisible,
}: {
  message?: string;
  duration?: number;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isVisible) return;

    setProgress(100);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const next = prevProgress - 100 / (duration / 100);
        return next > 0 ? next : 0;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, isVisible, setIsVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-5 right-5 z-50 max-w-xs bg-neutral-900 text-white rounded-md shadow-lg p-4"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">{message}</div>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-3 text-white hover:text-secondary transition-colors"
            >
              <i className="iconoir-xmark text-xl"></i>
            </button>
          </div>

          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="h-1 bg-gradient-to-r from-secondary to-neutral-700 rounded"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedNotification;
