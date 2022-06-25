import { FC } from 'react'

type NavigationLinkProps = {
  to: string,
  name: string
}
const NavigationLink: FC<NavigationLinkProps> = ({ to, name }) => {
  return (
    <li className="mx-2 font-medium text-lg text-slate-700">
      <a href={to}>
        {name}
      </a>
    </li>
  )
}

export default NavigationLink