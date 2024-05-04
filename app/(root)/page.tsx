import React from 'react'
import Product from '../product/section/Product'
import PageLayout from '../components/PageLayout'
import HomeBanner from '../components/HomeBanner'

const Home = () => {
  return (
    <div>
      <PageLayout>
        <HomeBanner />
        <Product />
      </PageLayout>
    </div>
  )
}

export default Home
