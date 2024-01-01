import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaRegCheckCircle } from "react-icons/fa";
import { PiChatsDuotone } from "react-icons/pi";
import { FcCheckmark } from "react-icons/fc";
import { FcCollapse } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";


const Homepage = () => {
  const [show, setShow] = useState(true)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1

  };
  const data = [
    {
      name: `Safaa Sampson`,
      img: `/im.jpeg`,
      position: `Project Manager`,
      description: `Our project completion rates increased by 45% after implementing this app.Its automation engine saved us 20 hours weekly,allowing us to focus on strategic planning and client satisfaction.`,
    },
    {
      name: `Frederic Hill`,
      img: `/im.jpeg`,
      position: `Operations Director`,
      description: `This software streamlined our workflow,reducing project errors by 60% and enhancing team collaboraton.Our revenue grew by 35%,and client satisfction reached an all-time high of 98%.`,
    },
    {
      name: `Brendan Buck`,
      img: `/im.jpeg`,
      position: `Marketing Specialist`,
      description: `Our marketing campaigns became 30% more effective due to precise analytics and collaboration tools.Task completion times halved,resulting in a 25% boost in customer engagement.`,
    },
    {
      name: `Stefan Ball`,
      img: `/im.jpeg`,
      position: `Strategic planner`,
      description: `The real-time dashboards provided us with invaluable insights,enabling proactive decision-making.Project delays reduced by 40%,and our teams' productiity increased by 50%.`,
    },
    {
      name: `Paige Lowery`,
      img: `/im.jpeg`,
      position: `Project Coordinator`,
      description: `Automation simplified our repetitive tasks,leading to a 30% reduction in errors.Collaboration tools promoted seamless communication,resulting in a 25% improvement in project coordination.`,
    },
    {
      name: `Frances Barr`,
      img: `/im.jpeg`,
      position: `Operations Manager`,
      description: `Our operational efficiency increased by 55% with this app.Its customization options tailoredthe software to our unique needs,saving us 15% in operational costs and increasing client satisfactin by 45%.`,
    }
  ]
  return (

    <section>
      <div className='min-h-[100vh] border-2 hero_bg'>
        <div className='absolute text-white text-center mt-40 ml-96 '>
          <div className='e'> <h2 className='a'><span className="text-green-400">Streamline</span> your projects,</h2>
            <h2 className='a '>empower your team</h2> </div>
          <div className='e'> <h2 className='b '>Efficient planning,seamless collaboration, and top-notch</h2> </div>
          <h2 className='b'>data protection-all in one place</h2>
          <button className=" c h-14 w-48 mt-10 rounded-3xl  items-center  bg-white border-0 py-1 px-3 focus:outline-none hover:bg-green-400 text-black  text-base  ">Start free trial
          </button>
          <div className='text-center flex ' >
            <p className='  mt-12 ml-32 flex gap-2 '> <span className='text-green-400'><FaRegCheckCircle /></span> 3-day Free Trial</p>
            <p className=' mt-12 ml-4  flex gap-2 '> <span className='text-green-400'><FaRegCheckCircle /></span>No Credit Card</p>
            <p className=' mt-12 ml-4  flex gap-2'> <span className='text-green-400'><FaRegCheckCircle /></span>Cancel Anytime</p>
          </div>

        </div>
      </div>



      <div className=' bg-slate-100' >
        <div className='flex gap-5 ml-32 mr-32  '>

          <div className='mt-[-72px]'> <  img className='rounded-2xl ' src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-3.png " alt="1" /></div>
          <div className='flex flex-col gap-5 mt-[-100px]  '> <img className='rounded-2xl' src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-6.png" alt="6" />
            <img className='rounded-2xl' src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-7.png" alt="2" />
          </div>
          <div className='flex flex-col gap-5 mt-[-100px] '> <img className='rounded-2xl' src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-7.png" alt="3" />
            <img className='rounded-2xl' src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-5.png" alt="4" />
          </div>
          <div className='mt-[-72px]'> <img className='rounded-2xl' src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-9.png" alt="5" /></div>
        </div>


        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h5 className=" c sm:text-1xl mb-4 text-gray-900">Project management essentials</h5>
              <h1 className=" f sm:text-5xl mb-4 text-gray-900">Plan,execute,and track</h1>
              <h5 className=" f sm:text-5xl mb-4 text-gray-900">projects of <span className='text-green-400'>any size</span></h5>
              <h5 className=" b lg:w-2/3 mx-auto leading-relaxed text-base">Our app offers solid planning tools,seamless collaboration features,<br /> robust data protection,and unparalleled software support</h5>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                  <svg className="text-white mr-32 w-20 rounded-xl  bg-indigo-400 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <h2 className=" d mt-2 text-left title-font   text-gray-900">Solid planning</h2>
                  <p className=" c mt-2 text-left leading-relaxed">From the small stuff to the big picture ,we organize work</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                  <svg className="text-white mr-32 w-20 rounded-xl  bg-indigo-400 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <h2 className=" d mt-2 text-left title-font   text-gray-900">Collaboration tools</h2>
                  <p className=" c mt-2 text-left leading-relaxed">From the small stuff to the big picture ,we organize work</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                  <svg className="text-white mr-32 w-20 rounded-xl  bg-indigo-400 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <h2 className=" mt-2 d text-left title-font   text-gray-900">Data protection</h2>
                  <p className=" mt-2 c text-left leading-relaxed">From the small stuff to the big picture ,we organize work</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                  <svg className="text-white mr-32 w-20 rounded-xl  bg-indigo-400 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <h2 className=" mt-2 d text-left title-font   text-gray-900">Software support</h2>
                  <p className=" mt-2 c text-left leading-relaxed">From the small stuff to the big picture ,we organize work</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className=' c mt-0 text-black'>Real-time analytics</h1>
              <h1 className="f mt-2  sm:text-4xl  mb-4  text-gray-900">Check project progress
                <br className="hidden lg:inline-block" />and <span className='text-green-400'>performance</span>
              </h1>
              <p className="b mb-8 leading-relaxed">Boost productivity,optimize workflows,and make  <br className="hidden lg:inline-block" /> data-driven decisions effortlessly</p>
              <p className='b  text-black gap-2 flex '><FcCheckmark />Performance tracking</p>
              <p className='b  text-black gap-2 flex'><FcCheckmark />Resource optimization</p>
              <p className='b  text-black gap-2 flex'><FcCheckmark />Prediction analytics</p>
              <div className="flex justify-center mt-6">
                <button className="gap-2 h-12 w-40 mt-6 rounded-3xl inline-flex text-black bg-green-400  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-white ">Learn More <FaRegArrowAltCircleRight /></button>

              </div>
            </div>
            <div className="  lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="  p-14 bg-gray-100 rounded-2xl bg-center object-center " alt="hero" src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-10.png" />
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className=" p-14 bg-gray-100 object-cover object-center rounded-2xl" alt="hero" src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-12.png" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <p className='c text-black'>Seamless workflows</p>
              <h1 className=" f mt-2 sm:text-4xl  mb-4  text-gray-900">Powerful and intuitive
                <br className="hidden lg:inline-block" /><span className='text-green-400'>automation</span> engine
              </h1>
              <p className=" b mb-8 leading-relaxed">Automate repetitive tasks,Streamline processes,and <br className="hidden lg:inline-block" /> enhance productivity without powerful tools</p>
              <p className='b text-black gap-2 flex'><FcCheckmark />Workflow streamlining</p>
              <p className='b text-black gap-2 flex'><FcCheckmark />Task prioritization</p>
              <p className='b text-black gap-2 flex'><FcCheckmark />Notification system</p>
              <div className="flex justify-center mt-6">
                <button className=" gap-2 h-12 w-40 mt-6 rounded-3xl inline-flex text-black bg-green-400  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-white ">Learn More<FaRegArrowAltCircleRight /></button>

              </div>
            </div>
          </div>
        </section>
      </div>


      <div className='min-h-[180vh] border-2 hero_bg'>
        <section className="text-white body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <p>project management</p>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Your projecthub,<span className='text-green-400'>simplified</span></h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Consolidate your project management tools into one powerful app.Enjoy effortless organization and intelligent automation.</p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">

                  <h2 className="text-left title-font font-medium text-3xl text-white">Tracking</h2>
                  <p className="text-left leading-relaxed">we create functional and intuitive interfaces and apps for desktop</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">

                  <h2 className="text-left title-font font-medium text-3xl text-white">Collaboration</h2>
                  <p className="text-left leading-relaxed">You need a reliable backend application that is fast and scales</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">

                  <h2 className="text-left title-font font-medium text-3xl text-white">Workflow</h2>
                  <p className="text-left leading-relaxed">Using an app that scales easily you don't need to create</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">

                  <h2 className="text-left title-font font-medium text-3xl text-white">Automation</h2>
                  <p className="text-left leading-relaxed">we'll execute,moniter and improve your campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='bg-blur min-h-[60vh] ml-24 mr-24 bg-white/10'>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <p className='text-white'>Lunch with ease</p>
                <h1 className="text-white title-font sm:text-4xl text-3xl mb-4 font-medium ">Take <span className='text-green-400'>quick action</span> and power your business today</h1>
                <p className="text-white mb-8 leading-relaxed">Elevate sales and stay ahead in the competitive market by being among the first to benefit from our game-changing solutions </p>

                <button className=" gap-2 h-14 items-center  w-48 mt-6 rounded-3xl inline-flex text-black bg-green-400  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 text-white ">Discover More<FaRegArrowAltCircleRight /></button>

              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="https://sierra.keydesign.xyz/saas/wp-content/uploads/sites/3/2023/10/sass-widget-18.png" />
              </div>
            </div>

          </section>

        </div>
        <div className='text-gray-400 flex gap-36 mt-14 text-4xl ml-28'>
          <p className=''>Stripe</p>
          <p className=''>asana</p>
          <p className=''>Google</p>
          <p className=''>Spotify</p>
          <p className=''>Trustpilot</p>
        </div>
      </div>

      <div>

        <section className="text-gray-600 body-font  ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col  w-full mb-20">
              <p>Flexible pricing</p>
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Flexible <span className='text-green-400'>Pricing</span>  to suit every need</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Enjoy a range of features designed to enhance your project</p>
              <p>management experience,all at a price that fits your budget</p>

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
          </div>
        </section>
      </div>


      <div className='h-screen w-screen bg-gray-100'>
        <section className="text-gray-600 ">
          <div className="container mx-auto flex  py-24 md:flex-row flex-col  ">
            <div className="mt-20  flex flex-col md:items-start md:text-left ">
              <h1 className=' text-black'>Transforming teamwork</h1>
              <h1 className="mt-4 f  sm:text-4xl    text-black">Join <span className='text-green-400'>4000+</span>
                <br /> businesses in our community
              </h1>


              <p className='b mt-4 text-gray-400'>Discover how various industry teams  <br className="hidden lg:inline-block" />benefit from our software,optimizing<br className="hidden lg:inline-block" />their workflows,and improving efficiency.</p>
              <div className="flex justify-center mt-6">
                <button className=" gap-2 h-14 items-center  w-48 mt-6 rounded-3xl inline-flex text-black bg-green-400  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 text-white ">Discover More<FaRegArrowAltCircleRight /></button>

              </div>
            </div>
            <div className='flex-row mt-20 ml-48'>
              <div className='flex'>
                <div className=' mb-12 mr-20 '>
                  <svg className="mb-4 text-white mr-32 w-20 rounded-xl  bg-indigo-400 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <p className=' d mb-4 text-left text-black'> Marketing teams</p>
                  <p className=' c text-left text-gray-400'>Enhance campaign planning,collaboration,and performance tracking</p>
                </div>
                <div>
                  <svg className="mb-4 text-white mr-32 w-20 rounded-xl  bg-indigo-400 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <p className=' d mb-4 text-left text-black'>Project management</p>
                  <p className='c text-left text-gray-400'>Stremline task assignment progress tracking, and resource allocation</p>
                </div>
              </div>


              <div className='flex'>
                <div className=' mb-72 mr-24'>
                  <svg className="mb-4 text-white mr-32 w-20 rounded-xl  bg-indigo-400 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <p className='d mb-4 text-left text-black'>Strategic planning</p>
                  <p className='c text-left text-gray-400'>Facilitate data-driven decision-making,scenario analysis,and goal tracking.</p>

                </div>
                <div>
                  <svg className="mb-4 text-white mr-32 w-20 rounded-xl  bg-indigo-400 hover:bg-green-400  " viewBox="0 0 20 15">
                    <PiChatsDuotone />
                  </svg>
                  <p className='d mb-4 text-left text-black'>Operation teams</p>
                  <p className='c text-left text-gray-400'>Optimize process automation,documentation,and communication.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="flex flex-col  w-full mb-20">
          <p className='c mt-24'>12,000+ Happy Clients</p>
          <h1 className=" f mt-6 sm:text-4xl font-medium title-font mb-2 text-gray-900">Success <span className='text-green-400'>stories</span> from our customers</h1>
          <p className=" b mt-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">The best way to showcase our commitment is through the experiences</p>
          <p className='b text-gray-500'>and stories of those who have partnered with us</p>

          <div className='w-3/4 m-auto '>
            <div className='mt-20 '>
              <Slider {...settings}>
                {data.map((e) => {
                  return (
                    <div className=''>
                      <div className=' bg-gray-100 h-56  justify-center items-center rounded-2xl'>
                        <p className=' text-gray-500 '>{e.description}</p>
                        <img className=' ml-36 bg-gray-100 h-10 w-20' src='/star.png' alt="hlo" />

                      </div>

                      <p className=' mt-[-20px] mb-10 ml-40 h-14  w-14 rounded-full border-4  '> <img src={e.img} alt="my-img" /></p>
                      <div className=' flex flex-col justify-center items-center '>

                        <p className='text-1xl'>{e.name}</p>
                        <p className='mb-10 text-gray-500'>{e.position}</p>
                      </div>
                    </div>)
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>


      <div className='bg-gray-100'>
        <div className="flex flex-col  w-full mb-20">
          <p className='c mt-24'>We've got answers</p>
          <h1 className=" f mt-6 sm:text-4xl font-medium title-font mb-2 text-gray-900">Your <span className='text-green-400'>questions</span> answered</h1>
          <p className=" b mt-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">If you're new or looking for answers to your questions, this guide will</p>
          <p className='b text-gray-500'>help you learn more about our services and their features.</p>

          <div className=''>
            <div className='flex h-16  mt-14 gap-6 '>
              <div className='bg-white w-[600px] rounded-2xl ml-32'>
                <p className='mr-80 mt-5'>1.Is there a free trial available?</p>
                <div >
                  <p className="mt-0" onClick={() => setShow(!show)}><FcCollapse /></p>
                  {

                    show ? <h1>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.</h1> : null

                  }

                </div>


              </div>

              <div className='bg-white w-[600px] rounded-2xl '>
                <p className='mr-80 mt-5'>4.Can other info be added to an invoice?</p>
                <div >
                  <p className="mt-0" onClick={() => setShow(!show)}><FcCollapse /></p>
                  {
                    show ? <h1>At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.</h1> : null
                  }
                </div>
              </div>
            </div>

            <div className='flex h-16  mt-12 gap-6'>
              <div className='bg-white w-[600px]  rounded-2xl ml-32'>
                <p className='mr-80  mt-5'>2.Can I change my plan later?</p>
                <div >
                  <p className="mt-0" onClick={() => setShow(!show)}><FcCollapse /></p>
                  {
                    show ? <h1>Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.</h1> : null
                  }
                </div>
              </div>
              <div className='bg-white w-[600px] rounded-2xl'>
                <p className='mr-80 mt-5'>5.How does billing work?</p>
                <div >
                  <p className="mt-0" onClick={() => setShow(!show)}><FcCollapse /></p>
                  {
                    show ? <h1>Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.</h1> : null
                  }
                </div>
              </div>
            </div>

            <div className='flex h-16 mt-12 gap-6 mb-20 '>
              <div className='bg-white w-[600px] rounded-2xl ml-32 ' >
                <p className='mr-80 mt-5'>3.What is your cancellation policy?</p>
                <div >
                  <p className="mt-0" onClick={() => setShow(!show)}><FcCollapse /></p>
                  {
                    show ? <h1>We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.</h1> : null
                  }
                </div>
              </div>

              <div className='bg-white w-[600px] rounded-2xl text-center'>
                <p className='mr-80 mt-5'>6.How do I change my account email?</p>
                <div >
                  <p className="mt-0" onClick={() => setShow(!show)}><FcCollapse /></p>
                  {
                    show ? <h1>You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.</h1> : null
                  }
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

              <button className="flex gap-3 ml-[550px] c h-14 w-48 mt-10 rounded-3xl    bg-green-400 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-400 text-black  text-base  ">Start free trial<FaRegArrowAltCircleRight />
              </button>
              <button className="flex gap-3 c h-14 w-48 mt-10 rounded-3xl    bg-white border-0 py-3 px-6 focus:outline-none hover:bg-indigo-400 text-black  text-base  ">How its work<IoMdArrowDroprightCircle />
              </button>
            </div>
          </div>
        </div>

        <div className='flex bg-white border-2 '>
          <div className=' ml-28 flex gap-4 mt-10 mb-10'>
            <p className='text-gray-400'>Terms</p>
            <p className='text-gray-400'>Pricing</p>
            <p className='text-gray-400'>Help</p>
            <p className='text-gray-400'>Contact</p>

          </div>
          <div className='flex  bg-white gap-2 ml-[600px]'>
            <button className=" gap-2 flex c h-8 w-32 mt-10 rounded-3xl    bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 text-black  text-base  "><FaFacebookF />Facebook
            </button>
            <button className=" gap-2 flex c h-8 w-32 mt-10 rounded-3xl    bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 text-black  text-base  "><FaTwitter />Twitter
            </button>
            <span className='g'><button className=" gap-2 
            inline-flex 
            c h-8 w-32 mt-10 rounded-3xl 
               bg-green-400 border-0 py-1 px-3 
               focus:outline-none hover:bg-indigo-400
                text-black  text-base  "><FaInstagram /><p>Instagram</p>
            </button></span>
          </div>
        </div>

      </div>
    </section>


  )
}



export default Homepage