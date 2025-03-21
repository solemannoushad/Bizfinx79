import { targetAudienceContent } from '@/content/target-audience'
import React from 'react'
import TargetAudienceCard from './TargetAudienceCard';
import Heading from './Heading';

function TargetAudienceSection() {
  return (
    <section className="section my-10">
        <Heading title={targetAudienceContent.headline} />
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
