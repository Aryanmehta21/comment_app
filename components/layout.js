import Nav from './Nav';
import React from 'react'
const layout = ({children}) => {
  return (
    <div className="mx-6 md:max-w-2xl md:mx-auto font-poppins">
        <Nav/>
        <main>{children}</main>
    </div>
  )
}

export default layout