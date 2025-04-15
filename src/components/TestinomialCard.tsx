import React from 'react';

interface TestimonialCardProps {
  name: string;
  comment: string;
  title?: string; // Optional: if you want to show job title or role
  avatarUrl?: string; // Optional: for profile image
}

function TestimonialCard({ name, comment, title, avatarUrl }: TestimonialCardProps) {
    return (
      <div className="w-full bg-foreground shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 borderborder-neutral-700 break-inside-avoid">
        <i className="iconoir-quote-solid text-secondary text-4xl"></i>
        <p className="text-white text-base leading-relaxed mb-4">
          {comment}
        </p>
        <div className="flex items-center gap-4 mt-4">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-base">
              {name[0]}
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-neutral-100">{name}</p>
            {title && <p className="text-xstext-neutral-400">{title}</p>}
          </div>
        </div>
      </div>
    );
  }
  

export default TestimonialCard;
