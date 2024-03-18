
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'



const Sidenav = () => {


  return (
    <div className='w-auto h-auto border-r-2 overflow-auto border-zinc-400 p-10'>
      <h1 className='text-2xl text-white font-bold mr-3'>
        <i className="text-[#6556CD] ri-tv-fill text-2xl"></i>
        <span className='text-2xl m-2 mt-10 mb-5'>WatchMe</span>
        
      </h1>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
        
        <Link className='hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300'><i className="mr-2 ri-fire-fill"></i>Trending</Link>
        <Link className='hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300'><i className="mr-2 ri-sparkling-2-fill"></i>Popular</Link>
        <Link className='hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300'><i className="mr-2 ri-tv-line"></i>TV Shows</Link>
        <Link className='hover:bg-[#6556CD] p-5 hover:text-white rounded-lg duration-300'><i className="mr-2 ri-team-fill"></i>People</Link>
      </nav>

      <hr className='border-none h-[1px] bg-zinc-400'></hr>

      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>

      <h1 className='text-white font-semibold text-xl mt-7'>Website Info</h1>
        
        <Link className='hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-300'><i className="mr-2 ri-information-fill"></i>About</Link>
        <Link className='hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-300'><i className="mr-2 ri-phone-fill "></i>Contact us</Link>
      </nav>
      
    </div>
  )
}

export default Sidenav
