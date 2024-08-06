import React from 'react'

const FormWrap = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-fit h-full flex items-center justify-center pt-12 pb-24'>
        <div className='max-w-[640px] w-full border border-neutral-200 shadow-md shadow-slate-300 rounded-md p-4 md:p-8 lg:p-10 xl:p-12 flex flex-col items-center justify-center gap-4'>
            {children}
        </div>
    </div>
  )
}

export default FormWrap