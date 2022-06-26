import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LinkIcon, ClipboardCopyIcon, UploadIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Page from '../components/Page'
import FilePicker from '../components/FilePicker'
import FeatureSection from '../components/sections/FeatureSection'
import Footer from '../components/sections/Footer'
import Spinner from '../components/Spinner'
import { PageProps } from '../src/shared/types'

const Home: NextPage = () => {
  const { t } = useTranslation('common')
  const [isCopied, setCopied] = useState(false)
  const [isWorking, setWorking] = useState(false)
  const [response, setResponse] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const onReset = () => setResponse(null)

  const onCopyToClipboard = async () => {
    if (response) {
      await navigator.clipboard.writeText(response)
      setCopied(true)
    }
  }

  const onHandleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files
    if (files && files.length > 0) {
      setFile(files[0])
    }
  }

  const onTriggerUpload = async () => {
    setWorking(true)
    setTimeout(() => {
      setResponse('this')
      setWorking(false)
    }, 5000)
  }

  return (
    <>
      <Head>
        <title>{t("app-name")}</title>
      </Head>
      <Page className="relative">
        <div className="bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900 dark:to-sky-900 h-full object-cover absolute w-full"/>
        <div className="relative">
          <Navigation/>
          <main className="page-width px-6 py-20 md:px-4 md:py-32 flex flex-col justify-around">
            <div className="flex-1 flex flex-col justify-center items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-slate-50">{t("header")}</h2>
              <p className="mt-4 max-w-sm text-md md:text-lg text-center text-slate-500 dark:text-slate-400">{t("description")}</p>
            </div>
            <div className="mt-12 md:mt-8 flex-1 flex items-center justify-center">
              <div className="w-96 md:max-w-sm shadow bg-white dark:bg-slate-800 border dark:border-slate-800 rounded p-4 flex flex-col">
                { response === null 
                  ? <>
                      <h6 className="mb-4 font-medium text-slate-600 dark:text-slate-200 text-lg">{t("form.ready-to-start")}</h6>
                      {
                        isWorking 
                          ? <div className="w-full h-32 flex flex-col items-center justify-center"><Spinner/></div>
                          : <FilePicker fileName={file?.name} size={file?.size} onChange={onHandleFileInputChange}/>
                      }
                      <button 
                        type="button"
                        disabled={isWorking || !file}
                        onClick={onTriggerUpload}
                        className="button-core">
                        { isWorking ? <UploadIcon className="w-4 h-4 mr-2"/> : <LinkIcon className="w-4 h-4 mr-2"/> }
                        { isWorking ? t("feedback.uploading") : t("button.get-link")}
                      </button>
                    </>
                  : <>
                      <h6 className="mb-4 font-medium text-slate-600 dark:text-slate-200 text-lg">{t("form.transfer-complete")}</h6>
                      <div className="text-field-container">
                        <input className="text-field-input" type="text" value={response}/>
                        <button className="text-field-end" onClick={onCopyToClipboard}>
                          <ClipboardCopyIcon className="w-6 h-6 text-gray-500 dark:text-gray-300"/>
                        </button>
                      </div>
                      {
                        isCopied &&
                        <motion.p className="flex flex-row items-center justify-start text-sm space-x-2 p-2 mr-2 mb-4 rounded-md bg-sky-100 text-sky-500 font-medium dark:bg-sky-900 dark:text-sky-400">
                          <InformationCircleIcon className="w-6 h-6"/>
                          <span>{t("feedback.link-copied")}</span>
                        </motion.p>
                      }
                      <button
                        type="button"
                        onClick={onReset}
                        className="button-core">
                        {t("button.upload-another")}
                      </button>
                    </>
                }
              </div>
            </div>
          </main>
          <FeatureSection/>
          <Footer/>
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
