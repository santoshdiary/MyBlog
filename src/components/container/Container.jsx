import React from 'react'

function Container({ children }) {
  return (
    <div className='w-full max-w-7xl mx-auto px-5 py-6 sm:px-8 lg:px-10 lg:py-8'>
      {children}
    </div>
  )
}

export default Container
