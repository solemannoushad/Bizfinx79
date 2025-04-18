"use client";
import React from "react";
import Button from "./Button";

interface SubServiceHeroProps {
    txt: string,
    image: string,
    title: string
}

function SubServiceHero({txt, image, title}:SubServiceHeroProps) {
  return (
    <section className="w-screen h-screen max-h-[800px] min-h-[700px] bg-foreground flex items-center">
      <div className="max-w-7xl flex items-center px-10 mx-auto mt-10">
        <div className="hero-content w-full md:w-1/2 flex flex-col">
            <h1 className="uppercase text-2xl text-secondary">{title}</h1>
          <p className="text-white text-xl font-normal my-4">
            {txt}
          </p>
          <div className="inline">
            <Button title="Explore Our Services" onClick={() => {}} />
          </div>
        </div>
        <div className="hero-img hidden md:block md:w-1/2 px-10">
          <div className="img w-full h-[32rem] bg-transparent rounded-2xl overflow-hidden shadow-sm">
            <img
              className="w-full h-full object-cover"
              src={`/images/${image}`}
              alt="BizFinX79"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubServiceHero;
