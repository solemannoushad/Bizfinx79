"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { testimonialsData } from "@/content/testinomials";
import TestimonialCard from "./TestinomialCard";

function TestinomialSlider() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="my-24 flex justify-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1000}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonialsData.map((t) => {
          return (
            <>
              {t.comment.length <= 250 && (
                <SwiperSlide key={t.name}>
                  <TestimonialCard
                    name={t.name}
                    comment={t.comment}
                    fullHeight={true}
                  />
                </SwiperSlide>
              )}
            </>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TestinomialSlider;
