import React from 'react'
import { speciality } from '@/content/speciality'
import SpecialityCard from './SpecialityCard';

function SpecialitiesSection() {
  return (
    <section className="section">
        <div className="speciality-section grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 ">
            {
                speciality.map((data) => {
                    const {id , title, description, icon} = data;
                    return(
                        <SpecialityCard key={id} title={title} description={description} icon={icon} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default SpecialitiesSection
