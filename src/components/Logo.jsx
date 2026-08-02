import React from 'react'

const Logo = ({width}) => {
  return (
    <div>
      <img src="/logo.png" alt="Logo" width={width} className='rounded-b-lg' />
    </div>
  )
}

export default Logo
