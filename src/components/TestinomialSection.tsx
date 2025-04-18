"use client"
import React from 'react'
import Heading from './Heading';
import { useNavigate } from '@/utils/navigation';
import TestinomialCard from './TestinomialCard';
import {testimonialsData} from "@/content/testinomials"

function TestinomialSection() {
    const navigate = useNavigate();
  return (
    <section className="section">
      <Heading title="Testinomials" />
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 my-10">
  {
    testimonialsData.map((data, index) => {
      const { name, comment } = data;
      return (
        <div key={index} className="break-inside-avoid">
          <TestinomialCard name={name} comment={comment} />
        </div>
      )
    })
  }
</div>

    </section>
  )
}

export default TestinomialSection
