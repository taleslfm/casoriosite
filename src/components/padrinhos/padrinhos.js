import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import padrinhosStyle from "./padrinhos.module.scss"

export default () => {
        const data = useStaticQuery(graphql`
      query PadrinQuery {
        dhielleerika: file(relativePath: {eq: "dhielleerika.jpeg"}) {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              sizes
              src
              srcSet
            }
          }
        }
        caitofernanda: file(relativePath: {eq: "caitofernanda.jpeg"}) {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              sizes
              src
              srcSet
            }
          }
        }
        bryangiovana: file(relativePath: {eq: "bryangiovana.jpeg"}) {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              sizes
              src
              srcSet
            }
          }
          }
          airtonmarlete: file(relativePath: {eq: "airtonmarlete.jpeg"}) {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                sizes
                src
                srcSet
              }
            }
          }
          gabrielraissa: file(relativePath: {eq: "gabrielraissa.jpeg"}) {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                sizes
                src
                srcSet
              }
            }
          }
          zemarcia: file(relativePath: {eq: "zemarcia.jpeg"}) {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                sizes
                src
                srcSet
              }
            }
          }
          pedro: file(relativePath: {eq: "pedro.jpeg"}) {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                sizes
                src
                srcSet
              }
            }
          }
          sonia: file(relativePath: {eq: "sonia.jpeg"}) {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                sizes
                src
                srcSet
              }
            }
          }
          samirrafaela: file(relativePath: {eq: "samirrafaela.jpeg"}) {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                sizes
                src
                srcSet
              }
            }
          }
          marlonpatricia: file(relativePath: {eq: "marlonpatricia.jpeg"}) {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                sizes
                src
                srcSet
              }
            }
          }
          teffoivana: file(relativePath: {eq: "teffoivana.jpeg"}) {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                sizes
                src
                srcSet
              }
            }
          }
      }
      `)

      return (
    <section id="padrinhos">
        <div className={padrinhosStyle.container} >
            <h1 className={padrinhosStyle.tituloPrincipal}>Padrinhos</h1>
            <div className={padrinhosStyle.textoPadrinhos}>
            <p>
                Aos nossos queridos padrinhos:
            </p>
            <p>
                É uma emoção única e indescritível tê-los ao nosso lado e poder partilhar com vocês toda felicidade dessa 
                nova etapa em nossas vidas: nosso casamento!
            </p>
            <p>
                Por isso, desejamos tê-los como testemunhas do nosso sonho e do nosso amor!
            </p>
            </div>
            <div className={padrinhosStyle.containerPadrinhos}>
                <div className={padrinhosStyle.containerDhielleErika}>
                    <Img className={padrinhosStyle.fotoDhielleErika} fluid={data.dhielleerika.childImageSharp.fluid} alt="Jefferson e Érika"/>   
                    <span>Jefferson e Érika</span>
                </div>
                <div className={padrinhosStyle.containerCaitoFernanda}>
                    <Img className={padrinhosStyle.fotoCaitoFernanda} fluid={data.caitofernanda.childImageSharp.fluid} alt="Carlos e Fernanda"/>
                    <span>Carlos e Fernanda</span>
                </div>
                <div className={padrinhosStyle.containerBryanGiovana}>
                    <Img className={padrinhosStyle.fotoBryanGiovana} fluid={data.bryangiovana.childImageSharp.fluid} alt="Bryan e Giovana"/>
                    <span>Bryan e Giovana</span>
                </div>
                <div className={padrinhosStyle.containerAirtonMarlete}>
                    <Img className={padrinhosStyle.fotoAirtonMarlete} fluid={data.airtonmarlete.childImageSharp.fluid} alt="Airton e Marlete"/>
                    <span>Airton e Marlete</span>
                </div>
                <div className={padrinhosStyle.containerGabrielRaissa}>
                    <Img className={padrinhosStyle.fotoGabrielRaissa} fluid={data.gabrielraissa.childImageSharp.fluid} alt="Gabriel e Raissa"/>
                    <span>Gabriel e Raissa</span>
                </div>
                <div className={padrinhosStyle.containerZeMarcia}>
                    <Img className={padrinhosStyle.fotoZeMarcia} fluid={data.zemarcia.childImageSharp.fluid} alt="José Valter e Márcia"/>
                    <span>José Valter e Márcia</span>
                </div>
                <div className={padrinhosStyle.containerSamirRafaela}>
                    <Img className={padrinhosStyle.fotoSamirRafaela} fluid={data.samirrafaela.childImageSharp.fluid} alt="Pedro"/>
                    <span>Samir e Rafaela</span>
                </div>
                <div className={padrinhosStyle.containerTeffoIvana}>
                    <Img className={padrinhosStyle.fotoTeffoIvana} fluid={data.teffoivana.childImageSharp.fluid} alt="Pedro"/>
                    <span>Steffenson e Ivana</span>
                </div>
                <div className={padrinhosStyle.containerMarlonPatricia}>
                    <Img className={padrinhosStyle.fotoMarlonPatricia} fluid={data.marlonpatricia.childImageSharp.fluid} alt="Pedro"/>
                    <span>Marlon e Patrícia</span>
                </div>
                <div className={padrinhosStyle.containerSonia}>
                    <Img className={padrinhosStyle.fotoSonia} fluid={data.sonia.childImageSharp.fluid} alt="Sonia"/>
                    <span>Sônia</span>
                </div>
                <div className={padrinhosStyle.containerPedro}>
                    <Img className={padrinhosStyle.fotoPedro} fluid={data.pedro.childImageSharp.fluid} alt="Pedro"/>
                    <span>Pedro</span>
                </div>
            </div>
        </div>
    </section>
)
    }