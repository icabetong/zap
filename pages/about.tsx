import { Trans } from 'react-i18next'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Footer from '../components/sections/Footer'
import Navigation from '../components/Navigation'
import Page from '../components/Page'
import { PageProps } from '../src/shared/types'

const AboutPage: NextPage = () => {
  const { t } = useTranslation('about')

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Page className="bg-slate-700">
        <Navigation/>
        <div className="page-width px-8 md:px-4 text-slate-800 dark:text-slate-50">
          <main className="py-20 flex flex-col md:flex-row items-center justify-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold">{t("header")}</h1>
              <p className="mt-4 dark:text-slate-300">{t("general.header")}</p>
            </div>
            <div className="flex-1"></div>
          </main>
          <section id="terms" className="mt-8 mb-16">
            <div className="text-2xl font-semibold mb-8">{t("section.terms")}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm">
              <div className="p-6 rounded shadow border dark:bg-slate-600 dark:border-slate-600">
                <div className="flex-1">
                  <div className="text-lg font-semibold">{t("terms.general")}</div>
                  <p className="text-slate-600 dark:text-slate-300">{t("terms.general-desc")}</p>
                </div>
              </div>
              <div className="p-6 rounded shadow border dark:bg-slate-600 dark:border-slate-600">
                <div className="text-lg font-semibold">{t("terms.logging")}</div>
                <p className="text-slate-600 dark:text-slate-300">{t("terms.logging-desc")}</p>
              </div>
              <div className="p-6 rounded shadow border dark:bg-slate-600 dark:border-slate-600">
                <div className="text-lg font-semibold">{t("terms.availability")}</div>
                <p className="text-gray-600 dark:text-slate-300">
                  <Trans
                    t={t}
                    i18nKey="terms.availability-desc"
                    components={{
                      links: <a className="font-medium" href="https://www.google.com.ph"/>
                    }}/>
                </p>
              </div>
              <div className="p-6 rounded shadow border dark:bg-slate-600 dark:border-slate-600">
                <div className="text-lg font-semibold">{t("terms.changes")}</div>
                <p className="text-gray-600 dark:text-slate-300">{t("terms.changes-desc")}</p>
              </div>
            </div>
          </section>
          <section id="faq" className="mt-8 mb-16">
            <div className="text-2xl font-semibold mb-8">{t("section.faq")}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm">
              <div className="p-6 rounded border shadow dark:bg-slate-600 dark:border-slate-600">
                <div className="text-lg font-semibold">{t("faq.share")}</div>
                <p className="text-gray-600 dark:text-slate-300">{t("faq.share-desc")}</p>
              </div>
              <div className="p-6 rounded border shadow dark:bg-slate-600 dark:border-slate-600">
                <div className="text-lg font-semibold">{t("faq.availability")}</div>
                <p className="text-gray-600 dark:text-slate-300">
                  <Trans
                    t={t}
                    i18nKey="faq.availability-desc"
                    components={{
                      faq: <a className="font-semibold text-sky-500" href="https://anonfiles.com/faq"/>,
                      tor: <a className="font-semibold text-sky-500" href="https://anonfiles.com/terms"/>
                    }}/>
                </p>
              </div>
              <div className="p-6 rounded border shadow dark:bg-slate-600 dark:border-slate-600">
                <div className="text-lg font-semibold">{t("faq.limits")}</div>
                <p>{t("faq.limits-desc")}</p>
                <ul className='mt-2 mx-6 list-disc'>
                  <li>
                    <Trans
                      t={t}
                      i18nKey="faq.limit-1"
                      components={{
                        strong: <strong/>
                      }}/>
                  </li>
                  <li>
                    <Trans
                      t={t}
                      i18nKey="faq.limit-2"
                      components={{
                        strong: <strong/>
                      }}/>
                  </li>
                  <li>
                    <Trans
                      t={t}
                      i18nKey="faq.limit-3"
                      components={{
                        strong: <strong/>
                      }}/>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded border shadow dark:bg-slate-600 dark:border-slate-600">
                <div className="text-lg font-semibold">{t("faq.restrictions")}</div>
                <p className="text-gray-600 dark:text-slate-300">{t("faq.restrictions-desc")}</p>
              </div>
            </div>
          </section>
        </div>
        <Footer/>
      </Page>
    </>
  )
}

export const getStaticProps = async({ locale }: PageProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['about', 'common'])
  }
})

export default AboutPage