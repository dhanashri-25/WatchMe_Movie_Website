import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../Util/axios';
import noImg from '/noImg.jpg'

const Topnav = () => {
  const[query,setquery]=useState("");
  const[searches,setsearches]=useState([]);
  const GetSearches=async()=>{
    try{
      const {data}=await axios.get(`/search/multi?query=${query}`);
      console.log(data);
      setsearches(data.results);//for saving results when searched
      

    }catch(error){
      console.log("Error:",error);
    }
  };
  useEffect(()=>{
    GetSearches();
  },[query]);
  return (
    <>
    <div className='w-[80%] mx-auto h-[10vh] relative flex justify-start ml-[15%] items-center'>
      <i className='text-zinc-200 p-3 ml-5 ri-search-line text-3xl'></i>
      <input 
      onChange={(e)=>setquery(e.target.value)}
      value={query}
      type='text'
      className=' text-xl outline-none border-none bg-transparent text-white w-[50%] mx-10' placeholder='seach anything'/>

      {query.length>0&&(// if kuch nhi likha hai to search then icon nhi dikhega
        <i 
        onClick={()=> setquery("")}//on clicking icon of cancel search me jo hai wo empty ho jayega
        className='absolute right-0 ri-close-fill text-zinc-400 text-3xl'></i>

      )}
      <div className='w-[50%] rounded max-h-[50vh] overflow-auto bg-zinc-200 absolute top-[95%] left-[5%]'>
        {/* search me data dikhane k liye */}

        {searches && searches.length>0 && searches.map((s,i)=>(
                  <Link key={i} className=' p-10 items-center justify-start border-b-2 border-zinc-100 text-zinc-800 font-semibold  hover:text-black hover:bg-zinc-300 duration-300 flex'>
                  <img
                  className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg'
                   src={
                   s.backdrop_path||
                   s.profile_path||
                   s.poster_path?`https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path||s.poster_path}`:noImg} alt=''/>
                  <span>
                  {s.original_title||
                    s.title||
                    s.name||
                    s.original_name}
                  </span>
                </Link>

        ))
        
      }

       
      </div>

    </div>
    </>
  )
}

export default Topnav




