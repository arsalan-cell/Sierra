import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { PiChatsDuotone } from "react-icons/pi";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FcCollapse } from "react-icons/fc";

const Feature = () => {
 
  return (
    <section>
    <div className='min-h-[90vh] border-2 hero_bg i '>
      <div className=' text-white text-center mt-48  '>
        <div className='f h'> Our services and solutions
          </div>
        <div className='h'> <h2 className='b'>Discover how our tech solutions can transform your 20 Business, </h2> </div>
        <h2 className='b'>Explore our features and take business to new heights.</h2>
        <h2 className='gap-4 h'>Home Features</h2>
      
      </div>
    </div>


    <div className=' ml-32 mr-32 mt-[-200px] '>
        <div className='flex bg-gray-100 rounded-3xl ' >
            <div className=' ml-20 mr-20 w-1/2'>
                <p className='mt-28 text-left c text-black '>Intuitive Dashboard</p>
                <h1 className=' mt-5 f h text-left text-green-400'>Smart insights,</h1>
                <h1 className=' f h text-left text-black'>better business</h1>
                <h1 className=' f h text-left text-black'>strategy</h1>
                <p className='text-left mt-5 c text-gray-500'>Visualize data,track sales,and analyze customer</p>
                <p className='c text-left text-gray-500'>behavior ,empowering you to make dacisions.</p>
                <div className='text-left'><button className=" gap-2 h-16 items-center  w-48 mt-6 rounded-3xl inline-flex text-black bg-green-400  py-2 px-6  hover:bg-violet-500 hover:text-white">Learn More<FaRegArrowAltCircleRight /></button></div>
                
                <div className=' flex ' >
            <p className=' l mt-12  flex gap-2 text-gray-500 '> <span className='text-green-400'><FaRegCheckCircle /></span> Flexible solution</p>
            <p className='l mt-12 ml-4  flex gap-2 text-gray-500'> <span className='text-green-400'><FaRegCheckCircle /></span>Setup in seconds</p>
            
          </div>

            </div>

            <div className='mr-20'>
               <div className =' flex gap-2'>
         <div className='mt-10'><img className='h-72 w-72 gap-5 rounded-2xl' src="  https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-9.png" alt="1"/></div>  
         <div className='mt-10 '><img className='h-60 rounded-2xl ' src="  https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-5.png" alt="3" /></div> 
          

               </div>
              <div className=' flex gap-2'>
             <div className='mt-2'> <img className=' gap-2 h-72 w-72 rounded-2xl' src="   https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-3.png" alt="2" /></div>
             <div className='mt-[-40px] '> <img className='h-60 rounded-2xl' src="   https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-6.png" alt="4" /></div>
             
              </div>

              <div className='flex  '>
              <img className=' h-16 mt-[-80px] ml-60 mb-20 rounded-2xl '  src="   https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-7.png" alt="5" />
              </div>
            </div>      
        </div>
    </div>


    <div>
    <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className=" p-10 bg-gray-100 object-cover object-center rounded-2xl" alt="hero" src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-10.png" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16   md:text-left  ">
              <p className='c text-black'>Affiliate Center</p>
              <h1 className=" f mt-2 sm:text-4xl  mb-4  text-black"> <span className='text-green-400'>Maximize</span>your
                <br className="hidden lg:inline-block" />affiliate marketing<br/>efforts
              </h1>
              <p className=" b mb-8 leading-relaxed">Moniter activities,track conversions, and optimize <br className="hidden lg:inline-block" />performance, all from a user-friendly dashboard.</p>
            
             <div className='rounded-2xl bg-gray-100  h-[80px] w-[450px] '>
              <p className='text-black px-5 py-2 hover:text-green-400'>Real-time tracking</p>
              <p className='px-5'>Moniter activities and conversions instantly</p>
             <div className='mt-[-45px]'><button className='border-2 bg-white text-green-400 h-10 w-10 py-2 px-2 rounded-xl ml-96 '><FaArrowRight /></button></div> 

             </div>

             <div className='rounded-2xl bg-gray-100 mt-5 h-[80px] w-[450px]'>
              <p className='text-black px-5 py-2 hover:text-green-400'>Performance analytics</p>
              <p className='px-5'>Identify top performers,and optimize.</p>
              <div className='mt-[-45px]'><button className='border-2 bg-white text-green-400 h-10 w-10 py-2 px-2 rounded-xl ml-96 '><FaArrowRight /></button></div> 
             </div>

             <div className='rounded-2xl bg-gray-100 mt-5 h-[80px] w-[450px]'>
              <p className='text-black px-5 py-2 hover:text-green-400'>Payout automation</p>
              <p className='px-5'>Seamless and timely transactions</p>
              <div className='mt-[-45px]'><button className='border-2 bg-white text-green-400 h-10 w-10 py-2 px-2 rounded-xl ml-96 '><FaArrowRight /></button></div> 
             </div>

            </div>
          </div>
        </section>
    </div>
 
    <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className=' c mt-0 text-black'>Sales Analytics</h1>
              <h1 className="f mt-2  sm:text-4xl  mb-4  text-gray-900"><span className='text-green-400'>Powerful tools</span>to
                <br className="hidden lg:inline-block" />boost your online <br/> sales
              </h1>
              <p className="b mb-8 leading-relaxed">Analyze sales data,optimize pricing strategies,and  <br className="hidden lg:inline-block" />identify opportunities for revenue growth.</p>
             
              <div className='rounded-2xl bg-gray-100 mt-5 h-[80px] w-[450px]'>
              <p className='text-black px-5 py-2 hover:text-green-400'>Powerful task management</p>
              <p className='px-5'>Stay organized,collaborte seamless.</p>
              <div className='mt-[-45px]'><button className='border-2 bg-white text-green-400 h-10 w-10 py-2 px-2 rounded-xl ml-96 '><FaArrowRight /></button></div> 
             </div>

             <div className='rounded-2xl bg-gray-100 mt-5 h-[80px] w-[450px]'>
              <p className='text-black px-5 py-2 hover:text-green-400'>Intuitive project overview</p>
              <p className='px-5'>Streamline communication,track progress.</p>
              <div className='mt-[-45px]'><button className='border-2 bg-white text-green-400 h-10 w-10 py-2 px-2 rounded-xl ml-96 '><FaArrowRight /></button></div> 
             </div>

             <div className='rounded-2xl bg-gray-100 mt-5 h-[80px] w-[450px]'>
              <p className='text-black px-5 py-2 hover:text-green-400'>Analyze and track traffic</p>
              <p className='px-5'>Unlock insights and optimize strategies.</p>
              <div className='mt-[-45px]'><button className='border-2 bg-white text-green-400 h-10 w-10 py-2 px-2 rounded-xl ml-96 '><FaArrowRight /></button></div> 
             </div>
            </div>
            <div className="  lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="  p-10 bg-gray-100 rounded-2xl bg-center object-center " alt="hero" src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-12.png" />
            </div>
          </div>
        </section>

        <div className='bg-gray-100'>
        <section class=" body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 class="   title-font mb-2 text-gray-900">All Features</h1>
      <h1 className='f h text-black'>Discover everything <br/> you can do with <span className='text-green-400'>Sierra</span></h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 mt-5">Explore our suite of feature designed to streamline your operations,drive sales,and enhance customer satisfaction.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border bg-white p-6 rounded-lg">
          <div class="mt-8 w-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-violet-500 mb-4">
          <svg className="text-white h-20  w-48 rounded-xl  bg-violet-500 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
          </div>
          <h2 class="d text-lg text-gray-900 font-medium title-font mb-2">Solid planning</h2>
          <p class="text-gray-400 mb-8">Get free access to our global partner network and marketplace to receive premium assistance.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border bg-white p-6 rounded-lg">
          <div class="mt-8 w-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-violet-500 mb-4">
          <svg className="text-white h-20  w-48 rounded-xl  bg-violet-500 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
          </div>
          <h2 class="d text-lg text-gray-900 font-medium title-font mb-2">The Collaboration tools</h2>
          <p class="text-gray-400 mb-8">Keep your strategic goals and planning in one place to improve employee engagement.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border bg-white p-6 rounded-lg">
          <div class="mt-8 w-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-violet-500 mb-4">
          <svg className="text-white h-20  w-48 rounded-xl  bg-violet-500 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
          </div>
          <h2 class="d text-lg text-gray-900 font-medium title-font mb-2">Data Protection</h2>
          <p class="text-gray-400 mb-8">Define each stage of work to see what's important and where things are getting stuck.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border bg-white p-6 rounded-lg">
          <div class="mt-8 w-20  inline-flex items-center justify-center rounded-full bg-violet-500 text-violet-500 mb-4">
          <svg className="text-white h-20  w-48 rounded-xl  bg-violet-500 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
          </div>
          <h2 class="d text-lg text-gray-900 font-medium title-font mb-2">Quality scores</h2>
          <p class="text-gray-400 mb-8">Keep your strategic goals and planning in one place to improve employee engagement.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border bg-white p-6 rounded-lg">
          <div class="mt-8 w-20  inline-flex items-center justify-center rounded-full bg-violet-500 text-violet-500 mb-4">
          <svg className="text-white h-20  w-48 rounded-xl  bg-violet-500 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
          </div>
          <h2 class="d text-lg text-gray-900 font-medium title-font mb-2">Software support</h2>
          <p class="text-gray-400 mb-8">Define each stage of work to see what's important and where things are getting stuck</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4 ">
        <div class="border bg-white p-6 rounded-lg ">
          <div class=" mt-8 mb-4 w-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-violet-500 ">
          <svg className="text-white h-20  w-48 rounded-xl  bg-violet-500 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
          </div>
          <h2 class="d text-lg text-gray-900 font-medium title-font mb-2">Management help</h2>
          <p class="text-gray-400 mb-10 ">From the small stuff to the big picture we organize work so teams know what to do.</p>
        </div>
      </div>
    </div>
   
  </div>
</section>
        </div>

        <div className='min-h-[75vh]  hero_bg'>
          <div className='pt-20'>
            <p className='c mt-10 text-white '>Launch with ease</p>
            <p className='f  text-white'>Seize the opportunity-</p>
            <p className='f text-white'><span className='text-green-400'>empower</span>your business</p>
            <p className='b text-white'>Experience the ease of automation,the power of analytics,and the </p>
            <p className='b text-white'>impact of seamless integration.Your journey begins now!</p>
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
            <button className="l gap-2 flex c h-8 w-32 mt-10 rounded-3xl    bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-violet-500 hover:text-white text-black  text-base  "><FaFacebookF />Facebook
            </button>
            <button className="l gap-2 flex c h-8 w-32 mt-10 rounded-3xl    bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-violet-500 hover:text-white text-black  text-base  "><FaTwitter />Twitter
            </button>
            <span className='g'><button className="l gap-2 
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

export default Feature