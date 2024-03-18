import React, { useEffect, useState } from 'react'
import Sidenav from './Template/Sidenav';
import Topnav from './Template/Topnav';
import axios from "../Util/axios"
import Header from "./Template/Header"
import HorizontalCards from "./Template/HorizontalCards"
import Dropdown from './Template/Dropdown';

const Home = () => {
  document.title="WatchMe|Homepage";
  const[wallpaper,setwallpaper]=useState(null);
  const[trending,settrending]=useState(null);
  const[category,setcategory]=useState("all");
  const GetHeaderwallpaper=async()=>{
    try{
      const {data}=await axios.get(`/trending/all/day`);
      console.log(data);
      
      let randomdata=data.results[(Math.random()*data.results.length).toFixed()];
      setwallpaper(randomdata);//for saving results when searched
    
    }catch(error){
      console.log("Error:",error);
    }
  };


  const GetTrending=async()=>{
    try{
      const {data}=await axios.get(`/trending/${category}/day`);
      
      settrending(data.results);//for saving results when searched
    
    }catch(error){
      console.log("Error:",error);
    }
  };
    
    useEffect(()=>{
    !wallpaper && GetHeaderwallpaper();
    GetTrending();
  },[category]);

  console.log(trending);

  return wallpaper && trending? (
    <>
      <Sidenav></Sidenav>
      <div className='w-[80%] h-full'>
        <Topnav></Topnav>
        <Header data={wallpaper}></Header>

        <div className='mb-5 flex justify-between'>
        <h1 className='mb-3 text-2xl font-semibold text-zinc-400'>
          Trending
        </h1>

        <Dropdown className='mb-3' title="filter" options={['tv','movie',"all"]} func={(e)=>setcategory(e.target.value)} ></Dropdown>
        </div>

        <HorizontalCards data={trending}></HorizontalCards>
      </div>
      
    </>
    
    
    
  ):<h1>Loading</h1>
}

export default Home
