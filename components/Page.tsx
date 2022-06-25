import React from 'react'

type PageProps = {
  useMain?: boolean,
  children?: React.ReactNode[] | React.ReactNode,
  className?: string
}
const Page: React.FC<PageProps> = ({ children, useMain, className }) => {
  return React.createElement(useMain ? 'main' : 'div', 
    { 
      children: children,
      className: "relative min-h-screen h-1 text-slate-800 font-work-sans".concat(className ? ` ${className}` : ""),
    }
  )
}

export default Page