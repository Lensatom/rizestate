import React from 'react'
import { NavLink } from 'react-router-dom'

const SignIn = props => {

  const {switchComponent} = props

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-16 w-full lg:p-24'>
      <form className='flex flex-col px-3 pt-10 lg:pr-44 items-left'>
        <label className='font-bold text-sm text-gray-700'> Email </label>
        <input type='email' placeholder='E-Mail' className='mt-2 rounded-sm mb-5 p-4 shadow-md shadow-x-0 shadow-y-0' />
        <label className='font-bold text-sm text-gray-700'> Password </label>
        <input type='password' placeholder='Password' className='mt-2 rounded-sm mb-5 p-4 shadow-md shadow-x-0 shadow-y-0' />
        <button className='px-5 py-3 text-center w-1/3 border-1 bg-green-200 border-green-800 text-green-800 rounded-md'> Sign Up </button>
        <NavLink to='/affiliate/#' className='mt-3'>
          <p> Forgot Password? </p>
        </NavLink>
      </form>
      <div className='lg:ml-16 mt-10 lg:mt-0 bg-green-50 p-3 rounded-sm pb-10'>
        <h2 className='text-gray-700 text-3xl font-bold'> Hello Affiliate ! </h2>
        <p className='text-gray-700 mt-3 leading-7'> Kindly enter your login credentials to gain access to the dashboard and add favourite Property(s) you wish to promote/sell.</p>
        <p className='text-gray-700 mt-2'> Kindly use the button bellow if you are not an existing Affiliate </p>
        <button onClick={switchComponent} className='px-5 py-3 my-5 text-center w-1/3 lg:w-1/4 border-1 bg-main-bg text-white rounded-md'> Sign Up </button>
        <NavLink to='./' className='text-green-800'>
          <p> Back to website </p>
        </NavLink>
      </div>
    </div>
  )
}

export default SignIn