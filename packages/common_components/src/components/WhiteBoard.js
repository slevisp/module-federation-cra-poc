import React from 'react'

export default React.forwardRef((props, ref) => {
  const { data = [] } = props
  return (
    <div
      ref={ref}
      className='flex justify-start items-center flex-col p-8 h-40 w-60 rounded-3xl text-lg text-primary bg-grey border'
    >
      {data.map((item, index) => (
        <span key={`${item}-${index}`} className='text-lg'>
          {item}
        </span>
      ))}
    </div>
  )
})
