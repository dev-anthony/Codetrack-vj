import { useState } from "react";
import { FaDiscord, FaFacebook, FaGithub, FaHamburger, FaTwitter } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Sidebar from "./sidebar";
import { LiaDropbox } from "react-icons/lia";
export default function HeroSection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    
    <div className="min-h-screen  bg-gradient-to-r from-[#fcg9g9] to-[#a31621] text-[#a31621] flex flex-col items-center justify-center font-poppins">
    
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-10 lg:px-[180px]">
      <div className="flex items-center">
            <span className="mr-2"> 
                <LiaDropbox className="text-xl" /> 
            </span>
            <h1 className="text-[24px]   text-[#a31621B2] hover:text-[#a31621]  font-bold">
                Code &lt;30&gt;
            </h1>
        </div>

        <div className="hidden md:flex gap-4">
          <FaGithub className="text-xl" />
          <FaDiscord className="text-xl" />
          <FaFacebook className="text-xl" />
          <FaTwitter className="text-xl" />
        </div>
        <div className="hidden md:flex gap-4">
          <button className="bg-[#fcf7f8] text-center hover:bg-[#a31621]/80 lg:px-[50px] hover:text-white lg:py-[15px] w-[120px] text-base py-2.5 lg:w-[155px]  font-medium text-[#a31621] whitespace-nowrap font-chillax border-[#a31621] border-[1.5px] border-solid px-3 focus:outline-none font-semibold transition-all duration-300 active:scale-[0.97] text-md">Login</button>
          <button className="bg-[#a31621] text-center hover:bg-[#fcf7f8]/40 lg:px-[50px] text-white hover:text-white lg:py-[15px] w-[120px] text-base py-2.5 lg:w-[155px]  font-medium text-[#a31621] whitespace-nowrap font-chillax border-[#a31621] border-[1.5px] border-solid px-3 focus:outline-none font-semibold transition-all duration-300 text-md">Sign up</button>
          {/* <button className="bg-[#a31621] text-center hover:bg-[#fcf7f8]/40 lg:px-[50px] lg:py-[15px] w-full text-base py-2.5 lg:w-[155px] text-[20px] font-medium text-[#fcf7f8] whitespace-nowrap font-chillax border-[#a31621] border-[1.5px] border-solid px-3 focus:outline-none font-semibold transition-all duration-300 active:scale-[0.97]">Sign up</button> */}
        </div>
      
        <button className="md:hidden" onClick={toggleSidebar}>
          <span className="text-2xl text-white"><CiMenuFries /></span> 
        </button>
      </nav>

  
      {isSidebarOpen && (
      <Sidebar 
      isSidebarOpen={isSidebarOpen}
      // setIsSidebarOpen={setIsSidebarOpen}
      />
      )}
    
      <div className="text-center lg:mt-20 lg:pt-40">
        <h2 className="leading- mx-auto text-center text-[#a31621] text-[30px] tracking-[2%] leading-[37.2px] lg:leading-[80px]  font-cabinet font-semibold lg:tracking-[1.6px] lg:text-[80px] lg:max-w-[975px]_">
          <span className="bg-clip-text text-transparent [background-image:linear-gradient(to_right,#a31621,#fcf7f8)]">
            30 Days of Code Challenge
          </span>
        </h2>
        <h3 className="leading- mx-auto text-center text-white text-[30px] tracking-[2%] leading-[37.2px] lg:leading-[80px]  font-cabinet font-semibold lg:tracking-[1.6px] lg:text-[80px] lg:max-w-[975px]_ mt-2">With VickyJay</h3>
        <p className="font-cabinet text-[16px] mt-4 leading-[25px] text-[#a31621B2] md:leading-[37px] font-medium max-w-[368px] md:font-bold md:text-[22px] text-center mx-auto md:max-w-[723px]">
          The “30 Days of Code with VickyJay” challenge is an engaging and intensive programming contest designed to foster continuous learning and project development.
        </p>
 
<div class="flex flex-col items-center mx-auto py-2.5 lg:py-7">
    <a class="bg-gradient-to-r from-[#a31621] to-[#fcf7f8] animate-gradient md:border-[2px] border-[#fcf7f8] whitespace-nowrap rounded-[56.52px] border-[1.13px] md:rounded-[100px] lg:w-[161px] flex flex-row items-center justify-center transition-all lg:px-[32px] lg:py-[16px] grad duration-300 active:scale-95" href="/login">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="36" viewBox="0 0 33 36" fill="none" class="w-[17px] lg:w-[36px]">
            <path d="M23.1814 8.5343L21.726 10.1253L27.9005 16.8751H1.06348V19.1251H27.9003L21.726 25.8747L23.1814 27.4657L31.8404 18L23.1814 8.5343Z" fill="white"></path>
        </svg>
    </a>
    <div class="flex items-center justify-center max-w-6xl mx-auto"></div>
</div>

      </div>
      
     
      {/* <div className="mt-10 flex flex-col items-center text-center">
      
      </div> */}
    </div>
  );
}
