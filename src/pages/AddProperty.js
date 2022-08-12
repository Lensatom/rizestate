import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { SignIn, SignUp } from '../components'

const AddProperty = () => {
  
  let i = 0
  const switchComponent = () => {
    const components = [<SignIn switchComponent={switchComponent} />, <SignUp switchComponent={switchComponent} />]
    if (i == 0) {
      i++
    } else {
      i = 0
    }
    setComponent(components[i])
  }

  const [component, setComponent] = useState(<SignIn switchComponent={switchComponent} />)


  return (
    <>
      <div className='w-full px-24 pt-44 py-24 bg-main-bg'>
        <h2 className='text-4xl font-bold text-white'> Sign In </h2>
      </div>
      {component}
      <div className='w-full py-10 bg-gray-800 px-24 grid grid-cols-4 gap-8'>
        <div>
          <img src='./logo_light.png' alt='' width={200} />
          <p className='text-gray-400 text-sm mt-5'> is No 1 estate property site in Nigeria. We provide users with the best search experience, we connect buyers & sellers at a speed of light usually within 24hours </p>
        </div>
        <div className='flex flex-col text-gray-400 pl-24'>
          <h2 className='text-xl font-semibold text-white mb-4'> Navigations </h2>
          <NavLink to='/faq' className='my-2 text-sm'> FAQs Page </NavLink>
          <NavLink to='/affiliate' className='my-2 text-sm'> Affiliate </NavLink>
          <NavLink to='/agency' className='my-2 text-sm'> Agency </NavLink>
          <NavLink to='/' className='my-2 text-sm'> Blog </NavLink>
          <NavLink to='/contact' className='my-2 text-sm'> Contact Us </NavLink>
        </div>
        <div className='flex flex-col text-gray-400 pl-16'>
          <h2 className='text-xl font-semibold text-white mb-4'> The Highlights </h2>
          <NavLink to='/for_sale' className='my-2 text-sm'> For Sale </NavLink>
          <NavLink to='/for_rent' className='my-2 text-sm'> For Rent </NavLink>
          <NavLink to='/for_lease' className='my-2 text-sm'> For Lease </NavLink>
        </div>
        <div className='flex flex-col text-gray-400 pl-16'>
          <h2 className='text-xl font-semibold text-white mb-4'> Don&apos;t Be Left Out </h2>
          <NavLink to='/for_sale' className='my-2 text-sm'>
            <button className='border-1 border-gray-500 flex items-center px-3 py-3 w-64 rounded-md'>
              <FaInstagram className='text-3xl text-green-400' />
              <div className='text-left ml-3'>
                <h2 className='text-white text-lg font-semibold'> SignUp Now </h2>
                <p className='text-gray-500'> Follow Us </p>
              </div>
            </button>
          </NavLink>
          <NavLink to='/for_rent' className='my-2 text-sm'>
            <button className='border-1 border-gray-500 flex items-center px-3 py-3 w-64 rounded-md'>
              <FiFacebook className='text-3xl text-green-400' />
              <div className='text-left ml-3'>
                <h2 className='text-white text-lg font-semibold'> SignUp Now </h2>
                <p className='text-gray-500'> Follow Us </p>
              </div>
            </button>
          </NavLink>
        </div>
      </div>
      <div className='px-24 py-5 text-sm bg-gray-900 text-gray-500'>
        <p> © 2021 Riz Estate. All Rights Reserved </p>
      </div>
    </>
  )
}

export default AddProperty