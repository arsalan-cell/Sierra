import React from 'react'


const Navbar = () => {
  return (
    <div >
         <header class="  text-white-600 body-font bg-black ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2  rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class=" text-white font-sans text-white-500 text-2xl ">Sierra</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-lg text-white hover:text-green-400">Features</a>
      <a class="mr-5 text-lg text-white hover:text-green-400">Pricing</a>
      <a class="mr-5 text-lg text-white hover:text-green-400">Help</a>
      <a class="mr-5 text-lg text-white hover:text-green-400">Contact</a>
      
    </nav>
    <button class=" rounded-2xl inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-purple-500 text-white  text-base mt-4 md:mt-0">Get Started
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar