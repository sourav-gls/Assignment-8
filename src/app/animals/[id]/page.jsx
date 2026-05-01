import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const Details = async({params}) => {
    const {id} = await params
    
   const data = await fetch('https://assignment-8-omega-nine.vercel.app/data.json')
   const posts = await data.json()
   const expectedPost = posts.find(p=>p.id == id);
   console.log(expectedPost);
  



    return (
        <div className="card bg-base-300  shadow-sm grid grid-cols-2 grid-rows-1 sm:w-3/5 mx-auto rounded-2xl mt-10 mb-10">
    <div className='col-span-1'>
    <Image
               src={expectedPost.image}
                alt="Livestock Image"
                width={350}
                height={200}
                className='rounded-full sm:h-100 sm:w-100 h-70 w-70 '
               />
    </div>
 
  <div className=" col-span-1 flex flex-col justify-center space-y-2">
    <div className="badge badge-primary">{expectedPost.breed}</div>
    <h2 className="text-2xl font-semibold mt-3" >{expectedPost.name}</h2>
    <p className='text-gray-500'>{expectedPost.description}</p>
    <p className='flex items-center font-semibold'><IoLocationOutline />&nbsp;{expectedPost.location}</p>
    <div className='flex space-x-2 mt-3 mb-3'>
    <div className="badge badge-outline badge-primary">{expectedPost.weight} KG</div>
    <div className="badge badge-outline badge-primary">{expectedPost.age} Years</div>
    </div>
    <div>
  {expectedPost.stock == true ? (
    <div className="bg-green-200 text-green-700 px-3 py-1 rounded-lg w-fit font-semibold">
      Available
    </div>
  ) : (
    <div className="bg-red-200 text-red-700 px-3 py-1 rounded-lg w-fit font-semibold">
      Sold Out
    </div>
  )}
  </div>
    <h2 className='text-2xl font-semibold'>{expectedPost.price} TK</h2>
   <div className="card-actions mt-8">
      <Link href={"/animals"}><div className="btn rounded-lg bg-[#244D3F] text-white">Book Now</div></Link>
      <Link href={"/animals"}><div className="btn rounded-lg bg-red-500 text-white">Go Back</div></Link>
    </div>
  </div>
</div>
    );
};

export default Details;