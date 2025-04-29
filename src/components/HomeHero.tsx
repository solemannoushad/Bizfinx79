"use client";
import React from "react";
import Button from "./Button";
import { useNavigate } from "@/utils/navigation";
import { motion } from "framer-motion";

function HomeHero() {
  const navigate = useNavigate();

  return (
    <section className="w-screen h-screen max-h-[800px] min-h-[700px] bg-foreground flex items-center">
      <div className="max-w-7xl flex items-center px-10 mx-auto mt-10">
        {/* Left Content */}
        <motion.div
          className="hero-content w-full md:w-1/2 flex flex-col"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.p
            className="text-white text-5xl font-semibold leading-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          >
            Navigate Your Finances with Confidence
          </motion.p>
          <motion.p
            className="text-secondary text-4xl font-semibold my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
          >
            Expert Accounting, Tax, and CFO Solutions
          </motion.p>
          <motion.div
            className="inline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.9 }}
          >
            <Button
              title="Explore Our Services"
              onClick={() => navigate("/services")}
            />
          </motion.div>
        </motion.div>

        {/* Right Video */}
        <motion.div
          className="hero-img hidden md:block md:w-1/2 px-10"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
        >
          <div className="img w-full h-[32rem] bg-transparent rounded-2xl overflow-hidden shadow-sm">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="/home-hero-bg.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeHero;
