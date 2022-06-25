import { FC } from 'react'

type NavigationLinkProps = {
  to: string,
  name: string
}
const NavigationLink: FC<NavigationLinkProps> = ({ to, name }) => {
  return (
    <li>
      <a href={to}>
        {name}
      </a>
    </li>
  )
}

export default NavigationLink