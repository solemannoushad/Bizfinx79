"use client";
import React, { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`bg-white z-40 w-10 h-10 rounded-full cursor-pointer fixed right-6 flex items-center justify-center shadow-sm shadow-black hover:shadow-xl transition-all duration-300 ${
          isVisible ? "opacity-100 visible bottom-20" : "opacity-0 invisible bottom-10"
        }`}
      >
        <img
          src="/icons/angle-down-solid.svg"
          className={`w-4 transition-transform duration-300 rotate-180`}
          alt="top"
        />
      </button>
    </div>
  );
}

export default BackToTop;
