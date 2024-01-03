import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

const Feature = () => {
  return (
    <section>
    <div className='min-h-[90vh] border-2 hero_bg i '>
      <div className=' text-white text-center mt-48  '>
        <div className='f h'> Our services and solutions
          </div>
        <div className='h'> <h2 className='b'>Discover how our tech solutions can transform your 20Business, </h2> </div>
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
                <div className='text-left'><button className=" gap-2 h-16 items-center  w-48 mt-6 rounded-3xl inline-flex text-black bg-green-400 py-2 px-6  hover:bg-indigo-400">Learn More<FaRegArrowAltCircleRight /></button></div>
                
                <div className=' flex ' >
            <p className='  mt-12  flex gap-2 text-gray-500 '> <span className='text-green-400'><FaRegCheckCircle /></span> Flexible solution</p>
            <p className=' mt-12 ml-4  flex gap-2 text-gray-500'> <span className='text-green-400'><FaRegCheckCircle /></span>Setup in seconds</p>
            
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
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className=" p-14 bg-gray-100 object-cover object-center rounded-2xl" alt="hero" src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-10.png" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <p className='c text-black'>Affiliate Center</p>
              <h1 className=" f mt-2 sm:text-4xl  mb-4  text-black"> <span className='text-green-400'>Maximize</span>your
                <br className="hidden lg:inline-block" />affiliate marketing<br/>efforts
              </h1>
              <p className=" b mb-8 leading-relaxed">Moniter activities,track conversions, and optimize <br className="hidden lg:inline-block" />performance, all from a user-friendly dashboard.</p>
            
             <div className='rounded-2xl bg-gray-100  h-30'>
              <p className='text-black px-5'>Real-time tracking</p>
              <p className='px-5'>Moniter activities and conversions instantly</p>
             </div>

             <div className='rounded-2xl bg-gray-100 mt-5'>
              <p className='text-black px-5'>Performance analytics</p>
              <p className='px-5'>Identify top performers,and optimize.</p>
             </div>

             <div className='rounded-2xl bg-gray-100 mt-5 '>
              <p className='text-black px-5'>Payout automation</p>
              <p className='px-5'>Seamless and timely transactions</p>
             </div>

            </div>
          </div>
        </section>
    </div>
    
    </section>
  )
}

export default Feature