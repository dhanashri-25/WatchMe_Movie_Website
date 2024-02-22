import React, { useEffect, useState } from 'react'
import Sidenav from './Template/Sidenav';
import Topnav from './Template/Topnav';
import axios from "../Util/axios"
import Header from "./Template/Header"

const Home = () => {
  document.title="WatchMe|Homepage";
  const[wallpaper,setwallpaper]=useState(null);
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
  console.log(wallpaper);
    useEffect(()=>{
    !wallpaper && GetHeaderwallpaper();
  },[]);

  return (
    <>
      <Sidenav></Sidenav>
      <div className='w-[80%] h-full'>
        <Topnav></Topnav>
        <Header></Header>
      </div>
      
    </>
    
    
    
  )
}

export default Home
