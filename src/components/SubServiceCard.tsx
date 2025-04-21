'use client'
import React, { useState, useEffect } from 'react'

interface CoreSpecialitiesCardProps {
    title: string;
    points: string[];
    id: string;
}

function SubServiceCard({ title, points, id }: CoreSpecialitiesCardProps) {
    const [show, setShow] = useState(false);

    // Check if the card is the one mentioned in the URL hash and open it automatically
    useEffect(() => {
        if (window.location.hash === `#${id}`) {
            setShow(true); // Open the card if it matches the hash in the URL
        }
    }, [id]);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div 
            className='flex flex-col py-3 px-6 cursor-pointer border-2 border-[#f5f5f5] rounded-4xl'
            onClick={handleClick}
            id={id}
        >
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
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
                {
                    points.map((point, index) => (
                        <li key={index} className='text-base ml-4'>{point}</li>
                    ))
                }
            </div>
        </div>
    )
}

export default SubServiceCard;
