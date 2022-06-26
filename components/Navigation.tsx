import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import NavigationLink from './NavigationLink'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('common')

  const onHandleMenu = () => setOpen(prev => !prev)

  const navItems = (
    <ul className="flex flex-col px-2 py-2 space-y-2 md:flex-row md:space-x-8 md:space-y-0 items-center justify-center">
      <NavigationLink to="/" name={t("navigation.home")}/>
      <NavigationLink to="/about" name={t("navigation.about")}/>
    </ul>
  )

  return (
    <nav className="page-width py-4 px-6 md:px-4 relative">
      <div>
        <div className="flex flex-row flex-wrap container items-center justify-center">
          <div className="flex-1 font-semibold text-3xl text-slate-700 dark:text-slate-200">{t("app-name")}</div>
          <div className="md:hidden">
            <button 
              type="button"
              data-collapse-toggle="nav-menu" 
              aria-controls="nav-menu"
              aria-expanded="false"
              className="inline-flex flex-col p-2 ml-3 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300" onClick={onHandleMenu}>
              <span className="sr-only">{t("button.open-menu")}</span>
              {
                open ? <XIcon className="w-6 h-6 block dark:text-slate-50"/> : <MenuIcon className="w-6 h-6 block dark:text-slate-50"/>
              }
            </button>
          </div>
          <div className="w-full hidden md:block md:w-auto">{navItems}</div>
        </div>
      </div>
      <div className={`${open ? 'block' : 'hidden'} w-full mt-4 md:hidden md:w-auto rounded bg-white shadow border z-30 dark:bg-slate-600 dark:border-slate-600`} id="nav-menu">
        {navItems}
      </div>
    </nav>
  )
}

export default Navigation