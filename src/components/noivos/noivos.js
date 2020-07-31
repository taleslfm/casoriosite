import React from "react"

import noivosStyle from "./noivos.module.scss"

export default () => (
  <div>
    <section id="noivos" className={noivosStyle.allNoivos}>
      <h1 className={noivosStyle.tituloPrincipal}>Os Noivos</h1>
    </section>
    <section className={noivosStyle.containerNoivos}>
      <div className={noivosStyle.noiva}>

      </div>
      <div className={noivosStyle.noivo}>

      </div>
    </section>
  </div>
)
