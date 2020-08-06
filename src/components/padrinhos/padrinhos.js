import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import padrinhosStyle from "./padrinhos.module.scss"

export default () => {
        const data = useStaticQuery(graphql`
      query PadrinQuery {
        dhielleerika: file(relativePath: {eq: "dhielleerika.jpeg"}) {
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
        caitofernanda: file(relativePath: {eq: "caitofernanda.png"}) {
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
        bryangiovana: file(relativePath: {eq: "bryangiovana.jpeg"}) {
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
          airtonmarlete: file(relativePath: {eq: "airtonmarlete.jpeg"}) {
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
          gabrielraissa: file(relativePath: {eq: "gabrielraissa.jpeg"}) {
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
          zemarcia: file(relativePath: {eq: "zemarcia.jpeg"}) {
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
          pedro: file(relativePath: {eq: "pedro.jpeg"}) {
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
          sonia: file(relativePath: {eq: "sonia.jpeg"}) {
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
          samirrafaela: file(relativePath: {eq: "samirrafaela.jpeg"}) {
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
          marlonpatricia: file(relativePath: {eq: "marlonpatricia.jpeg"}) {
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
          teffoivana: file(relativePath: {eq: "teffoivana.jpeg"}) {
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
                    <Img className={padrinhosStyle.fotoDhielleErika} fixed={data.dhielleerika.childImageSharp.fixed} alt="Jefferson e Érika"/>   
                    <p>Jefferson e Érika</p>
                </div>
                <div className={padrinhosStyle.containerCaitoFernanda}>
                    <Img className={padrinhosStyle.fotoCaitoFernanda} fixed={data.caitofernanda.childImageSharp.fixed} alt="Carlos e Fernanda"/>
                    <p>Carlos e Fernanda</p>
                </div>
                <div className={padrinhosStyle.containerBryanGiovana}>
                    <Img className={padrinhosStyle.fotoBryanGiovana} fixed={data.bryangiovana.childImageSharp.fixed} alt="Bryan e Giovana"/>
                    <p>Bryan e Giovana</p>
                </div>
                <div className={padrinhosStyle.containerAirtonMarlete}>
                    <Img className={padrinhosStyle.fotoAirtonMarlete} fixed={data.airtonmarlete.childImageSharp.fixed} alt="Airton e Marlete"/>
                    <p>Airton e Marlete</p>
                </div>
                <div className={padrinhosStyle.containerGabrielRaissa}>
                    <Img className={padrinhosStyle.fotoGabrielRaissa} fixed={data.gabrielraissa.childImageSharp.fixed} alt="Gabriel e Raissa"/>
                    <p>Gabriel e Raissa</p>
                </div>
                <div className={padrinhosStyle.containerZeMarcia}>
                    <Img className={padrinhosStyle.fotoZeMarcia} fixed={data.zemarcia.childImageSharp.fixed} alt="José Valter e Márcia"/>
                    <p>José Valter e Márcia</p>
                </div>
                <div className={padrinhosStyle.containerSamirRafaela}>
                    <Img className={padrinhosStyle.fotoSamirRafaela} fixed={data.samirrafaela.childImageSharp.fixed} alt="Pedro"/>
                    <p>Samir e Rafaela</p>
                </div>
                <div className={padrinhosStyle.containerTeffoIvana}>
                    <Img className={padrinhosStyle.fotoTeffoIvana} fixed={data.teffoivana.childImageSharp.fixed} alt="Pedro"/>
                    <p>Steffenson e Ivana</p>
                </div>
                <div className={padrinhosStyle.containerMarlonPatricia}>
                    <Img className={padrinhosStyle.fotoMarlonPatricia} fixed={data.marlonpatricia.childImageSharp.fixed} alt="Pedro"/>
                    <p>Marlon e Patrícia</p>
                </div>
                <div className={padrinhosStyle.containerSonia}>
                    <Img className={padrinhosStyle.fotoSonia} fixed={data.sonia.childImageSharp.fixed} alt="Sonia"/>
                    <p>Sônia</p>
                </div>
                <div className={padrinhosStyle.containerPedro}>
                    <Img className={padrinhosStyle.fotoPedro} fixed={data.pedro.childImageSharp.fixed} alt="Pedro"/>
                    <p>Pedro</p>
                </div>
            </div>
        </div>
    </section>
)
    }