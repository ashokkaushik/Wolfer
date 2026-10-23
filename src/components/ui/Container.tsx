import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  as: Component = 'div',
  className = '',
  ...props
}) => {
  return (
    <Component
      className={`w-full max-w-[1920px] mx-auto px-margin-mobile md:px-margin-desktop ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
