
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Intro from "./intro/intro"
import Padrinhos from "./padrinhos/padrinhos"
import Localizacao from "./localizacao/localizacao"
import Noivos from "./noivos/noivos"
import Presentes from "./presentes/presentes"
import Confirmacao from "./confirmacao/confirmacao"

import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
        <Intro/>
        <Noivos/>
        <Padrinhos/>
        <Presentes/>
        <Localizacao/>
        <Confirmacao/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
