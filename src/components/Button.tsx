import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="relative overflow-hidden uppercase text-sm text-center my-3 font-semibold py-3 px-6 cursor-pointer bg-[#008080] text-background rounded-lg tracking-wider transition-all duration-300
      before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/50 before:skew-x-[-20deg] before:transition-all before:duration-500
      hover:before:left-[100%]"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
