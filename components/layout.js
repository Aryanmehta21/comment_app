import Nav from './Nav';
import React from 'react'
import Footer from './Footer';
const layout = ({children}) => {
  return (
    <div className="lg:max-w-screen-2xl p-10 md:max-w-2xl md:mx-auto font-poppins bg-gradient-to-b from-black text-black ">
        <Nav/>
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default layout