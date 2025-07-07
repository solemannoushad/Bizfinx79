"use client";

import { menu } from "@/content/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useNavigate } from "@/utils/navigation";

interface MenuItem {
  title: string;
  path: string;
  dropdown?: MenuItem[];
}

function Navbar() {
  const navigate = useNavigate();
  const pathname = usePathname();

  // State for managing dropdowns
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState<MenuItem[]>([]);
  const [secondDropdown, setSecondDropdown] = useState<MenuItem[]>([]);
  const [activeDropdownItem, setActiveDropdownItem] = useState<string | null>(
    null
  );

  // Track if we're hovering on the second dropdown
  const [isHoveringSecondDropdown, setIsHoveringSecondDropdown] =
    useState(false);

  // Reset all dropdown states when route changes
  useEffect(() => {
    setShow(false);
    setDropdown([]);
    setSecondDropdown([]);
    setActiveDropdownItem(null);
  }, [pathname]);

  const showDropdown = (title: string) => {
    const menuItem = menu.find((item) => item.title === title);
    if (menuItem?.dropdown && menuItem.dropdown.length > 0) {
      setDropdown(menuItem.dropdown);
      setShow(true);
    } else {
      setDropdown([]);
      setShow(false);
      setSecondDropdown([]);
      setActiveDropdownItem(null);
    }
  };

  const showSecondDropdown = (title: string) => {
    const firstLevelItem = dropdown.find((item) => item.title === title);
    if (firstLevelItem?.dropdown && firstLevelItem.dropdown.length > 0) {
      setSecondDropdown(firstLevelItem.dropdown);
      setActiveDropdownItem(title);
    }
  };

  const handleFirstLevelMouseLeave = (title: string) => {
    // Only hide the second dropdown if we're not hovering it
    if (!isHoveringSecondDropdown) {
      setSecondDropdown([]);
      setActiveDropdownItem(null);
    }
  };

  const hideDropdown = () => {
    setShow(false);
    setSecondDropdown([]);
    setActiveDropdownItem(null);
    setIsHoveringSecondDropdown(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-screen z-40 ${
        isScrolled ? "bg-foreground" : "bg-transparent"
      } fixed duration-300`}
    >
      <nav
        className={`${
          show &&
          "bg-foreground/90 shadow-lg backdrop-blur-lg backdrop-opacity-50 h-[300px] duration-300"
        } text-white w-full z-40 duration-300`}
        onMouseLeave={hideDropdown}
      >
        <div className="flex items-center justify-between px-8 py-6 w-full z-40 max-w-7xl mx-auto">
          <Link href="/">
            <img src="/logo1.svg" className="w-32" alt="BizFinX79" />
          </Link>
          <ul className="nav-menu flex relative">
            {menu.map(({ title, path }) => (
              <li
                onMouseOver={() => showDropdown(title)}
                className="mx-3"
                key={title}
              >
                <Link
                  className="text-base lg:text-base hover:text-secondary duration-300"
                  href={path}
                >
                  {title}
                </Link>
              </li>
            ))}
            <div
              className={`dropdown-mega w-[150%] absolute top-14 left-0 ${
                show && dropdown.length > 0 ? "block" : "hidden"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-1 gap-y-3">
                {dropdown.map(({ title, path, dropdown }, index) => (
                  <li
                    className="mx-3 relative"
                    key={title}
                    onMouseLeave={() => handleFirstLevelMouseLeave(title)}
                  >
                    <Link
                      className="text-base lg:text-base hover:text-secondary duration-300 inline-block"
                      href={path}
                      onMouseEnter={() => showSecondDropdown(title)}
                   
                    >
                      {title}
                    </Link>

                    {/* Second level dropdown */}
                    {activeDropdownItem === title &&
                      dropdown &&
                      dropdown.length > 0 && (
                        <div
                          className={`second-dropdown absolute ${
                            index % 2 === 0 ? "left-1/2" : "right-[100%]"
                          } top-0 bg-foreground/60 shadow-lg backdrop-blur-xl backdrop-opacity-70 p-4 inline rounded-md w-[500px] z-50 border border-white/10`}
                          style={{
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                          }}
                          onMouseEnter={() =>
                            setIsHoveringSecondDropdown(true)
                          }
                          onMouseLeave={() => {
                            setIsHoveringSecondDropdown(false);
                            setSecondDropdown([]);
                            setActiveDropdownItem(null);
                          }}
                        >
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-4">
                            {secondDropdown.map((item) => (
                              <li className="list-disc" key={item.title}>
                                <Link
                                  href={item.path}
                                  className="text-base hover:text-secondary duration-300"
                                  onClick={hideDropdown}
                                  
                                >
                                  {item.title}
                                </Link>
                              </li>
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
              navigate("/contact");
            }}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;