import HomeHero from '@/components/HomeHero'
import React from 'react'
import ServiceHero from '../components/ServiceHero'
import CfoGuide from '../components/CfoGuide'
import ServiceTemplateHighlight from '../components/ServiceTemplateHiglight'
import CFOServicesSection from '../components/cfo-services-section'
import { subServicesdata } from '@/content/ServiceSubPage'

function page() {
  
  return (
    <div>
      <ServiceHero heading={subServicesdata[0].heroHeading} subheading={subServicesdata[0].heroSubHeading} />
      <ServiceTemplateHighlight description={subServicesdata[0].subcardSub} heading={subServicesdata[0].subcardHeading}/>
      <CfoGuide heading={subServicesdata[0].CardTextHeading}  description={subServicesdata[0].cardTextSub} servicesListData={subServicesdata[0].specialServicesList} />
      <CFOServicesSection
        heading="Why Opt for Outsourced CFO Services?"
        description="The value of CFO advisory services is undeniable. A fractional CFO is pivotal for business longevity, from strategizing growth to organizing finances. Outsourcing these services offers added advantages"
        bulletPoints={[
          "Crystal-clear financial insights for audit or fundraising readiness.",
          "Enhanced efficiency with top-tier accounting or ERP solutions.",
          "Peace of mind with ensured compliance, immaculate books, and up-to-date financials.",
        ]}
        conclusion="Outsourced CFO Services integrate seamlessly into your business model and budget. Entrust your CFO responsibilities to indinero."
        speechBubbleTitle="Expert management"
        speechBubbleText="Outsourced CFO services offer growth"
        phoneImageUrl="/placeholder.svg"
        phoneImageAlt="Purple telephone illustration"
        phoneImageWidth={200}
        phoneImageHeight={300}
        backgroundColor="bg-yellow-300"
        accentColor="text-purple-700"
        textColor="text-purple-950"
      />
      
    </div>
  )
}

export default page
