import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo goBali.png'

function navbar() {
  return (
    <nav class="bg-transparent px-14 py-5 fixed w-full top-0 box-border bg-opacity-50 z-10">
            <div class="flex justify-between items-center ">
                <img src={logo} alt="logo"/>
                <div class="flex items-center">
                    <ul class="flex text-white justify-between gap-5 items-center ">
                        <li class ="hover:underline underline-offset-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li class ="hover:underline underline-offset-4">
                            <Link to="/about">About</Link>
                        </li>
                        <li class ="hover:underline underline-offset-4">
                            <Link to="/Destination">Destination</Link>
                        </li>
                        <li class ="hover:underline underline-offset-4">
                            <Link to="/Contact">Contact Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default navbar
