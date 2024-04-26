import React from 'react'
import Logo from "./assets/logo.png"
import Appstore from "./assets/Appstore.png"
import Playstore from "./assets/playsote.png"



export default function Footer() {
  return (
    <footer>
      <div className='divfoo'>
<img className='fooimg' src={Logo} alt="" />
<figcaption className='figfoo'>© McDonald’s 2024</figcaption>
</div>


<div className='divfoo2'>
  <img className='app' src={Playstore} alt="" />
  <img className='app' src={Appstore} alt="" />
</div>
    </footer>
  )
}
