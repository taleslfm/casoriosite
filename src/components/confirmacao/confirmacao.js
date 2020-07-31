import React from "react"

import confirmacaoStyle from "./confirmacao.module.scss"

export default () => (

    <section id="confirmacao" className= {confirmacaoStyle.allContato}>
        <div>
            <h1 className={confirmacaoStyle.tituloPrincipal}>Confirmação</h1>
        </div>
        <div className={confirmacaoStyle.formAll}>
            <div className={confirmacaoStyle.formSection}>
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="contact" value="contact"/>
                    <div className={confirmacaoStyle.formSection} >
                        <label htmlFor="name">Nome:</label>
                        <input type="text" placeholder="Nome completo" name="Nome" id="name"/>
                    </div>
                    <div className={confirmacaoStyle.formSection}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="E-mail" placeholder="exemplo@provedor.com" id="email"/>
                    </div>
                    <div className={confirmacaoStyle.formSection}>
                        <label for="quantidade convidados">Quantas pessoas virão?</label>
                        <select name="cars" id="cars" className={confirmacaoStyle.dropDown}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                    <div className={confirmacaoStyle.formSection}>
                        <label htmlFor="message">Se quiser deixe uma mensagem!</label>
                        <textarea name="Mensagem" placeholder="Sua mensagem aqui" id="message" rows="6"/>
                    </div>
                    <div className={confirmacaoStyle.buttonForm}>
                        <button type="reset" value="Apagar" className={confirmacaoStyle.contatoBotao}>Apagar</button>
                        <button type="submit" value="Enviar" className={confirmacaoStyle.contatoBotao}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
)