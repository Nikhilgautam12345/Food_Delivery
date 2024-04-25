import { IoArrowBackSharp } from "react-icons/io5";
import { useState } from "react";

const SignInPopup = ({ handleCloseModal }) => {
  const [signIn, setSignIn] = useState(true);
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <>
      <div className="fixed top-0 right-0 w-full h-screen items-center flex justify-end bg-black bg-opacity-50 z-50">
        <div className="right-0 bg-white w-96 p-8 h-screen shadow-lg">
        <div onClick={handleCloseModal} className="border border-black w-fit rounded-full p-1 pointer">
            <IoArrowBackSharp className="size-4"/>
          </div>
          <div className="mb-4">
            <div className="signIn">
              <h2 className="text-2xl font-bold">
                {signIn ? "Login" : "Sign Up"}
              </h2>
            </div>
            <div className="createAccount text-sm">
              or{" "}
              <span
                className="text-orange-600 hover:underline cursor-pointer"
                onClick={toggleSignIn}
              >
                {signIn ? "createAccount" : "sign in to your account"}
              </span>
            </div>
          </div>
          
          {signIn ? (
            <form>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50  sm:px-4 md:py-5 py-3 lg:w-3/5 w-full rounded  border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent focus:border-slate-700  border-slate-400 h-7"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white mt-3"
                  >
                    Create User Name (UNIQUE)
                  </label>
                  <input
                    type="email"
                    className="bg-gray-50  sm:px-4 md:py-5 py-3 lg:w-3/5 w-full rounded  border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent focus:border-slate-700  border-slate-400 h-7"
                    placeholder="username@124&%$"
                  />
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900 dark:text-white mt-3"
                  >
                    Set Password
                  </label>
                  <input
                    type="password"
                    className="bg-gray-50  sm:px-4 md:py-5 py-3 lg:w-3/5 w-full rounded  border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent focus:border-slate-700  border-slate-400 h-7"
                    placeholder="Password"
                  />
                </div>
                <button
            
            className= "text-white bg-orange-600 hover: hover:bg-orange-700 w-fit py-2 px-3 rounded"
          >
            Login
          </button> 
              </div>
            </form>
          ) : (
            <form>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User Name
                  </label>
                  <input
                    type="email"
                    className="bg-gray-50  sm:px-4 md:py-5 py-3 lg:w-3/5 w-full rounded  border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent focus:border-slate-700  border-slate-400 h-7"
                    placeholder="username@124&%$"
                  />
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900 dark:text-white mt-3"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="bg-gray-50  sm:px-4 md:py-5 py-3 lg:w-3/5 w-full rounded  border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent focus:border-slate-700  border-slate-400 h-7"
                    placeholder="Password"
                  />
                  </div>
                  <button className="text-white bg-orange-600 hover: hover:bg-orange-700 w-fit py-2 px-3 rounded">
                    Sign Up
                  </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default SignInPopup;
