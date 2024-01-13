import React from 'react'
import { PiChatsDuotone } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";



const Contact = () => {
  return (
    <section>
    <div className='min-h-[90vh] border-2 hero_bg i '>
      <div className=' text-white text-center mt-48  '>
        <div className='f h'> Connect with us
          </div>
        <div className='h'> <h2 className='b'>Feel free to reach out to us using the options below,and our</h2> </div>
        <h2 className='b'>dedicated team will respond to your inquiries promptly</h2>
        <h2 className='gap-4 h'>Home Contact</h2>
       

      </div>
    </div>
    
    <div className=' ml-32 mr-32 mt-[-200px] '>
        <div className='flex bg-gray-100 rounded-3xl ' >
            <div className=' ml-20 mr-20 w-1/2'>
                <p className='mt-20 text-left c text-black '>Contact Us</p>
                <h1 className='mt-5 k text-left text-black'>How can we help?</h1>
                <p className='text-left mt-5 c text-gray-500'>Have a question? Fill out the form below,and</p>
                <p className='c text-left text-gray-500'>we'll get back to you as soon as possible.</p>
               <div className=' mt-10  flex flex-col gap-6'>
                <input className='h-12 rounded-xl p-5' type="text"  placeholder='Name'></input>
                <input className='h-12 rounded-xl p-5' type="text"  placeholder='Email Address'></input>
                <textarea className='h-36 rounded-xl p-5' type="text" placeholder='Message'></textarea>
                <button className='bg-green-400 rounded-xl h-12'>Submit</button>
                </div>

            </div>

            <div className='j h-[700px] w-[750px]  '>
            <p className=' d mt-[500px] text-white text-left ml-10'>This software simplifies the website building  </p>
            <p className='d text-white text-left ml-10'>process, making it a breeze to manage our</p>
            <p className='d text-white text-left ml-10'>online presence.</p>
            <p className='d text-white ml-10 text-left'>Claire Olson</p>
            <p className='d text-white ml-10 text-left'>Founder & CEO</p>
            </div>
            
        </div>
    
    </div>

    <div>
    <div className="   text-center">
              <div className="p-28 md:w-1/3  w-full flex gap-28 ">
                <div className=" rounded-lg flex gap-5">
                  <svg className="text-white h-20  w-48 rounded-xl  bg-violet-500 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <div className=''>
                  <h2 className=" d mt-2 text-left title-font   text-gray-900">Knowledge hub</h2>
                  <p className=" c mt-2 text-left text-gray-400 ">A comprehensive repository of knowledge designed to address your queries.</p>
                  </div>
                 
                </div>
                <div className=" rounded-lg flex gap-5">
                  <svg className="text-white h-20  w-48 rounded-xl  bg-violet-500 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <div className=''>
                  <h2 className=" d mt-2 text-left title-font   text-gray-900">Chat to sales</h2>
                  <p className=" c mt-2 text-left text-gray-400 ">Get detailed information about our products,pricing,and any current promotions</p>
                  </div>
                 
                </div>

                <div className=" rounded-lg flex gap-5">
                  <svg className="text-white h-20  w-48 rounded-xl  bg-violet-500 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <div className=''>
                  <h2 className=" d mt-2 text-left title-font   text-gray-900">Call for assistance</h2>
                  <p className=" c mt-2 text-left text-gray-400 ">Our support team is available to answer your questions,and provide technical help.</p>
                  </div>
                 
                </div>
              </div>
             
             
 
            </div>
          </div>
    
    <div className='bg-gray-100'>
    <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:tart md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className=' c mt-0 text-black'>Our Locations</h1>
              <h1 className="f e mt-2  sm:text-4xl  mb-4  text-gray-900">Planning a visit?
                <br className="hidden lg:inline-block" />How you can <span className='text-green-400'>find us</span>.
              </h1>
              <p className='b text-gray-500'>Whether you're attending a scheduled meeting, </p>
             <p className='b text-gray-500'> workshop, or just dropping by, use the following</p>
             <p className='b text-gray-500'>directions to reach our office.</p>

             <p className='b mt-8 text-black'>Address:</p>
             <p className='b text-gray-500'>15 Washington Square</p>
             <p className='b text-gray-500'>New York,NY 10075,USA</p>

             <p className='b mt-8 text-black'>Working hours:</p>
             <p className='b text-gray-500'>Monday-Friday:8AM - 5PM</p>
            </div>


            <div className="  lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div class="">
    <iframe width="110%" height="500px" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4);"}}></iframe>
  </div>
  </div>
          </div>
        </section>
    </div>

    <div className='min-h-[75vh]  hero_bg'>
          <div className='pt-20'>
            <p className='c mt-10 text-white '>Launch with ease</p>
            <p className='f  text-white'>Ready to get started?</p>
            <p className='f text-white'>Start your free trial now</p>
            <p className='b text-white'>Elevate sales and stay ahead in the competitive market by being </p>
            <p className='b text-white'>among the first to benefit from our game-changing solutions.</p>
            <div className='flex gap-2 '>

              <button className="l flex gap-3 ml-[550px] c h-14 w-48 mt-10 rounded-3xl    bg-green-400 border-0 py-3 px-6 focus:outline-none hover:bg-violet-500 hover:text-white text-black  text-base  ">Start free trial<FaRegArrowAltCircleRight />
              </button>
              <button className="l flex gap-3 c h-14 w-48 mt-10 rounded-3xl    bg-white border-0 py-3 px-6 focus:outline-none hover:bg-violet-500 hover:text-white text-black  text-base  ">How its work<IoMdArrowDroprightCircle />
              </button>
            </div>
          </div>
        </div>
    

    <div className='flex bg-white border-2 '>
          <div className=' ml-28 flex gap-4 mt-10 mb-10'>
            <p className='text-gray-400 hover:text-green-400'>Terms</p>
            <p className='text-gray-400 hover:text-green-400'>Pricing</p>
            <p className='text-gray-400 hover:text-green-400'>Help</p>
            <p className='text-gray-400 hover:text-green-400'>Contact</p>

          </div>
          <div className='flex  bg-white gap-2 ml-[600px]'>
            <button className="l  gap-2 flex c h-8 w-32 mt-10 rounded-3xl    bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-violet-500 hover:text-white text-black  text-base  "><FaFacebookF />Facebook
            </button>
            <button className="l  gap-2 flex c h-8 w-32 mt-10 rounded-3xl    bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-violet-500 hover:text-white text-black  text-base  "><FaTwitter />Twitter
            </button>
            <span className='g'><button className=" l gap-2 
            inline-flex 
            c h-8 w-32 mt-10 rounded-3xl 
               bg-green-400 border-0 py-1 px-3 
               focus:outline-none hover:bg-violet-500 hover:text-white
                text-black  text-base  "><FaInstagram /><p>Instagram</p>
            </button></span>
          </div>
        </div>
    </section>


  )
}

export default Contact