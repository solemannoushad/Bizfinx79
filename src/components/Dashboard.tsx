import React from 'react'
import Heading from './Heading'
import { dashboardData } from '@/content/dashboards'

function Dashboard() {
  return (
    <section className="section">
        {
            dashboardData.map((dashboard) => {
                const {heading, subheading, images} = dashboard;
                return(
                    <div key={heading}>
                        <div className='my-10'>
                            <Heading title={heading} />
                            <p className='text-[#616161] my-8 md:pr-20 text-justify leading-7'>{subheading}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                images.map((image, index) => (
                                    <div key={index} className="w-full rounded-2xl overflow-hidden shadow-sm">
                                        <img
                                            className="w-full h-full object-fill"
                                            src={`/images/dashboard/${image}`}
                                            alt="BizFinX79"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            })
        }
    </section>
  )
}

export default Dashboard
