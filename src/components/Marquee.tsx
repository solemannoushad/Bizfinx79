import React from 'react'

function Marquee() {

    const logos = [
        '/logos/abp.png',
        '/logos/ahm.png',
        '/logos/ca.png',
        '/logos/ccb.png',
        '/logos/devstella.jpg',
        '/logos/mls.png',
        '/logos/softinz.png',
      ];

  return (
    <div className=''>
      <div className="marquee-wrapper text-black py-6 mb-10">
        {/* TWO identical tracks side by side */}
        <div className="marquee-track-logos">
          {[
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
            ...logos,
          ].map((logo, index) => (
            <div key={index} className="mx-10 flex-shrink-0 mt-20 rounded-lg overflow-hidden">
              <img
              src={logo}
              alt={`logo-${index}`}
              className="h-20 object-contain"
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
