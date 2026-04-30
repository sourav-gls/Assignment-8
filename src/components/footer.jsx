import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='text-white container mx-auto text-center space-y-2 pt-10 pb-10 border-b border-gray-600'>
                <h1 className='sm:text-6xl text-5xl  font-semibold'>QurbaniHat</h1>
                <p className='text-[16px] text-gray-300'>A modern livestock marketplace where users can explore animals for Qurbani such as cows and goats. Users can view details and place a booking after authentication.</p>
                <div>
                    <p className='mt-4'>Social Links</p>
                    <div className='flex items-center justify-center gap-5 mt-4'>
                         <div className='w-7 h-7 bg-white rounded-full text-black flex justify-center items-center'><FaInstagram /></div>
                         <div className='w-7 h-7 bg-white rounded-full text-black flex justify-center items-center'><FaFacebook /></div>
                         <div className='w-7 h-7 bg-white rounded-full text-black flex justify-center items-center'><BsTwitterX /></div>
                    </div>
                </div>
            </div>
            <div className='sm:flex text-center sm:text-start justify-between container mx-auto text-gray-400 items-center pt-10 pb-10 border-t-gray-400 '>
                <p className="mb-2 ">© 2026 QurbaniHat. All rights reserved.</p>
                <div className='flex gap-4 sm:gap-10 items-center justify-center sm:justify-start'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;