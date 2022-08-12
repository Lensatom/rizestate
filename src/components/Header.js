import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import { DeviceWidth, DeviceWidthConsumer } from '../contexts/DeviceWidthContext'
import { FaBars } from 'react-icons/fa'
import Nav from './Nav'

const Header = props => {

  const {classes, img_src} = props
  const [navState, setNavState] = useState('staged')
  const [deviceWidth, setDeviceWidth] = useState(0)

  useEffect(() => {
    setDeviceWidth(DeviceWidth())
  })

  const openOrClose = (forceClose = false) => {
    if (navState == 'closed' || navState == 'staged') {
      setNavState('opened')
    } else {
      setNavState('closed')
    }

    if (forceClose == true) {
      setNavState('closed')
    }
  }

  return (
    <div className={`${classes} w-full flex justify-between px-10 lg:px-36 h-24 items-center border-b-1`} style={{borderColor: 'rgba(255, 255, 255, 0.2'}}>
      <img src={img_src} alt='logo' width={150} />
      {deviceWidth < 900 ? <> <FaBars className='font-semibold text-lg' onClick={openOrClose} /> <Nav deviceWidth={deviceWidth} type={navState} openOrClose={openOrClose} /> </> : <Nav deviceWidth={deviceWidth} type='static' />}
    </div>
  )
}

export default Header