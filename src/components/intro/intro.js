import React from "react"

import introStyle from "./intro.module.scss"
import App from '../app/app'

export default () => (
    <section className={introStyle.introAll} >
        <div className={introStyle.introText}>
            <h4>Querido convidado, seja bem-vindo ao nosso site de casamento! </h4>
            <p>
                Aqui, você terá acesso a todas informações da nossa festa e poderá 
                participar de pertinho de cada passo nosso até o grande dia! Use nosso site para confirmar presença, ter acesso a localização da 
                cerimônia, ver nossas dicas de presentes, dicas sobre o que vestir e conheça nossos padrinhos.<br/>
                Estamos em contagem regressiva para o grande dia e não vemos a hora de vivermos, sentirmos e sonharmos juntos.
            </p>
            <p>
                Fique a vontade por dar uma voltinha pelo site e nos conhecer um pouco mais :)    
            </p>
            <p>
                Com amor <br/>
                Isa e Tales
            </p>
        </div>
        <section className={introStyle.contador}>
            <App></App>
        </section>
    </section>
)
