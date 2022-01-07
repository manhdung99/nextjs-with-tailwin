import React from 'react'
import Footer from '../footer/index'
import Header from '../header/index'

export default function Layout({children}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
