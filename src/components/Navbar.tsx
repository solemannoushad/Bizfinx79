'use client'
import { menu } from '@/content/menu'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button';

// bg-foreground/90 shadow-lg backdrop-blur-lg backdrop-opacity-50 h-[300px]

interface MenuItem {
    title: string;
    path: string;
    dropdown?: MenuItem[];
}

function Navbar() {

    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState<MenuItem[]>([]);

    const showDropdown = (title: string) => {
        const menuItem = menu.find(item => item.title === title);
        if(menuItem?.dropdown && menuItem.dropdown.length > 0) {
            setDropdown(menuItem.dropdown);
            setShow(true);
        }else{
            setDropdown([]);
            setShow(false);
        }
    }

    const hideDropdown = () => {
        setShow(false);
    }

  return (
    <nav className={`${show && "bg-foreground/90 shadow-lg backdrop-blur-lg backdrop-opacity-50 h-[300px] duration-300"} text-white fixed w-full z-40 duration-300`} onMouseLeave={hideDropdown}>
        <div className='bg-foreground flex items-center justify-between px-8 py-6 w-full z-40 max-w-7xl mx-auto'>
            <div className="logo">BizFinX79</div> 
            <ul className="nav-menu flex relative">
                {
                    menu.map((item) => {
                        const {title, path, dropdown} = item
                        return(
                            <li onMouseOver={() => showDropdown(title)} className='mx-3' key={title}><Link className='text-base lg:text-base hover:text-secondary duration-300' href={path}>{title}</Link></li>
                        )
                    })
                }
                <div className={`dropdown-mega absolute top-14 left-0 ${show && dropdown.length > 0 ? 'block' : 'hidden'}`}>
                    <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
                            {dropdown.map((item) => {
                                const {title, path, dropdown} = item
                                return(
                                    <li className='mx-3' key={title}><Link className='text-base lg:text-base hover:text-secondary duration-300' href={path}>{title}</Link></li>
                                )
                            })}
                    </div>
                </div>
            </ul>
            <Button title='Contact' />
        </div>
    </nav>
  )
}

export default Navbar