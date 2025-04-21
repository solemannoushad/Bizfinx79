"use client"

import { menu } from "@/content/menu"
import Link from "next/link"
import { useEffect, useState } from "react"
import Button from "./Button"
import { usePathname } from "next/navigation"
import { useNavigate } from "@/utils/navigation"

interface MenuItem {
  title: string
  path: string
  dropdown?: MenuItem[]
}

function Navbar() {
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [dropdown, setDropdown] = useState<MenuItem[]>([])
  const [secondDropdown, setSecondDropdown] = useState<MenuItem[]>([])
  const [activeDropdownItem, setActiveDropdownItem] = useState<string | null>(null)

  const pathname = usePathname()

  useEffect(() => {
    setShow(false)
    setDropdown([])
    setSecondDropdown([])
    setActiveDropdownItem(null)
  }, [pathname])

  const showDropdown = (title: string) => {
    const menuItem = menu.find((item) => item.title === title)
    if (menuItem?.dropdown && menuItem.dropdown.length > 0) {
      setDropdown(menuItem.dropdown)
      setShow(true)
      setSecondDropdown([])
      setActiveDropdownItem(null)
    } else {
      setDropdown([])
      setShow(false)
      setSecondDropdown([])
      setActiveDropdownItem(null)
    }
  }

  const showSecondDropdown = (title: string) => {
    const firstLevelItem = dropdown.find((item) => item.title === title)
    if (firstLevelItem?.dropdown && firstLevelItem.dropdown.length > 0) {
      setSecondDropdown(firstLevelItem.dropdown)
      setActiveDropdownItem(title)
    } else {
      setSecondDropdown([])
      setActiveDropdownItem(null)
    }
  }

  const hideSecondDropdown = () => {
    // Add a small delay before hiding to allow moving to the second dropdown
    setTimeout(() => {
      // Only hide if the mouse isn't over the second dropdown
      if (!document.querySelector(".second-dropdown:hover")) {
        setSecondDropdown([])
        setActiveDropdownItem(null)
      }
    }, 100)
  }

  const hideDropdown = () => {
    setShow(false)
    setSecondDropdown([])
    setActiveDropdownItem(null)
  }

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`w-screen z-40 ${isScrolled ? "bg-foreground" : "bg-transparent"} fixed`}>
      <nav
        className={`${show && "bg-foreground/90 shadow-lg backdrop-blur-lg backdrop-opacity-50 h-[300px] duration-300"} text-white w-full z-40 duration-300`}
        onMouseLeave={hideDropdown}
      >
        <div className="flex items-center justify-between px-8 py-6 w-full z-40 max-w-7xl mx-auto">
          <Link href="/">
            <img src="/logo.png" className="w-32" alt="BizFinX79" />
          </Link>
          <ul className="nav-menu flex relative">
            {menu.map(({ title, path }) => (
              <li onMouseOver={() => showDropdown(title)} className="mx-3" key={title}>
                <Link className="text-base lg:text-base hover:text-secondary duration-300" href={path}>
                  {title}
                </Link>
              </li>
            ))}
            <div
              className={`dropdown-mega w-[150%] absolute top-14 left-0 ${show && dropdown.length > 0 ? "block" : "hidden"}`}
            >
              <div className="grid grid-cols-2 gap-x-1 gap-y-3">
                {dropdown.map(({ title, path, dropdown }, index) => (
                  <li className="mx-3 relative" key={title}>
                    {/* Made the link inline and added onMouseOver and onMouseOut to the link itself */}
                    <Link
                      className="text-base lg:text-base hover:text-secondary duration-300 inline-block"
                      href={path}
                      onMouseOver={() => showSecondDropdown(title)}
                      onMouseOut={hideSecondDropdown}
                    >
                      {title}
                    </Link>
                    {/* Second level dropdown */}
                    {activeDropdownItem === title && dropdown && dropdown.length > 0 && (
                      <div
                        className={`second-dropdown absolute ${
                          // Position based on column index - right for first column, left for second column
                          index % 2 === 0 ? "left-1/2" : "right-[100%]"
                        } top-0 bg-foreground/60 shadow-lg backdrop-blur-xl backdrop-opacity-70 p-4 rounded-md w-[500px] z-50 border border-white/10`}
                        style={{
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                        }}
                        onMouseOver={() => setActiveDropdownItem(title)}
                        onMouseOut={hideSecondDropdown}
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {secondDropdown.map((item) => (
                            <Link
                              key={item.title}
                              href={item.path}
                              className="text-base hover:text-secondary duration-300"
                              onClick={hideDropdown} // Add onClick to close all dropdowns when clicked
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </div>
            </div>
          </ul>
          <Button
            title="Contact"
            onClick={() => {
              navigate("/contact")
            }}
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
