import React from 'react'

const layout = ({ children}) => {
  return (
    <div className='flex flex-col items-center my-20'>
      { children}
    </div>
  )
}

export default layout
