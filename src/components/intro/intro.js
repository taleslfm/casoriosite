import React from "react"

import introStyle from "./intro.module.scss"
import App from '../app/app'

export default () => (
    <section id="barberPole" className={introStyle.introAll} >
        {/* <h1 className={introStyle.tituloPrincipal}>Exemplo</h1> */}
        <div className={introStyle.introText}>
            <p>
                Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento. 
                Estamos muito felizes e contamos com a presença de todos no nosso grande dia!
            </p>
            <p>
                Aqui vocês encontrarão também dicas para hospedagem, salão de beleza, trajes, estacionamento, etc.
            </p>
            <p>
                Ah, é importante também confirmar sua presença. 
                Para isto contamos com sua ajuda clicando no menu "Confirme sua Presença" e preenchendo os dados necessários.
            </p>
            <p>
                Para nos presentear, escolha qualquer item da Lista de Casamento, seja um item de algum dos sites,
                lojas físicas, ou então vocês podem utilizar a opção de cotas. Fiquem à vontade!
            </p>
            <p>
                Aguardamos vocês no nosso grande dia!
            </p>
        </div>
        <section>
            <App></App>
        </section>
    </section>
)
