"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useState, useEffect, useRef } from "react"

interface CoreSpecialitiesCardProps {
  title: string
  points: string[]
  id: string
}

function SubServiceCard({ title, points, id }: CoreSpecialitiesCardProps) {
  const [show, setShow] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

      const pathname = usePathname();
      const searchParams = useSearchParams();
      const [hash, setHash] = useState("");
      
      // Update hash when URL changes
      useEffect(() => {
          const updateHash = () => {
              // Get hash directly from window since Next.js router doesn't track hash changes
              const newHash = window.location.hash.substring(1);
              console.log("Hash updated to:", newHash);
              setHash(newHash);
          };
          
          updateHash();
          window.addEventListener("hashchange", updateHash);
          return () => window.removeEventListener("hashchange", updateHash);
      }, [pathname, searchParams]); // Re-run when route changes

  const scrollToElementWithOffset = () => {
    if (cardRef.current) {
      const yOffset = -120
      const y = cardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (hash === id) {
      setShow(true)
      setTimeout(scrollToElementWithOffset, 100)
    }
  }, [hash, id])

  const handleToggle = () => {
    setShow((prev) => !prev)
  }

  return (
    <div
      className="flex flex-col py-3 px-6 cursor-pointer border-2 border-[#f5f5f5] rounded-4xl"
      id={id}
      ref={cardRef}
      onClick={handleToggle} // ✅ Toggle manually
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="ml-4 text-xl font-medium">{title}</p>
        </div>
        <img
          src="/icons/angle-down-solid.svg"
          className={`w-4 transition-transform duration-300 ${show ? "rotate-180" : ""}`}
          alt="toggle"
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          show ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        {points.map((point, index) => (
          <li key={index} className="text-base ml-4">
            {point}
          </li>
        ))}
      </div>
    </div>
  )
}

export default SubServiceCard
