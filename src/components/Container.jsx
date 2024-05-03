import React from 'react'

const Container = ({children}) => {
    // console.log(children);
  return (
    <div className=' w-11/12 mx-auto p-4 justify-center'>{children}</div>
  )
}

export default Container