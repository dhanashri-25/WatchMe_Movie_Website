import React from 'react'
import { Link } from 'react-router-dom';
const Header = ({data}) => {
  
    console.log(data);
    return <div 
    style={{
      background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path||data.profile_path
    })`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    }}
      className='w-full h-[58vh] flex flex-col justify-end p-[10%] items-start '>

        <h1 className='text-5xl font-black text-white w-[70%]'>{data.original_title||
                    data.title||
                    data.name||
                    data.original_name}
        </h1>
        <p className='w-[70%] text-white mt-5'>{data.overview.slice(0,200)}....<Link className='text-blue-400'>more</Link>
        </p>
        
        <p className='text-white flex mt-3'>
        <i className='text-yellow-500 ri-megaphone-fill mr-2'></i>{""}{data.release_date||"NO INFO"}
        <i className='text-yellow-500 ri-album-fill mx-2'></i>{data.media_type.toUpperCase()}

        </p>
        <Link className='p-4 font-semibold rounded text-white bg-[#6556CD] my-4'>Watch Trailer</Link>
      </div>

  };

  
  


export default Header
