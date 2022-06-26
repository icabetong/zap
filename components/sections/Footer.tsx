import { useTranslation } from "next-i18next"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="page-width flex flex-col items-center justify-center pt-12 px-4">
        <div className="text-2xl font-semibold mb-4">{t("app-name")}</div>
        <div className="inline-flex gap-4 flex-rows items-center justify-center">
          <a href="/">{t("navigation.home")}</a>
          <a href="/about">{t("navigation.about")}</a>
          <a href="/about#terms">{t("navigation.terms")}</a>
          <a href="/about#faq">{t("navigation.faq")}</a>
        </div>
        <div className="pt-12 pb-8 md:pt-8 text-center text-sm">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  )
}

export default Footer