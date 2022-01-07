import React from 'react'
import Link from 'next/link'
export default function Header() {
    return (
        <nav className='flex justify-between items-center pt-6 pb-2 mb-6 border-b border-zinc-400 '>
          <div>
              <Link href="/">
                  <a>Home Page</a>
              </Link>
          </div>  
          <div className='flex justify-between items-center'>
              <div>
              <Link href="/about">
                  <a>About</a>
              </Link>
              </div>
              <div className= "ml-20">
              <Link href="/user" >
                  <a>All User</a>
              </Link>
              </div>
          </div>  
        </nav>
    )
}
