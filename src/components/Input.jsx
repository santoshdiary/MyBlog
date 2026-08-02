import React, { useId } from 'react'

function Input(
    {
        label,
        type = 'text',
        className = '',
        ref,
        ...props
    }
) {

    const id = useId()
     return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1 inline-block pl-1 text-sm font-medium text-canopy">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        ref={ref}
        {...props}
        className={`
          w-full rounded-lg border border-line bg-paper px-3 py-2
          text-ink outline-none duration-200
          focus:border-leaf focus:bg-white focus:ring-2 focus:ring-leaf/30 ${className}
        `}
      />
    </div>
  );
}

export default Input;