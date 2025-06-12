import React from 'react'
import './Hero.css'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Hero = () => {
   
     const navigate = useNavigate();

  return (
     <>
      <div className='flex items-center mx-56 gap-9 flex-col mt-4' >
        <h1 className='font-extrabold text-[46px] text-center mt-10'>
          
           <span className='hero-span'>  Discover Your Next Adventure with AI:</span> <br />
            Personalized Itineraries at 
            Your Fingertips    
        </h1>


        <p className='text-xl text-gray-500 text-center'> Your personal trip planner and travel curator , creating custom inineraries tailored to your interests and budget. </p>

        <Button  onClick={ ()=> navigate('/create-trip') }  className="cursor-pointer"  > Get Started, It's Free </Button>



          <div className='mt-5 border-2 border-amber-300 p-2  rounded-2xl '>
            
             <h1 className='font-extrabold text-[30px] mt-10'>Plan Your Trip Like a Game 🎮 </h1>
             <img className='mt-3' src={assets.hero_img3} alt="img3" />
         </div>

         <div className='mt-5 border-2 border-amber-300 p-3  rounded-2xl '>
            <img src={assets.hero_img1} alt="" />

             <h1 className='font-extrabold text-[30px] mt-5'>Every thing is Planed By Ai 🤖 </h1>

             <img src={assets.hero_img2} alt="heroImg" />

         </div>

        

      </div>
     </>
  )
}

export default Hero