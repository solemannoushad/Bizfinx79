"use client"
import { blogsData } from "@/content/blogs";
import React from "react";
import BlogCard from "./BlogCard";
import Heading from "./Heading";
import Button from "./Button";
import { useNavigate } from "@/utils/navigation";

function BlogsSection() {
  const navigate = useNavigate();
  return (
    <section className="section">
      <Heading title="Blogs" />
      <div className="blogs-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {blogsData.slice(0, 3).map((item, index) => {
            const { title, description, image, url } = item;
            return <BlogCard key={index} title={title} description={description} image={image} url={url} />;
        })}
      </div>
      <div className="flex justify-center">
        <Button title="See All" onClick={
          () => {
            navigate("/resources/blogs");
          }
        } />
      </div>
    </section>
  );
}

export default BlogsSection;
