import React from 'react'
import background from "../img/destinationbg.jpg"
import Navbar from '../component/Navbar'
import Footer from '../component/footer'
function destinationcont() {
  return (
    <div class="bg-black-bg font-ibmflexmono overflow-x-hidden"> 
      <section class="bg-cover bg-center w-screen h-screen items-center justify-center flex" style={{ backgroundImage: `url(${background})` }}>
        <div class="absolute inset-0 bg-black opacity-30 h-screen"></div>
        <Navbar/>
        <h1 class="text-white absolute w-64 text-center font-bold text-md font-ibmflexmono sm:text-lg md:text-3xl md:w-128 lg:w-160 lg:text-4xl">Feel free and enjoy the beauty of paradise Island</h1>
        </section>

        <Footer/>
    </div>
  )
}

export default destinationcont
