import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import noivosStyle from "./noivos.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
query NoivosQuery {
  noivo: file(relativePath: {eq: "noivo.png"}) {
    childImageSharp {
      fixed {
        base64
        aspectRatio
        srcWebp
        srcSetWebp
        originalName
        height
        width
        src
        srcSet
        tracedSVG
      }
    }
  }
  noiva: file(relativePath: {eq: "noiva.png"}) {
    childImageSharp {
      fixed {
        base64
        aspectRatio
        srcWebp
        srcSetWebp
        originalName
        height
        width
        src
        srcSet
        tracedSVG
      }
    }
  }
}
`)

  return (
    <div>
      <section id="noivos" className={noivosStyle.allNoivos}>
        <h1 className={noivosStyle.tituloPrincipal}>Os Noivos</h1>
        <p>
          A nossa jornada começou em Fevereiro de 2018, quando começamos a nos aproximar em um congresso na igreja. Como somos gratos pelas 
          iniciativas que a Isa tomou de falar comigo e dar os primeiros passos! rs
        </p>
        <p>
          O meu coração vibrava todas as vezes que conversávamos. Depois de algumas semanas conversando, decidi chamá-la para tomar um sorvete. 
          Estava diante da mulher que eu viria a chamar de namorada, noiva e em breve de esposa!<br/>
          E nossa conversa fluiu muito bem, pedimos um sorvete e achamos que agradaria ao outro, porém o sorvete foi sobrando e quando comentamos 
          que não gostávamos do mesmo sabor, soltamos gargalhadas. A noite foi muito agradável e pareceu que nos conhecíamos a tempo.<br/>
          Começamos o namoro e, desde então, temos visto a bondade de Deus nos acompanhando por todas as fases. Ganhamos amigos, conhecemos 
          lugares, passamos por momentos difíceis e vencemos, dividimos momentos bons e temos sido extremamente abençoados e moldados por Deus. <br/>
          Até a data do nosso casamento, teremos completado 2 anos e 8 meses de namoro. Uma jornada breve perto da certeza de que ela nunca terá 
          fim. Hoje corremos juntos pra um propósito muito maior que a nós mesmos. Maior que o que já vivíamos solteiros e será ainda maior 
          quando estivermos casados.
        </p>
        <h4>
          "Então o Senhor Deus declarou: "Não é bom que o homem esteja só (...)" Gênesis 2:18
        </h4>
      </section>
      <section className={noivosStyle.containerNoivos}>
        <div className={noivosStyle.noivo}>
          <Img className={noivosStyle.noivaFoto} fixed={data.noivo.childImageSharp.fixed} alt="noivo"/>
        </div>
        <div className={noivosStyle.noiva}>
          <Img className={noivosStyle.noivoFoto} fixed={data.noiva.childImageSharp.fixed} alt="noiva"/>
        </div>
      </section>
    </div>
  )
}
