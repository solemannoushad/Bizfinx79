import BlogCard from "@/components/BlogCard";
import BlogsSection from "@/components/BlogsSection";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import { blogsData } from "@/content/blogs";
import React from "react";

function page() {
  return (
    <>
      <Hero
        heading="Blogs"
        subheading="Stay informed with the latest trends, tips, and expert insights on financial success."
      />
      <section className="section">
        <Heading title="Blogs" />
        <div className="blogs-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {blogsData.map((item, index) => {
            const { title, description, image, url } = item;
            return (
              <BlogCard
                key={index}
                title={title}
                description={description}
                image={image}
                url={url}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default page;
