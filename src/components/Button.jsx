import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-leaf',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  return (
    <button
      type={type}
      className={`rounded-lg px-4 py-2 font-medium shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:brightness-90 active:translate-y-0 active:brightness-95 ${bgColor} ${className} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
