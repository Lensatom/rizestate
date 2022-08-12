import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = props => {

  const {switchComponent} = props

  return (
    <div className='grid grid-cols-1 mb-10 lg:grid-cols-2 lg:gap-16 w-full lg:p-24'>
      <div className='pt-10 lg:mt-0 bg-green-50 p-3 rounded-sm'>
        <h2 className='text-gray-700 text-3xl font-bold'> Welcome Back </h2>
        <p className='text-gray-700 mt-2'> To keep connected with us please login with your personal info. </p>
        <button onClick={switchComponent} className='px-5 py-3 my-5 text-center w-1/4 border-1 bg-main-bg text-white rounded-md'> Sign In </button>
      </div>
      <form className='flex flex-col px-3 mt-10 items-left'>
        <label> Full Name </label>
        <input type='email' placeholder='E-Mail' className='mt-2 rounded-sm mb-5 p-4 bg-gray-100' />
        <label> Email </label>
        <input type='email' placeholder='Password' className='mt-2 rounded-sm mb-5 p-4 bg-gray-100' />
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8'>
          <div className='flex flex-col'>
            <label> Password </label>
            <input type='email' placeholder='Password' className='mt-2 rounded-sm mb-5 p-4 bg-gray-100' />
          </div>
          <div className='flex flex-col'>
            <label> Confirm Password </label>
            <input type='email' placeholder='Password' className='mt-2 rounded-sm mb-5 p-4 bg-gray-100' />
          </div>
        </div>
        <button className='px-5 py-3 text-center w-1/3 lg:w-1/4 border-1 bg-green-200 border-green-800 text-green-800 rounded-md'> Sign Up </button>
      </form>
    </div>
  )
}

export default SignUp