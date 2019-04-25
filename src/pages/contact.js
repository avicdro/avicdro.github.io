import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Contact from '../components/SectionContact/Contact'

const contact = () => (
  <div>
    <Layout>
      <SEO title="Portfolio Victor Alvarez Tallada / avicdro" keywords={[`gatsby`, `application`, `react`,`portfolio`,`avicdro`,`victor alvarez tallada`]} />
      <Contact />
    </Layout>
  </div>
)

export default contact