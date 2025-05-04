import { coreSpecialities } from '@/content/core-specialities'
import React from 'react'
import CoreSpaeialitiesCard from './CoreSpaeialitiesCard'
import Heading from './Heading'
import SubServiceCard from './SubServiceCard'

interface SubServiceSpecialitiesProps{
    coreSpecialities: {
        heading:string;
        specialities: any[];
    };
}

function SubServiceSpecialities({coreSpecialities}: SubServiceSpecialitiesProps) {

    const {heading, specialities} = coreSpecialities;

  // Split items into two columns manually
  const leftColumn = specialities.filter((_, index) => index % 2 === 0);
  const rightColumn = specialities.filter((_, index) => index % 2 !== 0);

  return (
    <section className="section">
      <Heading title={heading} />
      <div className="my-10 flex flex-col gap-4">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-4">
          {leftColumn.map(({  title, points, id }) => (
            <SubServiceCard key={title}  title={title} points={points} id={id} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4">
          {rightColumn.map(({  title, points, id }) => (
            <SubServiceCard key={title}  title={title} points={points} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SubServiceSpecialities;
