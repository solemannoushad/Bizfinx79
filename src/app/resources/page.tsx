import BlogsSection from '@/components/BlogsSection'
import Dashboard from '@/components/Dashboard'
import Hero from '@/components/Hero'
import TestinomialSection from '@/components/TestinomialSection'
import React from 'react'

function page() {
  return (
    <>
        <Hero heading="Resources" subheading='Explore expert insights, success stories, and financial strategies to empower your journey.' />
        <BlogsSection />
        <TestinomialSection />
    </>
  )
}

export default page
