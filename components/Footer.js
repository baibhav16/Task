import React from 'react'

function Footer() {
  return (
    
    <div className="w-[100%] h-[28rem]  bg-[#000000] rounded-3xl relative top-[86%] flex flex-row justify-evenly p-5" >
        
  <div className='text-white text-xl mt-14'>
    <p className='text-blue-400 text-3xl mb-2'>Contact:</p>
    <img className="vector w-7 h-7 mb-2" alt="Vector" src="vector-4.png" />
    <div className="text-wrapper mb-2">+91 9458896788</div>
    <div className="text-wrapper mb-2">+91 9458896788</div>
    <img className="vector w-7 h-7 mb-2" alt="Vector" src="material-symbols-mail.png " />
    <div className="text-wrapper mb-2">nscc.com</div>
  </div>
  <div className='flex flex-col  items-center mt-14'>
  <p className='text-blue-400 text-3xl mb-5'>Follow us On:</p>
  <div className='flex flex-row justify-center items-center gap-5 mb-10'>
  <img className="vector w-7 h-7" alt="Vector" src="vector-2.png" />
  <img className="vector w-7 h-7" alt="Vector" src="vector-3.png" />
  <img className="vector w-7 h-7" alt="Vector" src="vector.png" />
  </div>
  <div className='flex flex-row justify-center items-center text-white text-xl border-4 border-blue-400 px-8 rounded-full'>
  <img className="vector w-18 h-18" alt="Vector" src="group-1694.png" />
  <div className='flex flex-col justify-start'>Developed by
    <br></br>
    nscc srm
  </div>
  </div>
  </div>
  <div className='flex flex-col items-left text-white mt-14 text-2xl'>
  <p className='text-blue-400 text-3xl mb-2'>Navigate:</p>
  <div className="text-wrapper mb-2">About</div>
  <div className="text-wrapper mb-2">Events</div>
  <div className="text-wrapper mb-2">Gallery</div>
  <div className="text-wrapper mb-2">Our Team</div>
  </div>
</div> 
 
  )
}

export default Footer
