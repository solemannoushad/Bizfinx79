"use client";

import React from "react";

function StatsBox() {
  const stats = [
    {
      title: "Projects Delivered",
      stats: "500+",
    },
    {
      title: "Client Satisfaction",
      stats: "100%",
    },
    {
      title: "High Positive Reviews",
      stats: "400+",
    },
    {
      title: "Years of Expertise",
      stats: "15+",
    },
  ];

  return (
    <div className="flex flex-wrap bg-foreground text-white my-10 py-10 px-16 items-start justify-between shadow-md shadow-foreground">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="flex flex-col items-center cursor-pointer group"
        >
          <h1 className="text-4xl font-medium group-hover:text-secondary transition-all duration-300">
            {stat.stats}
          </h1>
          <p className="text-lg font-light">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsBox;
