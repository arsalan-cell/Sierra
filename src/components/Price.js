import React,{useState} from 'react'
import { FcCollapse } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";


const Price = () => {
  
  const [open1,setOpen1] = useState(false)
  const [open2,setOpen2] = useState(false)
  const [open3,setOpen3] = useState(false)
  const [open4,setOpen4] = useState(false)
  const [open5,setOpen5] = useState(false)
  const [open6,setOpen6] = useState(false)

  return (
    <section>
    <div className='min-h-[90vh] border-2 hero_bg i '>
      <div className=' text-white text-center mt-48  '>
        <div className='f h'>Predictable,transparent pricing
          </div>
        <div className='h'> <h2 className='b'>Whether you're an individual, a small team,or a growing</h2> </div>
        <h2 className='b'>enterprise,we have a plan that aligns perfectly with your goals</h2>
        <h2 className='gap-4 h'>Home Pricing</h2>
       

      </div>
    </div>

    <div className="flex flex-wrap -m-4 ml-0  ">
              <div className="p-4 xl:w-1/3  w-full ">
                <div className=" bg-gray-100 h-full  rounded-lg  ">
                  <p className='mb-5 text-gray-100'>.</p>
                  <p className='text-3xl text-black ml-10 text-left font-bold  mb-5'>Personal</p>
                  <p className='mb-5  text-black ml-10 text-left'>Task management,collaboration tools,and basic reporting</p>
                  <p className='mb-5  text-black ml-10 text-left'>Efficient organization and streamlined communication</p>
                  <p className='mb-5 text-black ml-10 text-left'>Users can manage up to 5 projects</p>

                  <h1 className="text-3xl ml-10 text-left text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span className="text-lg ml-1 font-normal text-black">$</span>
                    <span>19</span>
                    <span className="text-lg ml-1 font-normal text-black">/month</span>
                  </h1>
                  <button className="h-14 w-80 mt-8 mb-6 rounded-2xl  bg-white hover:bg-indigo-400  text-black">Purchase now</button>

                </div>
              </div>

              <div className="p-4 xl:w-1/3 md:w-1/2 w-full ">
                <div className="bg-gray-100 h-full  rounded-lg  ">

                  <p className='mb-5 text-gray-100'>.</p>
                  <p className='text-3xl text-black ml-10 text-left font-bold  mb-5'>Professional</p>
                  <p className='mb-5 text-black ml-10 text-left'>Advanced reporting,priority support,and customization options</p>
                  <p className='mb-5 text-black ml-10 text-left'>Better insights,tailored workflows,and enhanced collaboration</p>
                  <p className='mb-5 text-black ml-10 text-left'>Users can manage up to 15 projects</p>

                  <h1 className="text-3xl ml-10 text-left text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span className="text-lg ml-1 font-normal text-black">$</span>
                    <span>49</span>
                    <span className="text-lg ml-1 font-normal text-black">/month</span>
                  </h1>
                  <button className="h-14 w-80 mt-8 rounded-2xl  bg-green-400 hover:bg-indigo-400  text-black">Purchase now</button>


                </div>
              </div>
              <div className="p-4 xl:w-1/3 md:w-1/2 w-full ">
                <div className="bg-gray-100 h-full  rounded-lg ">
                  <p className='mb-5 text-gray-100'>.</p>
                  <p className='text-3xl text-black ml-10 text-left font-bold  mb-5'>Enterprise</p>
                  <p className='mb-5 text-black ml-10 text-left'>Real-time analytics, a dedicated account manager,and API access</p>
                  <p className='mb-5 text-black ml-10 text-left'>Project management capabilities and strategic decision-making</p>
                  <p className='mb-5 text-black ml-10 text-left'>Users can manage unlimited projects</p>
                  <h1 className="text-3xl text-gray-900 ml-10 text-left leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span className="text-lg ml-1 font-normal text-black">$</span>
                    <span>99</span>
                    <span className="text-lg ml-1 font-normal text-black">/month</span>
                  </h1>
                  <button className="h-14 w-80 mt-8 rounded-2xl  bg-white hover:bg-indigo-400  text-black">Purchase now</button>

                </div>
              </div>
            </div>








    
    <div className='bg-white'>
        <div className="flex flex-col  w-full mb-20">
          <p className='c mt-24'>We've got answers</p>
          <h1 className=" f mt-6 sm:text-4xl font-medium title-font mb-2 text-gray-900">Any doubts? <span className='text-green-400'>We're here to help</span> </h1>
          <p className=" b mt-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Browse through our frequently asked questions to find answers</p>
          <p className='b text-gray-500'>regarding our products and billing processes.</p>

          <div className=''>
            <div className='flex h-16  mt-14 gap-6 '>
              <div className='bg-gray-100 w-[600px] rounded-2xl ml-32'>
                <p className='mr-80 mt-5'>1.Is there a free trial available?</p>
                <p className='px-[550px] mt-[-15px]' onClick={() => setOpen1(!open1)}><FcCollapse /></p>
                <div >
                 
                  {open1 && (
                     <div>
                     <h1 className='mt-5 text-gray-500' >Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.</h1> 
                      </div>
                  )}

                </div>

              </div>

              <div className='bg-gray-100 w-[600px] rounded-2xl '>
                <p className='mr-80 mt-5'>4.Can other info be added to an invoice?</p>
                <p className='px-[550px] mt-[-40px]' onClick={() => setOpen4(!open4)}><FcCollapse /></p>
                <div >
                  
                  { open4 && (
                  <h1 className='mt-5 text-gray-500'>At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.</h1> 
                 ) }
                </div>
              </div>
            </div>

            <div className='flex h-16  mt-12 gap-6'>
              <div className='bg-gray-100 w-[600px]  rounded-2xl ml-32'>
                <p className='mr-80  mt-5'>2.Can I change my plan later?</p>
                <p className="px-[550px] mt-[-15px]" onClick={() => setOpen2(!open2)}><FcCollapse /></p>
                <div >
                  
                  { open2 && (
                     <h1 className='mt-5 text-gray-500'>Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.</h1> 
                  )}
                </div>
              </div>
              <div className='bg-gray-100 w-[600px] rounded-2xl'>
                <p className='mr-80 mt-5'>5.How does billing work?</p>
                <p className='px-[550px] mt-[-20px]' onClick={() => setOpen5(!open5)}><FcCollapse /></p>
                <div >
                  
                  {open5 && (
                     <h1 className='mt-5 text-gray-500'>Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.</h1> 
                  )}
                </div>
              </div>
            </div>

            <div className='flex h-16 mt-12 gap-6 mb-20 '>
              <div className='bg-gray-100 w-[600px] rounded-2xl ml-32 ' >
                <p className='mr-80 mt-5'>3.What is your cancellation policy?</p>
                <p className='px-[550px] mt-[-15px]' onClick={() => setOpen3(!open3)}><FcCollapse /></p>
                <div >
                
                  {open3 && (
                     <h1 className='mt-5 text-gray-500'>We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.</h1> 
                  )}
                </div>
              </div>

              <div className='bg-gray-100 w-[600px] rounded-2xl text-center'>
                <p className='mr-80 mt-5'>6.How do I change my account email?</p>
                <p className='px-[550px] mt-[-40px]' onClick={() => setOpen6(!open6)}><FcCollapse /></p>
                <div >
                 
                  {open6 && (
                     <h1 className='mt-5 text-gray-500'>You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.</h1> 
                 

                 ) }
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>



        <div className='min-h-[75vh]  hero_bg'>
          <div className='pt-20'>
            <p className='c mt-10 text-white '>Launch with ease</p>
            <p className='f  text-white'>Ready to <span className='text-green-400'>get started</span>?</p>
            <p className='f text-white'>Start your free trial now</p>
            <p className='b text-white'>Elevate sales and stay ahead in the competitive market by being </p>
            <p className='b text-white'>among the first to benefit from our game-changing solutions.</p>
            <div className='flex gap-2 '>

              <button className="l flex gap-3 ml-[550px] c h-14 w-48 mt-10 rounded-3xl    bg-green-400 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-400 text-black  text-base  ">Start free trial<FaRegArrowAltCircleRight />
              </button>
              <button className="l flex gap-3 c h-14 w-48 mt-10 rounded-3xl    bg-white border-0 py-3 px-6 focus:outline-none hover:bg-indigo-400 text-black  text-base  ">How its work<IoMdArrowDroprightCircle />
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
            <button className="l gap-2 flex c h-8 w-32 mt-10 rounded-3xl    bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 text-black  text-base  "><FaFacebookF />Facebook
            </button>
            <button className="l gap-2 flex c h-8 w-32 mt-10 rounded-3xl    bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 text-black  text-base  "><FaTwitter />Twitter
            </button>
            <span className='g'><button className="l gap-2 
            inline-flex 
            c h-8 w-32 mt-10 rounded-3xl 
               bg-green-400 border-0 py-1 px-3 
               focus:outline-none hover:bg-indigo-400
                text-black  text-base  "><FaInstagram /><p>Instagram</p>
            </button></span>
          </div>
        </div>
   
    
    
    </section>
  )
}

export default Price