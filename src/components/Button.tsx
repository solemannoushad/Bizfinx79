import React from 'react'

interface ButtonProps {
  title: string;
  onClick: () => void;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="primary-button text-lg text-center my-3 font-semibold py-3 px-6 tracking-wider cursor-pointer bg-[#008080] text-background" onClick={onClick}>
      {title}
    </button>
  );
}

export default Button
