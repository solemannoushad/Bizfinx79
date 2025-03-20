import { blogsData } from "@/content/blogs";
import React from "react";
import BlogCard from "./BlogCard";

function BlogsSection() {
  return (
    <section className="section">
      <div className="blogs-section grid grid-cols-1 md:grid-cols-3 gap-4 mx-10">
        {blogsData.slice(0, 3).map((item, index) => {
            const { title, description, image, url } = item;
            return <BlogCard key={index} title={title} description={description} image={image} url={url} />;
        })}
      </div>
    </section>
  );
}

export default BlogsSection;
