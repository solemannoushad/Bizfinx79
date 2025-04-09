import { coreSpecialities } from '@/content/core-specialities'
import React from 'react'
import CoreSpaeialitiesCard from './CoreSpaeialitiesCard'
import Heading from './Heading'

function CoreSpecialitiesSection() {
  // Split items into two columns manually
  const leftColumn = coreSpecialities.filter((_, index) => index % 2 === 0);
  const rightColumn = coreSpecialities.filter((_, index) => index % 2 !== 0);

  return (
    <section className="section">
      <Heading title="Core Specialities" />
      <div className="my-10 flex flex-col gap-4 lg:flex-row">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-4">
          {leftColumn.map(({ icon, title, description }) => (
            <CoreSpaeialitiesCard key={title} icon={icon} title={title} description={description} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4">
          {rightColumn.map(({ icon, title, description }) => (
            <CoreSpaeialitiesCard key={title} icon={icon} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreSpecialitiesSection;
