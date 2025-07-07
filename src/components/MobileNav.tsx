"use client"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { menu } from "@/content/menu"
import Button from "./Button"
import { useNavigate } from "@/utils/navigation"

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const router = useRouter()

  
  const navigate = useNavigate();
  const navigateToContact = () => {
    setIsMenuOpen(false)
    navigate("/contact")
  }

      const [isScrolled, setIsScrolled] = useState(false);
  
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

  const handleNavigation = (href:any) => {
    setIsMenuOpen(false)
    router.push(href)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setOpenDropdown(null)
  }

  const toggleDropdown = (e:any, name:any) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className={`px-8 py-6 flex justify-between items-center ${isScrolled ? "bg-foreground" : "bg-transparent"} duration-300`}>
        <div className="logo text-xl text-white tracking-widest">
          {/* <img src="/icons/devstella-logo1.svg" className="w-20" alt="" /> */}
          <Link href="/">
          <img src='/logo1.svg' className="w-32"
                alt="BizFinX79" />
          </Link>
        </div>
        <button onClick={toggleMenu} className="text-white text-2xl z-40">
          <i className={`iconoir-${isMenuOpen ? "xmark" : "menu"}`}></i>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-foreground transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="container mx-auto px-4 pt-16 h-full overflow-y-auto">
          <ul className="space-y-4">
            {menu.map((item, index) => (
              <li key={index} className="py-2">
                {item.dropdown.length > 0 ? (
                  <div>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="w-full text-left text-white text-lg font-semibold flex justify-between items-center"
                    >
                      {item.title}
                      <i
                        onClick={(e) => toggleDropdown(e, item.title)}
                        className={`iconoir-nav-arrow-down text-white text-lg transition-transform duration-300 ${openDropdown === item.title ? "rotate-180" : ""}`}
                      ></i>
                    </button>
                    <ul
                      className={`mt-2 ml-4 space-y-2 overflow-hidden transition-max-height duration-300 ease-in-out ${openDropdown === item.title ? "max-h-96" : "max-h-0"}`}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <button
                            onClick={() => handleNavigation(subItem.path)}
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                          >
                            {subItem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-white text-lg font-semibold"
                  >
                    {item.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 mb-4 flex justify-center">
          <Button
            title="Contact"
            onClick={() => {
              navigateToContact()
            }}
          />
          </div>
        </div>
      </div>
    </nav>
  )
}