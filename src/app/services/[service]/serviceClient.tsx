import BlogsSection from '@/components/BlogsSection';
import SubServiceHero from '@/components/SubServiceHero';
import SubServiceSpecialities from '@/components/SubServiceSpecialities';
import TrustBadge from '@/components/TrustBadge';
import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react'

interface ServiceClientProps {
    serviceData: any
}

function ServiceClient({serviceData}: ServiceClientProps) {

    const {
        title,
        heroTxt,
        heroImg,
        firstCardTitle,
        firstCardTxt,
        firstCardImage,
        secondCardTitle,
        secondCardTxt,
        coreSpecialities,
        chooseHeading,
        choosePoints,
        chooseUsImage
      } = serviceData;

  return (
    <div>
          <SubServiceHero txt={heroTxt} image={heroImg} title={title} />
          <TrustBadge title={firstCardTitle} txt={firstCardTxt} image={firstCardImage} />
          <section className='py-20 px-10 flex flex-col items-center max-w-3xl mx-auto gap-9'>
            <h1 className="text-5xl text-black font-bold text-center">{secondCardTitle}</h1>
            <p className="text-center text-lg">{secondCardTxt}</p>
          </section>
          <SubServiceSpecialities coreSpecialities={coreSpecialities} />
          <WhyChooseUs chooseHeading={chooseHeading} choosePoints={choosePoints} chooseUsImage={chooseUsImage} />
          
          <BlogsSection />
        </div>
  )
}

export default ServiceClient
