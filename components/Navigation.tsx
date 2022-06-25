import { useTranslation } from "next-i18next"
import NavigationLink from "./NavigationLink"

const Navigation = () => {
  const { t } = useTranslation('common')

  return (
    <nav className="flex flex-row py-4 px-6 md:px-4">
      <div className="flex-1 font-semibold text-3xl text-slate-700">{t("app-name")}</div>
      <ul className="flex flex-row items-center justify-center">
        <NavigationLink to="/about" name={t("navigation.about")}/>
      </ul>
    </nav>
  )
}

export default Navigation