import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'brand';
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-headline uppercase font-bold tracking-[0.1em] transition-all duration-200 rounded-none select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };

  const variantStyles = {
    primary:
      'bg-[#1A1A1A] text-white hover:bg-[#E31E24] active:bg-[#c00014] shadow-industrial',
    brand:
      'bg-[#E31E24] text-white hover:bg-[#1A1A1A] active:bg-[#c00014] shadow-industrial',
    secondary:
      'bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white',
    outline:
      'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
