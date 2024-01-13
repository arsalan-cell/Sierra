
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [header,setHeader] = useState(false);
  const scrollHeader = ()=>{
   if(window.scrollY >=20){
     setHeader(true)
   }else{
    setHeader(false)
   }
  }

useEffect(()=>{
  window.addEventListener('scroll',scrollHeader)

  return ()=>{
    window.addEventListener('scroll',scrollHeader)
  }
},[])


  return (
    <div className='fixed w-[100%] mt-2' >
         <header class={ header ? "fixed w-[100%] bg-[black]" : "bg-[transparent]"  } >
  <div class="  container mx-auto flex flex-wrap p-5 flex-col sm:ml-5 md:flex-row items-center xl:ml-20">
    <Link to="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
      <img className='h-25 w-28' src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/09/sierra-logo-white.svg" alt='1'></img>
      
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/feature" className=" c mr-8  text-white hover:text-green-400">Features</Link>
      <Link to="/price" className=" c mr-8  text-white hover:text-green-400">Pricing</Link>
      <Link to="/help" className=" c mr-8  text-white hover:text-green-400">Help</Link>
      <Link to="/contact" className=" c mr-8  text-white hover:text-green-400">Contact</Link>
      <a class=" d mr-8  text-white hover:text-green-400"><CiSearch /></a>
      <a class=" d mr-8  text-white hover:text-green-400"><FiMenu /></a>
      
    </nav>
    <button class="h-12 w-32 rounded-3xl inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-violet-500 hover:text-white text-black  text-base mt-4 md:mt-0">Get Started
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar