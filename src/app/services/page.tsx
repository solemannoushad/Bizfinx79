import BlogsSection from '@/components/BlogsSection';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { serviceContent } from '@/content/services'
import React from 'react'

function page() {

  const logos = [
    "Quickbooks desktop",
    "Quickbooks online",
"SAP FI",
 "SAP CO", 
"Xero",
"Odoo",
"Oracle",
"Dext",
  ];
  return (
    <>
      <Hero heading='services' subheading='Best Accounting and Tax Services Online for Startups to large Businesses' />

      <section className="section">
        <div className='service-cards-main grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
          {
            serviceContent.cards.map((item) => {
              const { url, title, points } = item;
              return(
                <ServiceCard key={title} url={url} title={title} points={points} />
              )
            })
          }
        </div>
      </section>




    <div className="marquee-wrapper text-black py-6 mb-6">
      {/* TWO identical tracks side by side */}
      <div className="marquee-track">
        {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="mx-6 flex-shrink-0 mt-20">
            <p className='px-4 py-2 bg-secondary font-semibold uppercase'>{logo}</p>
          </div>
        ))}
      </div>
    </div>
      <BlogsSection />
    </>
  )
}

export default page
