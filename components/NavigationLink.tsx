import React from 'react'
import Link from 'next/link'

type NavigationLinkProps = {
  to: string,
  name: string
}
const NavigationLink: React.FC<NavigationLinkProps> = ({ to, name }) => {
  return (
    <li className="my-2 px-4 py-2 w-full font-semibold text-md text-slate-700 dark:text-slate-200 rounded hover:bg-sky-100 dark:hover:bg-sky-800 hover:text-sky-500 transition-all cursor-pointer">
      <Link href={to}> 
        <a className="w-full">{name}</a>
      </Link>
    </li>
  )
}

export default NavigationLink