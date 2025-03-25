import BlogsSection from '@/components/BlogsSection'
import Hero from '@/components/Hero'
import React from 'react'

function page() {
  return (
    <>
        <Hero heading="Resources" subheading='Explore expert insights, success stories, and financial strategies to empower your journey.' />
        <BlogsSection />
    </>
  )
}

export default page
