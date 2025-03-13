import { targetAudienceContent } from '@/content/target-audience'
import React from 'react'
import TargetAudienceCard from './TargetAudienceCard';

function TargetAudienceSection() {
  return (
    <section className="section my-10">
        <h3 className='text-3xl text-black font-bold'>{targetAudienceContent.headline}</h3>
        <div className="target-audience-cards-main grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
            {
                targetAudienceContent.cards.map((item) => {
                    const { title, description, icon, bg, color } = item;
                    return(
                        <TargetAudienceCard key={title} title={title} description={description} icon={icon} bg={bg} color={color} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default TargetAudienceSection
