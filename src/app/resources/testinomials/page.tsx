import Hero from '@/components/Hero'
import TestinomialSection from '@/components/TestinomialSection'
import React from 'react'

function page() {
  return (
    <div>
      <Hero 
        heading="Testimonials"
        subheading="Discover what our clients have to say about their journey with us, real experiences, trusted insights, and impactful financial results."
      />
      <TestinomialSection />
    </div>
  )
}

export default page
