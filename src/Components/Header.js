import React, { Component, useState } from 'react'
import { BiVideoPlus } from 'react-icons/bi'
import { TbBellRinging } from 'react-icons/tb'
import { IoIosSearch } from 'react-icons/io'
import logo from '../Assets/logo.png'
import Avtar from './Avtar'
// import { useHistory } from 'react-router-dom';

export default function Header() {

    const [query,setQuery]=useState('')

    // const history=useHistory()
        const searchForm=(event)=>{
            event.preventDefault();
            const params= new URLSearchParams()
            params.append('search',query)
            window.location.search = params.toString();
        }

  return (
    <div className='sticky top-0 bg-white'>
                <div className='Conatiner flex items-center justify-between px-2 h-20'>
                    {/* logo */}
                    <div><img src={logo} className="w-32" /></div>
                    {/* search */}
                    <form onSubmit={searchForm}>    
                    <div className='border border-black flex h-12 items-center justify-between min-w-[600px] rounded-full overflow-hidden '>
                        <input type='text' placeholder='search' className='w-full px-5 outline-none border-none text-lg' onChange={(e)=>{
                            setQuery(e.target.value)
                        }} />
                        <button type='submit' className='p-3 px-5 bg-gray-200'><IoIosSearch className='text-2xl' /></button>
                    </div>
                        </form>
                    {/* side icons */}
                    <div className="flex gap-x-4 items-center">
                        <span><BiVideoPlus className="text-3xl" /></span>
                        <span><TbBellRinging className="text-3xl" /></span>
                        <Avtar />
                    </div>
                </div>

            </div>
  )
}
