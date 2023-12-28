import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div >
         <header class="  text-white body-font bg-transparent fixed w-[100%]  ">
  <div class="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
      <img className='h-25 w-28' src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/09/sierra-logo-white.svg"></img>
      
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class=" c mr-8  text-white hover:text-green-400">Features</a>
      <a class=" c mr-8  text-white hover:text-green-400">Pricing</a>
      <a class=" c mr-8  text-white hover:text-green-400">Help</a>
      <a class=" c mr-8  text-white hover:text-green-400">Contact</a>
      <a class=" d mr-8  text-white hover:text-green-400"><CiSearch /></a>
      <a class=" d mr-8  text-white hover:text-green-400"><FiMenu /></a>
      
    </nav>
    <button class="h-12 w-32 rounded-3xl inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-purple-500 text-black  text-base mt-4 md:mt-0">Get Started
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar