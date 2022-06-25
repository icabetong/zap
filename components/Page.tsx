import React from 'react'

type PageProps = {
  useMain?: boolean,
  children: React.ReactNode[] | React.ReactNode
}
const Page: React.FC<PageProps> = ({ children, useMain }) => {
  return React.createElement(useMain ? 'main' : 'div', 
    { 
      children: children,
      className: "relative min-h-screen h-1 text-gray-700 font-rubik"
    }
  )
}

export default Page