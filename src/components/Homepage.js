import React from 'react'
import bg from "../assests/img.jpeg";

const Homepage = () => {

    const style = {
        backgroundImage: `url(${bg})`,
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
    }
  return (
   <section>
    <div class="absolute">
    <img class="h-screen w-screen " style={style}  />
    </div>
    <div className='relative p-10 text-white text-center'>
        <h2>Streamline your projects,</h2>
        <h2>empower your team</h2>
        <h2>Efficient planning,seamless collaboration, and top-notch</h2>
        <h2>data protection-all in one place</h2>

    </div>
   </section>
   
  )
}

export default Homepage