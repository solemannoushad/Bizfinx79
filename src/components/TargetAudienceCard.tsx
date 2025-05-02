import React from 'react'

interface TargetAudienceCardProps {
    title: string,
    description: string,
    icon: string,
    bg: string,
    color: string
}

function TargetAudienceCard({title, description, icon, bg, color}: TargetAudienceCardProps) {
  return (
    <div className="max-w-[34rem] h-full py-16 px-8 rounded-4xl shadow-sm hover:shadow-xl cursor-pointer duration-300" style={{ backgroundColor: bg, color: color }}>
      <div className="icon">
        <img className='w-12 h-10 mb-3' src={`/icons/${icon}`} alt="" />
      </div>
      <h1 className='text-2xl font-semibold my-3'>{title}</h1>
      <p className='text-base'>{description}</p>
    </div>
  )
}

export default TargetAudienceCard
