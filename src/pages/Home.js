import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser, FaHome, FaInstagram } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { Footer, SearchBar } from '../components'

const Home = () => {
  return (
    <>
      <div className='h-screen w-full bg-main-bg' style={{backgroundImage: 'url(./banner.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom'}}>
        <h2 className='text-3xl lg:text-6xl text-white mx-auto text-center pt-52'> 
          Find Your 
          <span className='font-semibold'> Perfect Place </span>
        </h2>
        <SearchBar/>
      </div>
      <div className='py-8'>
        <h2 className='text-xl lg:text-3xl text-center font-bold text-gray-700'> Featured Properties </h2>
      </div>
      <div className='py-8'>
        <h2 className='text-xl lg:text-3xl text-center font-bold text-gray-700'> Latest Uploaded Property </h2>
        <p className='text-center text-gray-700 px-8'> We have promised to deliver the best and most affodable properties to you ! </p>
      </div>
      <div className='w-full px-3 lg:px-28 mx-auto py-10 bg-blue-50 flex flex-col lg:flex-row justify-between items-center'>
        <div className='w-full lg:w-2/3'>
          <h2 className='text-3xl my-2 li font-bold text-gray-700'> About Us </h2>
          <p className='leading-7 text-gray-700'> Riz Estate is No 1 estate property site in Nigeria. We provide users with the best search experience, we connect buyers & sellers at a speed of light usually within 24hours. This is the right place to buy, rent or sell your estate Property. </p>
          <h2 className='text-3xl my-2 li font-bold text-gray-700'> About Our Affiliate Program (AP) </h2>
          <p className='leading-7 text-gray-700'> We provide shared economy model where everyoneround the world can leverage and partner with us. Our affiliate program (AP) is aimed at finding a cure for unemployment in Nigeria on a simple premises whether you are employed, unemployed, business owner, agent, marketer, student etc. Our affiliate program gives you opportunity to create wealth while connecting buyers with sellers from around the world. </p>
          <div className='flex flex-col lg:flex-row items-start lg:items-center w-full mt-10'>
            <NavLink to='/affiliate'>
              <button className='bg-white border-1 border-red-500 shadow-md shadow-gray-400 flex items-center px-8 py-3 w-64 rounded-md'>
                <FaUser className='text-5xl text-red-500' />
                <div className='text-left ml-3'>
                  <p className='text-gray-500'> Affiliate? </p>
                  <h2 className='text-gray-700 text-xl font-bold'> SignUp Now </h2>
                </div>
              </button>
            </NavLink>
            <NavLink to='/agency'>
              <button className='bg-white border-1 border-blue-900 shadow-md shadow-gray-400 flex items-center px-8 py-3 w-64 rounded-md lg:ml-5'>
                <FaHome className='text-5xl text-blue-900' />
                <div className='text-left ml-3'>
                  <p className='text-gray-500'> Agency? </p>
                  <h2 className='text-blue-400 text-xl font-bold'> SignUp Now </h2>
                </div>
              </button>
            </NavLink>
          </div>
        </div>
        <img src='app.png' alt="" width={400} />  
      </div>
      <Footer />
    </>
  )
}

export default Home