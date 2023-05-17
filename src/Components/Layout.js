import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className='flex h-screen flex-col justify-between'>
            <NavBar className=""/>
            <main >{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
