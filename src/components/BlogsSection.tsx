"use client";
import { blogsData } from "@/content/blogs";
import React from "react";
import BlogCard from "./BlogCard";
import Heading from "./Heading";
import Button from "./Button";
import { useNavigate } from "@/utils/navigation";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function BlogsSection() {
  const navigate = useNavigate();

  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Heading title="Blogs" />
      </motion.div>

      <motion.div
        className="blogs-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {blogsData.slice(0, 3).map((item, index) => {
          const { title, description, image, url } = item;
          return (
            <motion.div key={index} variants={cardVariants}>
              <BlogCard
                title={title}
                description={description}
                image={image}
                url={url}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Button
          title="Explore More"
          onClick={() => {
            navigate("/resources/blogs");
          }}
        />
      </motion.div>
    </section>
  );
}

export default BlogsSection;
