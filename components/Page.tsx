import React from 'react'

type PageProps = {
  children?: React.ReactNode[] | React.ReactNode,
  className?: string
}
const Page: React.FC<PageProps> = ({ children,className }) => {
  return React.createElement('div', 
    { 
      children: children,
      className: "relative min-h-screen text-slate-800 font-open-sans".concat(className ? ` ${className}` : ""),
    }
  )
}

export default Page