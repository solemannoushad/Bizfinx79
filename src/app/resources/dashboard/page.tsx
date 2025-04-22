import Dashboard from '@/components/Dashboard'
import Hero from '@/components/Hero'
import React from 'react'

function page() {
  return (
    <div>
      <Hero heading="Dashboard" subheading="Track your progress and manage your finances with ease." />
      <Dashboard />
    </div>
  )
}

export default page
