import CoreSpecialitiesCard from '@/components/CoreSpaeialitiesCard';
import React from 'react'
import CFOHeader from './CfoHeader';

export default function CfoGuide({heading, description, servicesListData}: {heading: string, description: string, servicesListData: any[]}) {
  return (
    <div>
      <CFOHeader heading={heading}
       description={description}/>
        <div className="core-specialities-cards-main my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                servicesListData.map((item) => {
                    const {icon, title, description} = item;
                    return(
                        <CoreSpecialitiesCard key={title} icon={icon} title={title} description={description} />
                    )
                })
            }
        </div>
    </div>
  )
}
