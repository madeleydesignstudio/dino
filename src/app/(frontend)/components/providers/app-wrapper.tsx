import React from 'react'

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-6xl mx-auto">{children}</div>
}

export default AppWrapper
