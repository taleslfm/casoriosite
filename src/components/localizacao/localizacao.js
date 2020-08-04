import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import localizacaoStyle from "./localizacao.module.scss"

export default () => {
    const data = useStaticQuery(graphql`
query MonQuery {
  file(relativePath: {eq: "salao3.jpg"}) {
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

    <section id="localizacao" className= {localizacaoStyle.all}>
      <h1 className={localizacaoStyle.tituloPrincipal}>Local</h1>
      <section className={localizacaoStyle.hueparana}>
        <p>
          Casaremos na Chácara Carpe Diem porque nos apaixonamos pelo lugar! <br/>
          Como queríamos uma festa rústica-chic o local serviu perfeitamente! <br/>
          O Local da cerimonia é o mesmo local da festa, pedimos que saiam com antecedência, pois o local é um pouco afastado do centro de 
          Curitiba e tem uma parte de estrada de chão ok? <br/>
          Aconselhamos irem de UBER/99/TAXI para curtirem muito, mas caso vá de carro, terá 
          estacionamento no local. <br/>
          Vai ser o dia mais lindo e emocionante de nossas vidas e contamos com a presença de vocês para que seja 
          ainda mais especial.
        </p>
      </section>
      <div className={localizacaoStyle.containerFotoMapa}>
        <div className={localizacaoStyle.fotoChacara}>
          <Img fluid={data.file.childImageSharp.fluid} alt="Chácara Carpe Diem"/>
          <p>Chácara Carpe Diem</p>
        </div>
        <div className={localizacaoStyle.mapaGoogle}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3716812.3176762452!2d-51.3217005!3d-24.5304774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf846c4b30b1a417!2sCh%C3%A1cara%20Carpe%20Diem!5e0!3m2!1spt-BR!2sbr!4v1596032331277!5m2!1spt-BR!2sbr" name='iframe_loc_chacara' title='Mapa Chácara'>
              Google maps da chácara
          </iframe>
        </div>
      </div>
    </section>
  )
}