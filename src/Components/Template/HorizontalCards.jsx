import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const HorizontalCards = ({data}) => {
  return (
    <div className='w-full h-[40vh] p-5 overflow-y-auto '>

      
      <div className='w-[100%] mb-5 flex overlfow-x-scroll h-[40vh] overflow-y-hidden'>
        {data.map((d,i)=>(
          <div key={i} className='min-w-[20%]  bg-zinc-900 mr-5'>
            <img className='w-full h-[55%] objecr-cover'
            src={`https://image.tmdb.org/t/p/original/${d.backdrop_path||d.profile_path
          })`}></img>
          <div className='text-white p-3 h-[55%]'>
          <h1 className='text-md mt-2 font-semibold mx-4 text-white '>{d.original_title||
                    d.title||
                    d.name||
                    d.original_name}
            </h1>
            <p className=' text-white text-xs mt-2 mx-4'>{d.overview.slice(0,50)}....<Link className='text-zinc-500'>more</Link>
            </p>

          </div>

            

          </div>

        ))}

      </div>

      
    </div>
  )
}

export default HorizontalCards
