import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <span
          className={`font-body text-label-caps uppercase tracking-[0.2em] font-bold block mb-3 ${
            dark ? 'text-[#ffb874]' : 'text-[#8c4f00]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-headline text-headline-xl md:text-display-lg-mobile lg:text-headline-xl font-bold tracking-tight uppercase leading-none ${
          dark ? 'text-white' : 'text-[#1a1c1b]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-body text-body-md md:text-body-lg mt-4 max-w-2xl leading-relaxed ${
            dark ? 'text-[#dadad8]' : 'text-[#5d3f3c]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
