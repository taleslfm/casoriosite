import React from "react"

import confirmacaoStyle from "./confirmacao.module.scss"

export default () => (

    <section id="confirmacao" className= {confirmacaoStyle.allContato}>
        <div className={confirmacaoStyle.sub}>
            <h1 className={confirmacaoStyle.tituloPrincipal}>Confirmação</h1>
            <span>Confirme sua presença aqui. Coloque também o nome de todos os convidados! </span> <br/>
            <span>Ex: João e Maria ou João, Maria e Pedro.</span>
        </div>
        <div className={confirmacaoStyle.formAll}>
            <div className={confirmacaoStyle.formSection}>
                <form name="confirmação" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="contact" value="contact"/>
                    <div className={confirmacaoStyle.formSection} >
                        <label htmlFor="name"></label>
                        <input type="text" placeholder="Nome do Convidado" name="Nome" id="name" inputMode= "text"/>
                    </div>
                    <div className={confirmacaoStyle.formSection}>
                        <label htmlFor="email"></label>
                        <input type="email" name="E-mail" placeholder="Email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" inputMode="email"/>
                    </div>
                    <div className={confirmacaoStyle.containerRadio}>
                        <span>Você irá ao evento?</span>
                        <div>
                            <div>
                                <input type="radio" id="Sim" name="selector"/>
                                <label htmlFor="sim">Sim</label>
                            </div>
                            <div>
                                <input type="radio" id="Não" name="selector"/>
                                <label htmlFor="nao">Não</label>
                            </div>
                        </div>
                    </div>
                    <div className={confirmacaoStyle.formSection}>
                        <div className={confirmacaoStyle.quantos}>
                            <label htmlFor="quantidade convidados">Quantos adultos?</label>
                            <select name="convidados" id="convidados" className={confirmacaoStyle.dropDown}>
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
                    </div>
                    <div className={confirmacaoStyle.containerTel}>
                        <label htmlFor="phone">Telefone:</label>
                        <input type="tel" id="phone" name="phone" placeholder="(99) 99999-9999" inputMode="tel" />
                    </div>
                    <div className={confirmacaoStyle.formSection}>
                        <label htmlFor="message">Se quiser deixe uma mensagem!</label>
                        <textarea name="Mensagem" placeholder="Sua mensagem aqui" id="message" rows="6"/>
                    </div>
                    <div className={confirmacaoStyle.buttonForm}>
                        <button type="reset" value="Apagar" className={confirmacaoStyle.contatoBotao}>Apagar</button>
                        <button type="submit" value="Enviar" className={confirmacaoStyle.contatoBotao}>Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
)

