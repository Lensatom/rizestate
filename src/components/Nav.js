import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import { DeviceWidth } from '../contexts/DeviceWidthContext'

const Nav = props => {

  const {type, openOrClose} = props
  const normal = 'font-semibold text-gray-700 lg:text-inherit hover:text-blue-300 px-3 py-3 lg:border-0 border-b-1 border-gray-300'
  const active = 'text-blue-300 font-semibold lg:border-0 border-b-1 border-gray-300 px-3 py-3'  
  const [deviceWidth, setDeviceWidth] = useState(0)

  useEffect(() => {
    setDeviceWidth(DeviceWidth())
  })

  useEffect(() => {
    const navBar = document.getElementById(type)
    if ( type == 'staged') {
      navBar.style.transform = 'translateX(-350px)'
    } else if (type[type.length - 1] == 'd') {
      let i;
      type == 'closed' ? i = 0 : i = -350
      let interval = setInterval(() => {
        type == 'closed' ? i = i - 3 : i = i + 3
        navBar.style.transform = `translateX(${i}px)`
        if (i < -350 || i > -3) {
          console.log( i + 'done')
          clearInterval(interval)
        }
      }, 5)
    }
  }, [type])

  return (
    <div id={type} className='fixed shadow-lg lg:shadow-0 lg:static top-0 left-0 flex flex-col lg:flex-row h-screen lg:h-auto w-5/6 lg:w-auto bg-white lg:bg-transparent top-0 left-0 lg:justify-between' style={{transform: type[type.length - 1] == 'd' ? 'translateX(-100px)' : ''}}>
      {deviceWidth > 900 ? '' : <div className='text-right w-full py-5 px-3 border-b-1 border-gray-300 text-gray-700' onClick={openOrClose}> Close </div>}
      <NavLink to='/' onClick={() => openOrClose(true)} className={({isActive}) => isActive ? active : normal}> Home </NavLink>  
      <NavLink to='/for_sale' onClick={() => openOrClose(true)} className={({isActive}) => isActive ? active : normal}> For Sale </NavLink>
      <NavLink to='/for_rent' onClick={() => openOrClose(true)} className={({isActive}) => isActive ? active : normal}> For Rent </NavLink>
      <NavLink to='/for_lease' onClick={() => openOrClose(true)} className={({isActive}) => isActive ? active : normal}> For Lease </NavLink>
      <NavLink to='/agency' onClick={() => openOrClose(true)} className={({isActive}) => isActive ? active : normal}> Add Property </NavLink>
      <NavLink to='/affiliate' onClick={() => openOrClose(true)} className={({isActive}) => isActive ? active : normal}> Affiliate </NavLink>
      <NavLink to='/contact' onClick={() => openOrClose(true)} className={({isActive}) => isActive ? active : normal}> Contact Us </NavLink>
    </div>
  )
}

export default Nav