import BlogsSection from '@/components/BlogsSection'
import Dashboard from '@/components/Dashboard'
import Heading from '@/components/Heading'
import Hero from '@/components/Hero'
import StatsBox from '@/components/StatsBox'
import TestinomialSlider from '@/components/TestinomialSlider'
import React from 'react'

function page() {
  return (
    <>
        <Hero heading='About' subheading="BizFinx79 crafts innovative, integrity-driven financial solutions to secure your future with confidence." />
        <div className="about-content section">
            <div className='my-10'>
                <Heading title="About Us and Mission" />
                <p className='text-[#616161] my-8 md:pr-20 text-justify leading-7'>With over 10 years in the market, the company aims to serve clients globally, create jobs, foster connections, and build financial stability. The innovative approach combines advanced technology with expert human support, aiming to become a household name in financial services. This section builds trust by highlighting experience, commitment to client empowerment, and community impact.</p>
            </div>

            <div className='my-10'>
                <Heading title="Company History" />
                <p className='text-[#616161] my-8 md:pr-20 text-justify leading-7'>With over 13 years of experience, BizFinx79 has been a trusted partner in financial success.</p>
            </div>

            <div className='my-10'>
                <Heading title="Mission and Vision" />
                <p className='text-[#616161] my-8 md:pr-20 text-justify leading-7'>Our mission is to provide financial solutions that are not only accurate and reliable but also personalized to meet your unique needs. We aim to be a global leader in financial services, creating jobs and fostering connections worldwide.</p>
            </div>

            <div className='my-10'>
                <Heading title="Team Introduction" />
                <p className='text-[#616161] my-8 md:pr-20 text-justify leading-7'>Our team consists of experienced financial experts, each bringing a wealth of knowledge and skill to the table, from accountants to tax specialists, business advisors to technology specialists.</p>
            </div>

            <div className='my-10'>
                <Heading title="Global Reach" />
                <p className='text-[#616161] my-8 md:pr-20 text-justify leading-7'>With clients across the globe, BizFinx79 is proud to serve businesses and individuals from various industries and regions, offering tailored solutions that meet the unique needs of each market.</p>
            </div>

            <div className='my-10'>
                <Heading title="Commitment to Community" />
                <p className='text-[#616161] my-8 md:pr-20 text-justify leading-7'>At BizFinx79, we believe in giving back to the community. We're proud to create jobs and foster connections worldwide, contributing to financial stability and growth in the markets we serve.</p>
            </div>
            <Heading title='Why Choose Us' />
            <StatsBox />
        </div>
        <Dashboard />
        <section className="section">
            <Heading title="Testimonials" />
        <TestinomialSlider />
        </section>
        <BlogsSection />
    </>
  )
}

export default page
