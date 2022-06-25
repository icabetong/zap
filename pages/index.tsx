import { renderToStaticMarkup } from 'react-dom/server'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navigation from '../components/Navigation'
import Page from '../components/Page'
import FileBrowser from '../components/FileBrowser'
import { PageProps } from '../src/shared/types'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t("app-name")}</title>
      </Head>
      <Page useMain>
        <div className="max-w-screen-lg mx-auto">
          <Navigation/>
          <div className="h-full px-6 py-40 md:px-4 md:py-60 flex flex-col md:flex-row-reverse">
            <div className="flex-1 flex flex-col justify-center items-end">
              <h2 className="text-5xl font-bold text-end">{t("header")}</h2>
              <p className="max-w-xs text-xl text-end text-gray-400">{t("description")}</p>
            </div>
            <div className="flex-1 md:pr-12">
              <div className="shadow bg-white border rounded p-4 flex flex-col">
                <FileBrowser/>
                <button
                  className="mt-4 bg-sky-500 text-white px-2 py-2 rounded appearance-none">
                  {t("button.upload")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export const getStaticProps = async({ locale }: PageProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['common'])
  }
})

export default Home
