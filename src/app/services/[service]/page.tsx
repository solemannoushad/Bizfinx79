import React from 'react';
import { notFound } from 'next/navigation';
import SubServiceHero from '@/components/SubServiceHero';
import { subServicesdata } from '@/content/ServiceSubPage';
import TrustBadge from '@/components/TrustBadge';
import SubServiceSpecialities from '@/components/SubServiceSpecialities';
import WhyChooseUs from '@/components/WhyChooseUs';

interface Props {
  params: { service: string }
}

function Page({ params }: Props) {
  const { service } = params;

  const serviceData = subServicesdata.find(item => item.url === service);

  if (!serviceData) return notFound();

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
    </div>
  );
}

export default Page;
