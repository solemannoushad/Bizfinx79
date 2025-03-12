import { menu } from '@/content/menu'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex items-center justify-between px-8 py-6 bg-foreground text-white fixed w-full z-40'>
        <div className="logo">BizFinX79</div> 
        <ul className="nav-menu flex">
            {
                menu.map((item) => {
                    const {title, path, dropdown} = item
                    return(
                        <li className='mx-3' key={title}><a className='text-base lg:text-lg' href={path}>{title}</a></li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default Navbar