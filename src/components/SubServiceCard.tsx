"use client"
import { useState, useEffect, useRef } from "react"

interface CoreSpecialitiesCardProps {
  title: string
  points: string[]
  id: string
}

function SubServiceCard({ title, points, id }: CoreSpecialitiesCardProps) {
  const [show, setShow] = useState(false)
  const [hash, setHash] = useState<string>(typeof window !== "undefined" ? window.location.hash.substring(1) : "")
  const cardRef = useRef<HTMLDivElement>(null)

  const scrollToElementWithOffset = () => {
    if (cardRef.current) {
      const yOffset = -120
      const y = cardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash.substring(1))
    }

    // Run once on mount
    updateHash()

    // Update when hash changes
    window.addEventListener("hashchange", updateHash)

    return () => {
      window.removeEventListener("hashchange", updateHash)
    }
  }, [])

  useEffect(() => {
    if (hash === id) {
      setShow(true)
      setTimeout(scrollToElementWithOffset, 100)
    } else {
      setShow(false)
    }
  }, [])

  return (
    <div
      className="flex flex-col py-3 px-6 cursor-pointer border-2 border-[#f5f5f5] rounded-4xl"
      id={id}
      ref={cardRef}
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
