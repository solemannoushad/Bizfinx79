import React from 'react'
import Heading from './Heading'
import { teamData } from '@/content/team'

function Team() {
  return (
    <div className='section'>
      <Heading title='Meet Our Founders' />
      <div className='team-main flex flex-col gap-16 py-10'>
        {
            teamData.map((data, index) => {
                const {img, name, title, description} = data;
                return(
                    <div className={`team-card flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-16 items-center justify-center`} key={name}>
                        <div className='team-img w-[50%] h-[550px] rounded-lg shadow-lg shadow-black overflow-hidden'>
                            <img className="w-full h-full object-cover" src={`/images/${img}`} alt={name} />
                        </div>
                        <div className="w-1/2 flex flex-col gap-3">
                            <h3 className='text-4xl font-medium'>{name}</h3>
                            <h4 className='text-3xl font-normal'>{title}</h4>
                            <p className="text-justify">{description}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Team
