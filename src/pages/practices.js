import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Practices from '../components/SectionPractices/Practices'

const practices = () => (
  <div>
    <Layout>
      <SEO title="Portfolio Victor Alvarez Tallada / avicdro" keywords={[`gatsby`, `application`, `react`,`portfolio`,`avicdro`,`victor alvarez tallada`]} />
      <Practices />
    </Layout>
  </div>
)

export default practices