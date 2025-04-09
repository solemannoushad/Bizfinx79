import React from 'react'
import Heading from './Heading';

interface WhyChooseUsProps {
  chooseHeading: string;
  choosePoints: any[];
  chooseUsImage: string;
}

function WhyChooseUs({chooseHeading ,choosePoints, chooseUsImage}: WhyChooseUsProps) {
  return (
    <section className='section'>
      <div className='flex items-center justify-between flex-row-reverse'>
        <div className='w-1/2'>
          {/* <h1 className='text-4xl text-black font-bold'>{chooseHeading}</h1> */}
          <Heading title={chooseHeading} />
          <ul className='py-4'>
            {
              choosePoints.map((point) => {
                const {title , txt} = point;
                return(
                  <div key={title} className='flex flex-col'>
                    <li className='list-disc font-medium text-lg'>{title}:</li>
                    <span>{txt}</span>
                  </div>
                )
              })
            }
          </ul>
        </div>
        <div className='w-1/2'>
          <img src={`/images/${chooseUsImage}`} alt="" className='w-full h-full object-cover' />
        </div>  
      </div>
    </section>  
  )
}

export default WhyChooseUs
