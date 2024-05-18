import React from "react";
import background from "../img/about.jpg";
import logo from "../img/logo goBali.png";
import destination from "../img/destinationbg.jpg";
import Yandebnw from "../img/yandebnw.png";
import Gungwahbnw from "../img/gungwahbnw.png";
import Sulihbnw from "../img/sulihbnw.png";
import Devarabnw from "../img/devarabnw.png";
import Yande from "../img/yande.png";
import Gungwah from "../img/gungwah.png";
import Sulih from "../img/sulih.png";
import Devara from "../img/devara.png";
import Navbar from "./navbar";
import Footer from "./footer";

const aboutcont = () => {
  const Headercolor = {
    color: "rgb(247, 170, 143)",
  };

  return (
    <div class="bg-black-bg font-ibmflexmono overflow-x-hidden">
      <Navbar />
      <section
        class="bg-cover bg-center w-screen h-screen items-center justify-center flex relative"
        style={{
          maskImage: `linear-gradient(
        to top,
        rgba(255, 0, 0, 0) 0%,
        rgb(69, 211, 22) 12.5%,
        rgb(65, 22, 221) 87.5%,
        rgba(20, 225, 222, 0) 100%
            )`,
          backgroundImage: `url(${background})`,
        }}
      >
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <h1 class="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl md:text-4xl font-ibmflexmono text-center">
          WELCOME TO GOGOBALI WEBSITE
        </h1>
      </section>

      <div class="flex flex-col bg-transparent gap-16 px-9 py-4 relative">
        <div class="items-center gap-5 justify-center flex flex-col">
          <div class="flex flex-col gap-0 items-center relative">
            <img src={logo} alt="Logo GoBali" />
            <h1
              class="font-bold text-xl md:text-2xl text-white"
              style={Headercolor}
            >
              What Is Gogobali ??
            </h1>
          </div>

          <div class="flex flex-col lg:flex-row gap-5 justify-center">
            <div class="flex flex-col items-end">
              <p class="text-white mb-3 font-ibmflexmono text-xs leading-5 md:text-sm md:leading-6 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat numquam, quaerat vitae doloribus quas ratione
                laboriosam. Ipsa quidem voluptatem ex temporibus natus iure nam
                earum ullam obcaecati, deserunt vitae non!Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Distinctio quis ullam, itaque
                est et atque sint rem perferendis in fugiat perspiciatis
                repellendus inventore commodi expedita. Eius facere autem
                assumenda quo?
              </p>
              <p class="text-white mb-3 font-ibmflexmono text-xs leading-5 md:text-sm md:leading-6 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat numquam, quaerat vitae doloribus quas ratione
                laboriosam. Ipsa quidem voluptatem ex temporibus natus iure nam
                earum ullam obcaecati, deserunt vitae non!Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Distinctio quis ullam, itaque
                est et atque sint rem perferendis in fugiat perspiciatis
                repellendus inventore commodi expedita. Eius facere autem
                assumenda quo?
              </p>
              <button class="hover:brightness-110 w-full font-bold py-3 px-6 rounded-lg bg-gradient-to-r bg-button-bg text-white text-xl">
                Read More
              </button>
            </div>
            <div class="flex items-center">
              <img class="bg-cover rounded-lg" src={destination} alt="" />
            </div>
          </div>
        </div>

        {/* visi mis section */}
        <div class="items-center gap-5 justify-center flex flex-col relative" style={{maskImage: `linear-gradient(
        to top,
        rgba(255, 0, 0, 0) 0%,
        rgb(69, 211, 22) 12.5%,
        rgb(65, 22, 221) 87.5%,
        rgba(20, 225, 222, 0) 100%
            )`}}>
          <div class="items-center justify-center flex">
            <h1 class="font-bold text-2xl" style={Headercolor}>
              Vision and Mision Gogobali
            </h1>
          </div>

          <div class="flex flex-col lg:flex-row items-center gap-3">
            <div class="border-2  rounded-xl flex-grow items-center flex p-3 h-auto max-w-lg">
              <p class="text-white text-center text-xs leading-5 md:text-sm md:leading-6">
                <span class="text-orange-500 text-xl font-bold">Vision </span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                aspernatur error obcaecati consectetur accusamus rem, magnam
                quos, quibusdam, dicta adipisci tenetur animi enim veniam qui
                vero quae tempora incidunt eos?Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Fugiat, eius officia animi ipsa
                tenetur, libero doloremque eaque aliquam eum, atque tempora.
                Expedita quibusdam sint aliquam. Odio repudiandae suscipit at
                eum.
              </p>
            </div>
            <div class="border-2 rounded-xl flex-grow items-center flex p-3 h-auto max-w-lg">
              <p class="text-white text-center text-xs leading-5 md:text-sm md:leading-6">
                <span class="text-orange-500 text-xl font-bold">Mission </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti omnis corporis amet tenetur consequuntur in nihil
                officiis maiores vel praesentium quia, veritatis modi quaerat
                accusamus incidunt. Nihil corporis possimus atque.Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Fugiat, eius
                officia animi ipsa tenetur, libero doloremque eaque aliquam eum,
                atque tempora. Expedita quibusdam sint aliquam. Odio repudiandae
                suscipit at eum.
              </p>
            </div>
          </div>
        </div>

        <div class="items-center gap-5 justify-center flex flex-col">
          <div class="items-center justify-center flex ">
            <h1 class="font-bold text-2xl" style={Headercolor}>
              Meet Our Team
            </h1>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:justify-items-center">
            <div class="relative w-52 h-auto overflow-hidden">
              <img class="w-full h-full" src={Gungwahbnw} alt="Gungwahbnw" />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img class="w-full h-full" src={Gungwah} alt="Gungwah" />
              </div>
            </div>
            <div class="relative w-52 h-auto overflow-hidden">
              <img class="w-full h-full" src={Devarabnw} alt="Devarabnw" />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img class="w-full h-full" src={Devara} alt="Devara" />
              </div>
            </div>
            <div class="relative w-52 h-auto overflow-hidden">
              <img class="w-full h-full" src={Yandebnw} alt="Yandebnw" />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img class="w-full h-full" src={Yande} alt="Yande" />
              </div>
            </div>
            <div class="relative w-52 h-auto overflow-hidden">
              <img class="w-full h-full" src={Sulihbnw} alt="Sulihbnw" />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img class="w-full h-full" src={Sulih} alt="Sulih" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default aboutcont;
