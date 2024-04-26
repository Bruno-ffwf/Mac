import React from 'react'
import Logo from "./assets/logo.png"
import App from "./assets/app.png"
import Celular from "./assets/celular.png"

export default function Header(){
  

  return (
  <header className='he'>
  <section className='seclogo'>
    <img className='imglogo' src={Logo} alt="" />
  </section>

  <section className='seche'>
    <div className='divhe'>
      <img src={App} alt="" />
      <figcaption>Baixe o App</figcaption>
    </div>

    <div className='divhe'>
      <button className='buttonhe'>
        Peça seu mec 
        <img className='imghe' src={Celular} alt="" />
      </button>
    </div>
  </section>

  </header>
  )
}
