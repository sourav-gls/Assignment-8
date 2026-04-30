import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Banner = () => {
    return (
        <div className=' bg-base-300'>
            <div className='flex justify-between mx-auto p-25 gap-4'>
        <div className='justify-center flex flex-col'>
            <div className="badge badge-soft badge-warning">Eid-Ul-Azaha</div>
            <h1 className='text-5xl font-semibold text-[#244D3F] mb-5 mt-3'>Livestock Booking Platform</h1>
            <p>A modern livestock marketplace where users can explore animals for Qurbani such as <br /> cows and goats. Users can view details and place a booking after authentication.</p>
            <div>
                <Link href={"/animals"}><button className='btn bg-green-200 rounded-lg mt-5'>Book Now</button></Link>
            </div>
        </div>
        <div>
            <Image
            src="/assets/Gemini_Generated_Image_ewwigyewwigyewwi.png"
             alt="Livestock Image"
             width={600}
             height={550}
             className='rounded-xl'
            />
               
        </div>
        </div>
        </div>
    );
};

export default Banner;