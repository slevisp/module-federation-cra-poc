import React from 'react'

export default React.forwardRef((props, ref) => {
  const { type, placeholder } = props
  return (
    <div className='relative h-12 w-80'>
      <input
        ref={ref}
        className='
          pl-3
          w-full
          h-full
          text-lg
          text-primary
          border-primary border-2 rounded-2xl
          hover:border-primary
          placeholder:text-primary
          focus:outline-none'
        type={type ?? 'text'}
        placeholder={`${placeholder ?? ''}`}
      />
    </div>
  )
})
