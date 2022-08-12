import React from 'react'
import { VscLocation } from 'react-icons/vsc'

const SearchBar = () => {
  return (
    <div className='w-full px-5'>
      <form className='w-full lg:w-2/3 mx-auto mt-10 bg-white rounded-md shadow-lg flex flex-col lg:flex-row justify-between py-2 px-2 items-center'>
        <div className='flex w-full lg:w-1/4 justify-between items-center'>
          <div className='flex items-center'>
            <input className='w-4 h-4 lg:mr-3' name='section' type='radio' checked />
            <label className='font-semibold text-sm ml-3 lg:ml-0'> Buy </label>
          </div>
          <div className='flex items-center'>
            <input className='w-4 h-4 lg:mr-3' name='section' type='radio' />
            <label className='font-semibold text-sm ml-3 lg:ml-0'> Rent </label>
          </div>
          <div className='flex items-center'>
            <input className='w-4 h-4 lg:mr-3' name='section' type='radio' />
            <label className='font-semibold text-sm ml-3 lg:ml-0'> Lease </label>
          </div>
        </div>
        <div className='lg:border-l-1 border-gray-300 py-4 px-2 w-full lg:w-1/2 flex items-center'>
          <VscLocation className='text-3xl text-gray-400' />
          <input placeholder={`Search for a location`} type='search' className='w-full px-1 py-1 outline-0 cursor-pointer' />
        </div>
        <button className='py-4 w-full lg:w-36 text-xl text-white bg-main-bg rounded-md'> Search </button>
      </form>
    </div>
  )
}

export default SearchBar