import React from 'react'

function BlogText({text}: {text: string}) {
  return (
    <p className='py-4'>
        {text}
    </p>
  )
}

export default BlogText
