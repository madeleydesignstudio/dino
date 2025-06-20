import React from 'react'

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-5xl mx-auto">{children}</div>
}

export default AppWrapper
