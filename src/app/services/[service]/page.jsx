
import { notFound } from 'next/navigation';
import { subServicesdata } from '@/content/ServiceSubPage';
import ServiceClient from './serviceClient';
import { Suspense } from 'react';


export async function generateStaticParams() {
  return subServicesdata.map(item => ({
    service: item.url,
  }));
}

const Page = async ({ params }) => {
  const serviceData = subServicesdata.find(item => item.url === params.service);

  if (!serviceData) return notFound();


  return (
    <Suspense fallback={<div></div>}>
      <ServiceClient serviceData={serviceData} />
    </Suspense>
  );
};

export default Page;
