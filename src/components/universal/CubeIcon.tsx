import React from 'react';

interface CubeIconProps {
  className?: string;
  size?: number;
  strokeColor?: string;
}

export const CubeIcon: React.FC<CubeIconProps> = ({
  className = '',
  size = 80,
  strokeColor = '#D9E0C1'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top face */}
      <path
        d="M20 35 L50 20 L80 35 L50 50 Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Left face */}
      <path
        d="M20 35 L20 65 L50 80 L50 50 Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Right face */}
      <path
        d="M50 50 L50 80 L80 65 L80 35 Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};
