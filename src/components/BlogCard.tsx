import { blogsData } from '@/content/blogs'
import React from 'react'

interface BlogCardProps {
    title: string,
    description: string,
    image: string,
    url: string
}
function BlogCard({title, description, image, url}: BlogCardProps) {
  return (
    <div className='bg-[#f9f9f9] flex flex-col rounded-md overflow-hidden'>
        <img src={image} alt={title} className='w-full h-64 object-cover' />
        <div className="blog-content my-6 px-6">
            <h1 className='font-semibold text-base'>{title}</h1>
            <p className='mt-2 text-sm text-[#494949]'>{description}</p>
        </div>
        <hr className='border-[.5px] border-[#878787] w-[90%] mx-auto mb-5' />
    </div>
  )
}

export default BlogCard
