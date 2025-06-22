import React from 'react'

interface LinePatternProps {
  className?: string
  strokeColor?: string
  strokeWidth?: number
}

const LinePattern: React.FC<LinePatternProps> = ({
  className = '',
  strokeColor = 'currentColor',
  strokeWidth = 1,
}) => {
  return (
    <svg
      width="200"
      height="500"
      viewBox="0 0 200 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vertical line - 450px tall, centered */}
      <line x1="100" y1="25" x2="100" y2="475" stroke={strokeColor} strokeWidth={strokeWidth} />

      {/* Top horizontal line - at the very top, pointing right */}
      <line x1="100" y1="25" x2="250" y2="25" stroke={strokeColor} strokeWidth={strokeWidth} />

      {/* Middle horizontal line - at 1/3 point (25 + 450/3 = 25 + 150 = 175), pointing left */}
      <line x1="100" y1="175" x2="-50" y2="175" stroke={strokeColor} strokeWidth={strokeWidth} />

      {/* Bottom horizontal line - at 2/3 point (25 + 450*2/3 = 25 + 300 = 325), pointing right */}
      <line x1="100" y1="325" x2="250" y2="325" stroke={strokeColor} strokeWidth={strokeWidth} />
    </svg>
  )
}

export default LinePattern
