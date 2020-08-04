import React from "react"
import headerStyles from './header.module.scss'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "IMG_6449.png"}) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }
`)

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Isabella & Tales</title>
        <html lang="pt-br"/>
      </Helmet>
      <div className={headerStyles.menuTopo}>
        <h1 className={headerStyles.title}>Isabella e Tales</h1>
        <nav>
          <a href="#noivos" title="Nóis" className={headerStyles.linkTopo}>Noivos</a>
          <a href="#padrinhos" title="Nossos Padrinhos" className={headerStyles.linkTopo}>Padrinhos</a>
          <a href="#presentes" title="Nos Presenteie" className={headerStyles.linkTopo}>Presentes</a>
          <a href="#localizacao" title="Local do Casamento" className={headerStyles.linkTopo}>Local</a>
          <a href="#confirmacao" title="Confirme usa presença" className={headerStyles.linkTopo}>Confirmação</a>
        </nav>
      </div>
      <header className={headerStyles.allHeader}>
        <div className={headerStyles.headerLogo} id="top">
        </div>
      </header>
    </div>
  )
}