import { coreSpecialities } from '@/content/core-specialities'
import React from 'react'
import CoreSpaeialitiesCard from './CoreSpaeialitiesCard';

function CoreSpecialitiesSection() {
  return (
    <section className="section">
        <h1 className='text-3xl text-black font-bold'>Core Specialities</h1>
        <div className="core-specialities-cards-main my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                coreSpecialities.map((item) => {
                    const {icon, title, description} = item;
                    return(
                        <CoreSpaeialitiesCard key={title} icon={icon} title={title} description={description} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default CoreSpecialitiesSection
