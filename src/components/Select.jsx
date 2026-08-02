import React, { useId } from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='mb-1 inline-block pl-1 text-sm font-medium text-canopy'>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`w-full rounded-lg border border-line bg-paper px-3 py-2 text-ink outline-none duration-200 focus:border-leaf focus:bg-white focus:ring-2 focus:ring-leaf/30 ${className}`}
            >
                {options?.map((option) => ( // here option chaining is used: if options exists then, do this other nothing
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)