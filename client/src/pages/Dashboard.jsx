import React from 'react';
import { useState ,useEffect} from "react";
import { useLocation } from "react-router"
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
export default function Dashboard() {
  const location =useLocation();
  const [tab,setTab]=useState('')
  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search)
    const tabFromUrl= urlParams.get('link')
    if(tabFromUrl)
    {
      setTab(tabFromUrl)
    }
  },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:w-56">
        <DashSidebar/>
      </div>
      <DashProfile/>
      {/* {tab==='profile'&& <DashProfile/>} */}
    </div>
  )
}
