import { FC } from 'react'

type NavigationLinkProps = {
  to: string,
  name: string
}
const NavigationLink: FC<NavigationLinkProps> = ({ to, name }) => {
  return (
    <li className="my-2 px-4 py-2 w-full font-semibold text-md text-slate-700 dark:text-slate-200 rounded hover:bg-sky-100 dark:hover:bg-sky-800 hover:text-sky-500 transition-all cursor-pointer">
      <a className="w-full" href={to}>
        {name}
      </a>
    </li>
  )
}

export default NavigationLink