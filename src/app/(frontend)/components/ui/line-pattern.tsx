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
      height="400"
      viewBox="0 0 200 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vertical line - 350px tall, centered */}
      <line x1="100" y1="25" x2="100" y2="375" stroke={strokeColor} strokeWidth={strokeWidth} />

      {/* Top horizontal line - going right */}
      <line x1="100" y1="75" x2="250" y2="75" stroke={strokeColor} strokeWidth={strokeWidth} />

      {/* Middle horizontal line - going left */}
      <line x1="100" y1="200" x2="-50" y2="200" stroke={strokeColor} strokeWidth={strokeWidth} />

      {/* Bottom horizontal line - going right */}
      <line x1="100" y1="325" x2="250" y2="325" stroke={strokeColor} strokeWidth={strokeWidth} />
    </svg>
  )
}

export default LinePattern
