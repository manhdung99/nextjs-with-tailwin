import React from "react";
import Image from "next/image";
import {
	faYoutube,
	faTiktok,
	faFacebook,
	faGithub,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import Head from "next/head";
export default function Profile() {
	const socialList = [
		{icon:faFacebook,
			link:'https://www.facebook.com/dungnm25'
		},
		{icon:faYoutube,
			link:'https://www.facebook.com/dungnm25'
		},
		{icon:faTiktok,
			link:'https://www.facebook.com/dungnm25'
		},
		{icon:faGithub,
			link:'https://github.com/manhdung99'
		}
	]
	const members = [1,2,3];
  return (
	  <>
	  <Head>
			<title>Profile Card</title>
		</Head>
    <div className="flex justify-between flex-wrap  " >
		{members.map((member)=>(
			<div key={member}  className="bg-[#242628] w-[300px] h-[400px] rounded-[10px] text-center mb-[20px] overflow-hidden ">
        <div className="translate-y-[25px] overflow-hidden m-auto w-[120px] h-[120px] duration-300 border-4 border-[#f2726a] rounded-[50%] cursor-pointer hover:w-[100%] hover:h-[100%] hover:translate-y-0 hover:rounded-none hover:border-0  ">
          <img className="w-[100%] h-[100%] object-cover object-center "   src="/image.jpg" alt=""  />
        </div>
        <h2 className="mt-[40px] text-white text-[24px] font-bold">Mạnh Dũng</h2>
        <p className="text-[#f2726a] text-[18px]">Developer</p>
        <div className=" flex justify-center ">
			{socialList.map((sociaItem,index) =>(
				<Link key={index} href={sociaItem.link}>
				<a className="mx-[20px] mt-[20px] mb-[40px] text-white hover:text-[#f2726a]" target="_black">
					<FontAwesomeIcon icon={sociaItem.icon} style={{fontSize : '24px'}} />
				</a>
				</Link>
			))}
        </div>
        <button className=" outline-0 border-[#f2726a] border-[1px] px-[18px] py-[8px] rounded-[12px] text-white hover:bg-[#f2726a]">Contact me</button>
      </div>
		))}
    </div>
	</>
  );
}
