import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LinkIcon } from '@heroicons/react/outline'
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
      <Page useMain className="bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-screen-xl mx-auto">
          <Navigation/>
          <div className="h-full px-6 py-40 md:px-4 md:py-60 flex flex-col md:flex-row justify-around">
            <div className="flex-1 flex flex-col justify-center items-start">
              <h2 className="text-5xl font-bold text-start">{t("header")}</h2>
              <p className="mt-2 max-w-sm text-xl text-start text-slate-500">{t("description")}</p>
            </div>
            <div className="flex-1 flex items-end justify-end">
              <form className="max-w-sm shadow bg-white border rounded p-4 flex flex-col">
                <h6 className="mb-4 font-medium text-slate-600 text-lg">{t("form.ready-to-start")}</h6>
                <FileBrowser/>
                <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-2 py-2 rounded appearance-none uppercase flex flex-row items-center justify-center">
                  <LinkIcon className="w-4 h-4 mr-2"/>
                  <span>{t("button.get-link")}</span>
                </button>
              </form>
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
