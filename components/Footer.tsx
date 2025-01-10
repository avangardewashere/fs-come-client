import React from 'react'
import MainNav from './ui/MainNav'

const Footer = () => {
  return (
    <div className='bg-white border-t '>
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
            &copy; 2023 ClientStore, Inc. All rights reserved.
        </p>
        <MainNav data={[]}/>
      </div>

    </div>
  )
}

export default Footer
