import React from 'react'

interface SpecialityCardProps {
  title: string;
  description: string;
  icon: string;
}

function SpecialityCard( { title, description, icon }: SpecialityCardProps ) {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={icon} alt={title} className='w-10' />
      <h3 className="text-2xl font-semibold my-3">{title}</h3>
      <p className="text-base font-normal">{description}</p>
    </div>
  )
}

export default SpecialityCard
