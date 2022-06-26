import React from 'react'

type ContainerProps = {
  className?: string,
  children?: React.ReactNode | React.ReactNode[]
}
const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return React.createElement('div', { 
    className: "".concat(` ${className}`),
    children: children
  })
} 

export default Container