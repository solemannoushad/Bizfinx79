import { coreSpecialities } from '@/content/core-specialities'
import React from 'react'
import CoreSpaeialitiesCard from './CoreSpaeialitiesCard';
import Heading from './Heading';

function CoreSpecialitiesSection() {
  return (
    <section className="section">
        <Heading title='Core Specialities' />
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
