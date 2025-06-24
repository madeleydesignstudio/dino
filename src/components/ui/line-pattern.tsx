import type React from 'react';

interface LinePatternProps {
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const LinePattern: React.FC<LinePatternProps> = ({
  className = '',
  strokeColor = 'currentColor',
  strokeWidth = 1,
}) => {
  return (
    <svg
      className={className}
      fill="none"
      height="500"
      viewBox="0 0 200 500"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vertical line - 450px tall, centered */}
      <line
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        x1="100"
        x2="100"
        y1="25"
        y2="475"
      />

      {/* Top horizontal line - at the very top, pointing right */}
      <line
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        x1="100"
        x2="250"
        y1="25"
        y2="25"
      />

      {/* Middle horizontal line - at 1/3 point (25 + 450/3 = 25 + 150 = 175), pointing left */}
      <line
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        x1="100"
        x2="-50"
        y1="175"
        y2="175"
      />

      {/* Bottom horizontal line - at 2/3 point (25 + 450*2/3 = 25 + 300 = 325), pointing right */}
      <line
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        x1="100"
        x2="250"
        y1="325"
        y2="325"
      />
    </svg>
  );
};

export default LinePattern;
