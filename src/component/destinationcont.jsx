import background from "../img/destinationbg.jpg"
import Navbar from './navbar'
import Footer from './footer'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Destinationcont() {
  return (
    <div class="bg-black-bg font-ibmflexmono"> 
      <section class="bg-cover bg-center w-screen h-screen items-center justify-center flex" style={{ backgroundImage: `url(${background})` }}>
        <div class="absolute inset-0 bg-black opacity-30 h-screen"></div>
        <Navbar/>
        <h1 class="text-white absolute w-160 text-center font-bold text-4xl font-ibmflexmono">Feel free and enjoy the beauty of paradise Island</h1>
        </section>

        <Footer/>
    </div>
  )
}

export default Destinationcont
