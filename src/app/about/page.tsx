import BlogsSection from '@/components/BlogsSection'
import Heading from '@/components/Heading'
import StatsBox from '@/components/StatsBox'
import React from 'react'

function page() {
  return (
    <>
        <section className="w-full h-screen flex items-center justify-center bg-foreground">
            <h1 className='text-4xl uppercase text-white font-semibold text-center'>About <span className='text-secondary'>Company</span></h1>
        </section>
        <div className="about-content section">
            <div className='my-8'>
                <Heading title="About Us and Mission" />
                <p className='text-[#616161] my-4'>With over 10 years in the market, the company aims to serve clients globally, create jobs, foster connections, and build financial stability. The innovative approach combines advanced technology with expert human support, aiming to become a household name in financial services. This section builds trust by highlighting experience, commitment to client empowerment, and community impact.</p>
            </div>

            <div className='my-8'>
                <Heading title="Company History" />
                <p className='text-[#616161] my-4'>With over 13 years of experience, BizFinx79 has been a trusted partner in financial success.</p>
            </div>

            <div className='my-8'>
                <Heading title="Mission and Vision" />
                <p className='text-[#616161] my-4'>Our mission is to provide financial solutions that are not only accurate and reliable but also personalized to meet your unique needs. We aim to be a global leader in financial services, creating jobs and fostering connections worldwide.</p>
            </div>

            <div className='my-8'>
                <Heading title="Team Introduction" />
                <p className='text-[#616161] my-4'>Our team consists of experienced financial experts, each bringing a wealth of knowledge and skill to the table, from accountants to tax specialists, business advisors to technology specialists.</p>
            </div>

            <div className='my-8'>
                <Heading title="Global Reach" />
                <p className='text-[#616161] my-4'>With clients across the globe, BizFinx79 is proud to serve businesses and individuals from various industries and regions, offering tailored solutions that meet the unique needs of each market.</p>
            </div>

            <div className='my-8'>
                <Heading title="Commitment to Community" />
                <p className='text-[#616161] my-4'>At BizFinx79, we believe in giving back to the community. We're proud to create jobs and foster connections worldwide, contributing to financial stability and growth in the markets we serve.</p>
            </div>
        </div>
        <section className="section">
            <Heading title='Why Choose Us' />
            <StatsBox />
        </section>
        <BlogsSection />
    </>
  )
}

export default page
