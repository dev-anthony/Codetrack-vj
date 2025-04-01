import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
  };

    return (
        <section className="bg-black min-h-screen flex justify-center items-center pt-10 pb-10 font-poppins p-4">
            <div className="form-container lg:p-8 p-6 px-8 w-full max-w-md lg:max-w-2xl bg-[#51596C33]  text-sm font-sans text-white flex flex-col gap-6 rounded-lg shadow-md">
                <div className="logo-container mb-3 text-center font-bold font-poppins text-lg">
                Create an Account

                </div>

                <div className="social-buttons flex flex-col items-center mb-5 gap-6 font-poppins">
  <button className="social-button flex justify-center items-center w-full text-[#fcf7f8] border-[#a31621] border py-3 px-4 gap-2 rounded-md shadow-md">
    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <path fill="#EA4335" d="M9 3.48c1.69 0 2.83.73 3.48 1.35l2.55-2.48C13.76.88 11.23 0 9 0 5.48 0 2.53 2.01 1 5.03l2.93 2.27C4.54 5.08 6.44 3.48 9 3.48z"></path>
      <path fill="#4285F4" d="M17.64 9.2c0-.63-.06-1.25-.18-1.84H9v3.48h4.84c-.21 1.14-.84 2.1-1.8 2.74v2.27h2.92c1.71-1.58 2.68-3.92 2.68-6.65z"></path>
      <path fill="#FBBC05" d="M3.96 10.92c-.21-.63-.33-1.3-.33-2 0-.7.12-1.37.33-2l-2.93-2.27C1.02 6.14 0 7.47 0 9c0 1.53 1.02 2.86 2.03 3.68l1.93-2.76z"></path>
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.81 5.96-2.2l-2.92-2.27c-.81.55-1.83.87-3.04.87-2.56 0-4.71-1.73-5.48-4.08H1.06v2.55C2.53 15.99 5.48 18 9 18z"></path>
      <path fill="none" d="M0 0h18v18H0z"></path>
    </svg>
    <span>Sign up with Google</span>
  </button>
  <button className="social-button flex justify-center items-center w-full text-[#fcf7f8] border-[#a31621] border py-3 px-4 gap-2 rounded-md shadow-md">
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <path fillRule="evenodd" fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
    <span>Sign up with GitHub</span>
  </button>
</div>

                <div className="relative flex items-center font-poppins ">
                    <div className="line w-full h-px bg-[#fcf7f8] opacity-10"></div>
                    <span className="absolute left-1/2 transform -translate-x-1/2  px-2 text-[#fcf7f8]">or sign up with</span>
                    <div className="line w-full h-px bg-[#fcf7f8] opacity-10"></div>
                </div>
              
                <form className="form flex flex-col gap-3 font-poppins">
                <div className=" flex flex-col gap-1 ">
                        <label htmlFor="name" className="block">Full name *</label>
                        <input
              type="name"
              className="w-full h-[50px] p-3 border text-sm  border-opacity-80 rounded-lg mb-4 border-[#a31621] focus:outline-none "
              placeholder="creative team"
            />
                    </div>
                    <div className=" flex flex-col gap-1 ">
                        <label htmlFor="email" className="block">Email *</label>
                        <input
              type="email"
              className="w-full h-[50px] p-3 border text-sm  border-opacity-80 rounded-lg mb-4 border-[#a31621] focus:outline-none "
              placeholder="name@gmail.com"
            />
                    </div>


                    
<div className="relative mb-4">
      <label className="block mb-2 text-sm font-medium">Password *</label>
      <input
        type={showPassword ? 'text' : 'password'}
        className="w-full p-3 h-[50px] text-sm border border-[#a31621] border-opacity-80 rounded-lg pr-10 focus:outline-none "
        placeholder="Password"
      />
      <span
        className="absolute inset-y-0 top-7 right-10  flex items-center   cursor-pointer border-l border-[#a31621]"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEyeSlash className="text-gray-500 relative left-4" />
        ) : (
          <FaEye className="text-gray-500  relative left-4" />
        )}
      </span>
    </div>
    <div className="relative mb-4">
      <label className="block mb-2 text-sm font-medium">Confirm password *</label>
      <input
        type={showConfirmPassword ? 'text' : 'password'}
        className="w-full p-3 h-[50px] text-sm border border-[#a31621] border-opacity-80 rounded-lg pr-10 focus:outline-none "
        placeholder="Password"
      />
      <span
        className="absolute inset-y-0 top-7 right-10  flex items-center   cursor-pointer border-l border-[#a31621]"
        onClick={toggleConfirmPassword}
      >
        {showConfirmPassword ? (
          <FaEyeSlash className="text-gray-500 relative left-4" />
        ) : (
          <FaEye className="text-gray-500  relative left-4" />
        )}
      </span>
    </div>
                    <button type="submit" className="form-submit-btn flex justify-center items-center text-white bg-[#a31621] border-none w-full py-3 px-4 rounded-md shadow-md ">
                        Sign up
                    </button>
                </form>

            
                <p className="signup-link text-sm text-center text-[#fcf7f8]">
                Already have an account?
                    <a className="signup-link text-[#a31621] underline" href="#"> Sign in</a>
                </p>
            </div>
        </section>
    );
}