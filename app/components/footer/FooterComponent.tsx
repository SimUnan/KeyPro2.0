import React from 'react'

interface FooterComponentProps{
    title: string
    children: React.ReactNode
}

const FooterComponent = ({title, children}: FooterComponentProps) => {
  return (
    <div className='w-full flex flex-col items-start justify-center gap-5'>
        <h1 className='text-neutral-200 text-xl font-medium'>{title}</h1>
        <div className=' w-full text-neutral-100 text-[14px] font-thin h-auto flex flex-col gap-3 items-start'>
            {children}
        </div>
    </div>
  )
}

export default FooterComponent
