import React from "react"

import padrinhosStyle from "./padrinhos.module.scss"

export default () => (

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
                <div className={padrinhosStyle.fotoDhielleErika}>
                    <p>Jefferson e Érika</p>
                </div>
                <div className={padrinhosStyle.fotoCaitoFernanda}>
                    <p>Carlos e Fernanda</p>
                </div>
                <div className={padrinhosStyle.fotoBryanGiovana}>
                    <p>Bryan e Giovana</p>
                </div>
                <div className={padrinhosStyle.fotoAirtonMarlete}>
                    <p>Airton e Marlete</p>
                </div>
                <div className={padrinhosStyle.fotoLucasRaissa}>
                    <p>Lucas e Raissa</p>
                </div>
                <div className={padrinhosStyle.fotoZeMarcia}>
                    <p>José Valter e Márcia</p>
                </div>
                <div className={padrinhosStyle.fotoSonia}>
                    <p>Sônia</p>
                </div>
                <div className={padrinhosStyle.fotoPedro}>
                    <p>Pedro</p>
                </div>
            </div>
        </div>
    </section>
)