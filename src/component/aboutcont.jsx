import React from 'react'
import background from "../img/about.jpg"
import logo from "../img/logo goBali.png"
import destination from '../img/destinationbg.jpg'
import Yande from '../img/yande.png'
import Gungwah from '../img/gungwah.png'
import Sulih from '../img/sulih.png'
import Devara from '../img/devara.png'
import Navbar from './navbar'


const aboutcont = () => {
  return (

<div class="bg-black-bg font-ibmflexmono">

    <section class="bg-cover bg-center w-screen h-screen items-center justify-center flex" style={{ backgroundImage: `url(${background})` }} >
        <div class="absolute inset-0 bg-black opacity-30 h-screen"></div>
        <Navbar/>
        <h1 class="text-white absolute w-160 text-center font-bold text-4xl font-ibmflexmono">WELCOME TO GOGOBALI WEBSITE</h1>
    </section>

    <div class="flex flex-col bg-transparent gap-16 px-8 py-4">
        <div class="items-center gap-5 justify-center flex flex-col" >
            <div class="flex flex-col gap-0 items-center relative">
                <img src={logo} alt="Logo GoBali" />
                <h1 class="font-bold text-2xl">What Is Gogobali ??</h1>
            </div>

            <div class="flex flex-row gap-5 justify-center">
                <div class="flex flex-col max-h-44 items-end">
                    <p class="text-white mb-3 font-ibmflexmono text-sm text-justify">Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Repellat numquam, quaerat vitae doloribus quas ratione
                        laboriosam. Ipsa quidem voluptatem ex temporibus natus iure nam earum ullam obcaecati, deserunt
                        vitae non!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis ullam, itaque
                        est et atque sint rem perferendis in fugiat perspiciatis repellendus inventore commodi expedita.
                        Eius facere autem assumenda quo?</p>
                    <p class="text-white mb-3 font-ibmflexmono text-sm text-justify">Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Repellat numquam, quaerat vitae doloribus quas ratione
                        laboriosam. Ipsa quidem voluptatem ex temporibus natus iure nam earum ullam obcaecati, deserunt
                        vitae non!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis ullam, itaque
                        est et atque sint rem perferendis in fugiat perspiciatis repellendus inventore commodi expedita.
                        Eius facere autem assumenda quo?</p>
                    <button
                        class="px-5 py-2 bg-orange-400 text-white font-bold rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Read
                        More</button>
                </div>

                <div>
                    <img class="bg-cover w-3/4 rounded-lg"src={destination} alt=""/>
                </div>

            </div>

            <div class="items-center gap-5 justify-center flex flex-col">
                <div class="items-center justify-center flex">
                    <h1 class="font-bold text-2xl">Vision and Mision Gogobali</h1>
                </div>

                <div class="flex items-center gap-3">
                    <div class="border-2  rounded-xl flex-grow items-center flex p-3 h-auto max-w-lg">
                        <p class="text-white text-center text-sm leading-6"><span
                                class="text-orange-500 text-xl font-bold">Vision </span>Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Fugit aspernatur error obcaecati consectetur accusamus rem,
                            magnam
                            quos, quibusdam, dicta adipisci tenetur animi enim veniam qui vero quae tempora incidunt
                            eos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, eius officia animi
                            ipsa
                            tenetur, libero doloremque eaque aliquam eum, atque tempora. Expedita quibusdam sint
                            aliquam.
                            Odio repudiandae suscipit at eum.</p>
                    </div>
                    <div class="border-2 rounded-xl flex-grow items-center flex p-3 h-auto max-w-lg">
                        <p class="text-white text-center text-sm leading-6"><span class="text-orange-500 text-xl font-bold">Mission </span>Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Corrupti omnis corporis amet tenetur consequuntur in nihil
                            officiis maiores vel praesentium quia, veritatis modi quaerat accusamus incidunt. Nihil
                            corporis
                            possimus atque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, eius
                            officia
                            animi ipsa tenetur, libero doloremque eaque aliquam eum, atque tempora. Expedita quibusdam
                            sint
                            aliquam. Odio repudiandae suscipit at eum.</p>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</div>
  )
}

export default aboutcont