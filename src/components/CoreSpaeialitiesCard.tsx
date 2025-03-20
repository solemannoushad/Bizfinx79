'use client'
import React, { useState } from 'react'

interface CoreSpecialitiesCardProps {
    icon: string;
    title: string;
    description: string;
}

function CoreSpecialitiesCard({ icon, title, description }: CoreSpecialitiesCardProps) {
    const [show, setShow] = useState(false);

    return (
        <div 
            className='flex flex-col py-3 px-6 cursor-pointer border-2 border-[#f5f5f5] rounded-4xl'
            onClick={() => setShow(!show)}
        >
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className={`img-bg-main w-12 h-12 rounded-full flex items-center justify-center ${show ? 'bg-secondary' : 'bg-[#f5f5f5]'} shadow-sm duration-300`}>
                        <img className='w-8' src={`/icons/${icon}`} alt="" />
                    </div>
                    <p className="ml-4 text-xl font-medium">{title}</p>
                </div>
                <img 
                    src="/icons/angle-down-solid.svg" 
                    className={`w-4 transition-transform duration-300 ${show ? 'rotate-180' : ''}`} 
                    alt="toggle" 
                />
            </div>

            {/* Description with Smooth Transition */}
            <div className={`overflow-hidden transition-all duration-300 ${show ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className='text-base'>{description}</p>
            </div>
        </div>
    )
}

export default CoreSpecialitiesCard;
