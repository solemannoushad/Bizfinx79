import React from 'react';
import { notFound } from 'next/navigation';
import SubServiceHero from '@/components/SubServiceHero';
import { subServicesdata } from '@/content/ServiceSubPage';

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
    secondCardTitle,
    secondCardTxt,
    coreSpecialities,
    chooseHeading,
    choosePoints
  } = serviceData;

  return (
    <div>
      <SubServiceHero txt={heroTxt} image={heroImg} title={title} />

    </div>
  );
}

export default Page;
