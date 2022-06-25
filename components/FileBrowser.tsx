import { useTranslation } from 'next-i18next'
import { CloudUploadIcon } from '@heroicons/react/outline'

const FileBrowser = () => {
  const { t } = useTranslation()

  return (
    <label
      className="flex flex-col w-full h-32 rounded border-2 border-gray-100 border-dashed hover:bg-gray-200 hover:border-gray-300">
      <div className="flex flex-col items-center justify-center pt-7 h-full">
        <CloudUploadIcon className="h-6 w-6 text-gray-400"/>
        <p className="pt-1 text-sm tracking-wider text-gray-400">
          {t("form.attach-file")}</p>
      </div>
      <input type="file" className="opacity-0" />
    </label>
  )
}

export default FileBrowser