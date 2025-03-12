import React from 'react'

interface ButtonProps {
  title: string;
  onClick: () => void;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="primary-button uppercase text-center my-3 font-semibold p-5 rounded-sm cursor-pointer bg-[#008080] text-background hover:scale-105 duration-300 ease-in" onClick={onClick}>
      {title}
    </button>
  );
}

export default Button
