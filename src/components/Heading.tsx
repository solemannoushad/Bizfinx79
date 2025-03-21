import React from 'react'

interface HeadingProps {
    title: string
}

function Heading({title}: HeadingProps) {
  return (
    <h3 className='primary-heading relative text-3xl text-black font-bold'>{title}</h3>
  )
}

export default Heading
