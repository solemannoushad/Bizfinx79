"use client";
import React from "react";
import Button from "./Button";
import { useNavigate } from "@/utils/navigation";

function HomeHero() {

  const navigate = useNavigate();

  return (
    <section className="w-screen h-screen max-h-[800px] min-h-[700px] bg-foreground flex items-center">
      <div className="max-w-7xl flex items-center px-10 mx-auto mt-10">
        <div className="hero-content w-full md:w-1/2 flex flex-col">
          <p className="text-white text-5xl font-semibold leading-14">
            Navigate Your Finances with Confidence
          </p>
          <p className="text-secondary text-4xl font-semibold my-4">
            Expert Accounting, Tax, and CFO Solutions
          </p>
          <div className="inline">
            <Button title="Explore Our Services" onClick={() => {navigate("/services")}} />
          </div>
        </div>
        <div className="hero-img hidden md:block md:w-1/2 px-10">
          <div className="img w-full h-[32rem] bg-transparent rounded-2xl overflow-hidden shadow-sm">
            <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
