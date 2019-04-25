import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import AboutMy from '../components/SectionAboutMy/AboutMy';


const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Portfolio Victor Alvarez Tallada / avicdro" keywords={[`gatsby`, `application`, `react`,`portfolio`,`avicdro`,`victor alvarez tallada`]} />
        <AboutMy />
      </Layout>
  </div>
)

export default IndexPage
