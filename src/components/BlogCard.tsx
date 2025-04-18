import { blogsData } from '@/content/blogs'
import Link from 'next/link'
import React from 'react'

interface BlogCardProps {
    title: string,
    description: string,
    image: string,
    url: string
}

function BlogCard({ title, description, image, url }: BlogCardProps) {
  const truncatedDescription = description.length > 200
    ? `${description.slice(0, 150)}...`
    : description;
  const truncatedTitle = title.length > 50
    ? `${title.slice(0, 50)}...`
    : title;

  return (
    <div className='bg-[#f9f9f9] shadow-sm flex flex-col rounded-md overflow-hidden'>
      <img src={image} alt={title} className='w-full h-64 object-cover' />
      <div className="blog-content my-6 px-6">
        <Link href={`/resources/blogs/${url}`} className='font-semibold text-base hover:text-secondary duration-300'>
          {truncatedTitle}
        </Link>
        <p className='mt-2 text-sm text-[#494949]'>{truncatedDescription}</p>
      </div>
      <Link href={`/resources/blogs/${url}`} className='bg-secondary mx-6 my-3 hover:bg-white hover:text-foreground border border-transparent hover:border-foreground text-white py-2 text-center font-semibold duration-300'>
        Read More
      </Link>
    </div>
  )
}

export default BlogCard
