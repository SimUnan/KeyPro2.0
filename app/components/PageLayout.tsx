import React from 'react'

interface PageLayoutProp {
    children: React.ReactNode
}

const PageLayout = ({children}: PageLayoutProp) => {
  return (
    <div className='max-w-[1960px] mx-auto xl:px-20 md:px-2 px-4'
    >
      {children}
    </div>
  )
}

export default PageLayout
