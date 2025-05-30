import Hero from '@/components/Hero';
import { blogsData } from '@/content/blogs';
import { notFound } from 'next/navigation';
import React from 'react'


export async function generateStaticParams() {
  return blogsData.map(item => ({
    blogTitle: item.url,
  }));
}

async function page({ params }) {
  const { blogTitle } = params;
  const blogData = blogsData.find(item => item.url === blogTitle);
  
    if (!blogData) return notFound();
  console.log("Blog: " ,blogTitle)
  return (
    <>
      <Hero heading='blog' subheading={blogData.title} />
      <section className="max-w-4xl mx-auto py-20 px-10">
        <img src={`/images/blogs/${blogData.image}`} alt={blogData.title} className='mb-16' />
        {
          blogData.content
        }
      </section>
    </>
  )
}

export default page
