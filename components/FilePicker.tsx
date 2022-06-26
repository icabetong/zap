import React from 'react'
import { useTranslation } from 'next-i18next'
import { CloudUploadIcon, DocumentIcon } from '@heroicons/react/outline'

type FilePickerProps = {
  fileName?: string | null,
  size?: string | number | null,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
const FilePicker: React.FC<FilePickerProps> = ({ fileName, size, onChange }) => {
  const { t } = useTranslation()

  return (
    <label className="cursor-pointer flex flex-col w-full h-32 mt-2 mb-8 rounded border-2 border-slate-100 dark:border-slate-600 border-dashed hover:bg-slate-200 hover:border-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-600">
      <div className="flex flex-col items-center justify-center pt-7 h-full">
        {
          fileName 
            ? <DocumentIcon className="h-6 w-6 text-slate-400 dark:text-slate-300"/>
            : <CloudUploadIcon className="h-6 w-6 text-slate-400 dark:text-slate-300"/>
        }
        <p className="pt-1 text-sm tracking-wider text-slate-400 dark:text-slate-300 font-medium">
          { fileName ?  fileName : t("form.attach-file")}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-300">
          { size && t("form.file-size", { size: size }) }
        </p>
      </div>
      <input type="file" className="opacity-0" onChange={onChange}/>
    </label>
  )
}

export default FilePicker