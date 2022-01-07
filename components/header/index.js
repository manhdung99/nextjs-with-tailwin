import React from 'react'
import Link from 'next/link'
export default function Header() {

    const navList = [
        {
            url:'/about',
            name :'About Us'
        },
        {
            url:'/member',
            name :'Member'
        },
        {
            url:'/user',
            name :'All User'
        },
        {
            url:'/login',
            name :'Login'
        },
        
    ]

    return (
        <nav className='flex justify-between items-center pt-6 pb-2 mb-6 border-b border-zinc-400 '>
          <div>
              <Link href="/">
                  <a>Home Page</a>
              </Link>
          </div>  
          <div className='flex justify-between items-center'>
              {navList.map((navItem,index)=>(
                  <div className='mx-[10px]' key={index}>
                  <Link href={navItem.url}>
                      <a>{navItem.name}</a>
                  </Link>
                  </div>
              ))}
          </div>  
        </nav>
    )
}
