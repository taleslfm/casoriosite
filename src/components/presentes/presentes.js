import React from "react"

import presentesStyle from "./presentes.module.scss"

export default () => (

    <section id="presentes" className= {presentesStyle.all}>
        <h1 className={presentesStyle.tituloPrincipal}>Presentes</h1>
        <div className={presentesStyle.textoPresente}>
            <p>
                Querido convidado,
            </p>
            <p>
                Optamos em não fazer lista de presentes. <br/>
                Sugerimos um depósito bancário para nos ajudar a concretizar nossos sonhos de recém-casados. Seu presente irá se transformar 
                em pedacinhos da nossa nova caminhada em outro país, então se desejarem nos presentear nessa data, gostaríamos que o fizessem 
                através da conta Xxxxx do banco uuuu. <br/>
                <h5>Saiba que para nós sua presença é o melhor presente.</h5>
            </p>
        </div>
    </section>

)