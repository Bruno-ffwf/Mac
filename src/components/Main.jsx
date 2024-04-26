import React from 'react'
import Bigmac from "./assets/bigmac.png"
import Batata from "./assets/batata.png"
import Sorvete from "./assets/sorvete.png"
import Pacote from "./assets/pacote.png"
import Restaurante from "./assets/restaurante.png"
import Banner from "./assets/banner.png"
import Carousel from "react-elastic-carousel";

export default function Main() {
  return (
    <main className='body'>
      <section className='secma'>
    <img className='imgma' src={Bigmac} alt="" />
    <h1 className='bateu'>BATEU AQUELA <br />
  #FOME DE MÈQUI?      
    </h1>
      </section>


      <section className='sec2'>
      <Carousel>
<img className='bigmac' src={Bigmac} alt="" />
<img className='batata' src={Batata} alt="" />
<img className='sorvete' src={Sorvete} alt="" />
</Carousel>
      </section>


      <div className='divpro'>
<h1 className='promo'>Promoção</h1>
</div>

    <section className='secm2'>
<div className='divimg'>
  <img src={Pacote} alt="" />
  <figcaption className='figimg'>Que tal um #MéquiNoSofá?</figcaption>
  <button className='butimg'>Clique aqui</button>
</div>

<div className='divimg'>
  <img src={Restaurante} alt="" />
  <figcaption className='figimg'>Venha conhecer nossa nova loja</figcaption>
  <button className='butimg'>Clique aqui</button>
</div>

<div className='divimg'>
  <img src={Banner} alt="" />
  <figcaption className='figimg'>Confira as medidas que o Méquoi adotou!</figcaption>
  <button className='butimg'>Clique aqui</button>
</div>
    </section>
    </main>
  )
}
