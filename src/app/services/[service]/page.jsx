
import { notFound } from 'next/navigation';
import { subServicesdata } from '@/content/ServiceSubPage';
import ServiceClient from './serviceClient';


export async function generateStaticParams() {
  return subServicesdata.map(item => ({
    service: item.url,
  }));
}

const Page = async ({ params }) => {
  const serviceData = subServicesdata.find(item => item.url === params.service);

  if (!serviceData) return notFound();


  return (
    <ServiceClient serviceData={serviceData} />
  );
};

export default Page;
