import React from 'react'

export default React.forwardRef((props, ref) => {
  const { text, onClick } = props

  const handleBtnClicked = event => {
    if (typeof onClick === 'function') onClick(event)
  }
  return (
    <button
      className='flex items-center justify-center py-3 px-10 bg-primary focus:outline-none text-white rounded-3xl'
      ref={ref}
      onClick={handleBtnClicked}
    >
      <span className='text-lg'>{text}</span>
    </button>
  )
})
