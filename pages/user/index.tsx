import Head from 'next/head';
import Link from 'next/link';
import React from 'react'


export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {users:data}
    }

}

export default function User({users}) {
    return (
        <>
        <Head>
            <title>User Page</title>
        </Head>
       <div >
           <h1 className='text-4xl py-8'> All User</h1>
           {users.map((user)=>(
               <Link href = {"/user/" + user.id} key={user.id}>
                   <a ><h2 className="py-5 px-8 text-xl bg-white font-medium ml-5 mb-6 border-l-8 border-white hover:border-rose-400 " >{user.name}</h2></a>
               </Link>
           ))}
        </div>
        </>
    )
}
