import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from '../components/SectionProjets/Projets'

const proyects = () => (
  <div>
    <Layout>
      <SEO title="Portfolio Victor Alvarez Tallada / avicdro" keywords={[`gatsby`, `application`, `react`,`portfolio`,`avicdro`,`victor alvarez tallada`]} />
      <Projects />
    </Layout>
  </div>
)

export default proyects