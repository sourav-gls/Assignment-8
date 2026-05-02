"use client"
import { authClient } from '@/lib/auth-client';
import { ArrowRightFromSquare } from '@gravity-ui/icons';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import {PersonFill} from '@gravity-ui/icons';

const Navbar = () => {
   const userData = authClient.useSession();
   const user = userData.data?.user;
   console.log(user);

   const handleSignOut =async() =>{
     await authClient.signOut();
   }

    return (
     <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-30 p-2 shadow">
         <Link href={"/"} ><li className='text-[#244D3F]'>Home</li></Link>
         <Link href={"/animals"}><li className='text-[#244D3F]'>All Animals</li></Link>
      </ul>
    </div>
    <a className="btn font-semibold btn-ghost  text-xl text-[#244D3F]">QurbaniHat</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-3">
      <Link href={"/"}><li className='text-[#244D3F] font-semibold'>Home</li></Link>
      <Link href={"/animals"}><li className='text-[#244D3F] font-semibold'>All Animals</li></Link>
    </ul>
  </div>
  {!user && <div className="navbar-end sm:space-x-3 space-x-1">
    
    <Link href={"/login"} className='btn rounded-xl text-[#244D3F]'>Login
    </Link>
    <Link href={"/signup"} className='btn rounded-xl text-[#244D3F]'>Register</Link>
  </div>}
  {
    user && <div className="navbar-end sm:space-x-3 space-x-1">
      <Link href={"/profile"}>
      <Avatar>
        <Avatar.Image alt="user image" src={user?.image} referrerPolicy='no-referrer' />
        <Avatar.Fallback><PersonFill/></Avatar.Fallback>
      </Avatar>
      </Link>
    <button onClick={ handleSignOut} className='btn rounded-xl text-[#244D3F]'><ArrowRightFromSquare /> </button>
  </div>}
  
</div>
    );
};

export default Navbar;