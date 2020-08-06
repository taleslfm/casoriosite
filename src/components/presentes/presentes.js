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
                Optamos por não fazer lista de presentes. <br/>
                Sugerimos uma transferência bancária para nos ajudar a concretizar nossos sonhos de recém-casados. 
                Seu presente poderá se transformar em pedacinhos da nossa nova caminhada em outro país, então se desejarem nos presentear 
                nessa data, gostaríamos que o fizessem na conta abaixo: <br/>
                Banco: Nubank <br/>
                Agência: 0001 <br/>
                Conta: 87365389-4 <br/>
                Nome: Isabella e Tales <br/>
                CPF: 057.976.931-35 <br/>
                Caso deseje nos presentear de outra forma, pedimos que entre em contato com os noivos. 
                <h5>Saiba que para nós sua presença é o melhor presente.</h5>
            </p>
        </div>
    </section>

)