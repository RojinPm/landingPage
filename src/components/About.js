import React from 'react'
import { ReactComponent as MyIcon } from '../assests/svg/logoKey.svg';


function About() {
  return (
    <div className='max-w-full   w-full bg-red-50'>

      <div className='md:max-w-6xl  mt-16 max-w-2xl mx-auto relative'>
 
           <div className='contactSection ml-6  flex md:flex-row  absolute top-4 space-x-4 md:w-1/6 flex items-center  '>
     
              <MyIcon className='' />
              <p className='font-semibold'>Marketing Partner</p>
      
          </div>

            <div className=' grid md:grid-cols-2  max-w-sm md:max-w-6xl mx-auto grid-cols-1 '>

                   <div className='py-16 md:px-12 px-12 md:mt-10  '>
                        <h1 className='md:text-6xl font-semibold text-5xl md:px-9 mt-6'>We’ll Scale Your Brand</h1>
                    </div>
                   <div className='px-3 md:mt-8  '>
                     
                       <p className='md:px-4 md:mt-20 text-base md:text-lg font-medium py-2 px-8 -mt-4 text-custom'>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                       </p>

                   </div>

            </div>

      </div>


    </div>
  )
}

export default About