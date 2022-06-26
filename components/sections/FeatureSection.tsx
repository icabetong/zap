import { useTranslation } from 'next-i18next'
import { FingerPrintIcon, LightBulbIcon, CashIcon } from '@heroicons/react/outline'

const FeatureSection = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-white text-gray-700 py-16 flex flex-cols items-center justify-center dark:bg-slate-700">
      <div className="inline-flex flex-col md:flex-row gap-4">
        <div className="feature-card">
          <div className="mb-4 bg-sky-100 p-3 rounded-full dark:bg-sky-800">
            <FingerPrintIcon className="w-12 h-12 text-sky-500"/>
          </div>
          <div className="feature-title">{t("features.private-header")}</div>
          <p className="feature-desc">{t("features.private-summary")}</p>
        </div>
        <div className="feature-card">
          <div className="mb-4 bg-sky-100 p-3 rounded-full dark:bg-sky-800">
            <LightBulbIcon className="w-12 h-12 text-sky-500"/>
          </div>
          <div className="feature-title">{t("features.simple-header")}</div>
          <p className="feature-desc">{t("features.simple-summary")}</p>
        </div>
        <div className="feature-card">
          <div className="mb-4 bg-sky-100 p-3 rounded-full dark:bg-sky-800">
            <CashIcon className="w-12 h-12 text-sky-500"/>
          </div>
          <div className="feature-title">{t("features.free-header")}</div>
          <p className="feature-desc">{t("features.free-summary")}</p>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection