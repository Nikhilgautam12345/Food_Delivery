import { IoArrowBackSharp } from "react-icons/io5";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../firebase/firebaseConfig";
import { useRef } from "react";
import { CheckValidateData } from "../../utils/Validate";

const SignInPopup = ({ handleCloseModal,setUsername }) => {
  const [signIn, setSignIn] = useState(true);
  const nameref = useRef(null);
  const emailref = useRef(null);
  const passref = useRef(null);
  const [errorMsg, setErrorMsg] = useState();
  const [loginerrorMsg, setLoginErrorMsg] = useState();

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  

  const fetchData = async () => {
    const email=emailref.current.value
    const name=nameref.current.value
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    };
  
    try {
      const response = await fetch(
        "https://food-delivery-227e4-default-rtdb.europe-west1.firebasedatabase.app/UserData.json",
        options
      );
  
      if (!response.ok) {
        throw new Error("Failed to store data in the database");
      }
  
      console.log("Data stored successfully");
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };
  
  const signUp = async (e) => {
    e.preventDefault();
    const message = CheckValidateData(
      emailref.current.value,
      passref.current.value
    );
    setErrorMsg(message);

    if (message) {
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailref.current.value,
        passref.current.value
      );
  
      const user = userCredential.user;
      console.log("User:", user);
      toast.success("Sign Up successfully");
      await fetchData(); // Wait for the data to be fetched before proceeding
      setUsername(nameref.current.value)
      handleCloseModal();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(errorCode + "-" + errorMessage);
    }
  };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailref.current.value,
      passref.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login successfully");
        handleCloseModal();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginErrorMsg(errorCode + "-" + errorMessage);
      });
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-full h-screen items-center flex justify-end bg-black bg-opacity-50 z-50">
        <div className="right-0 bg-white sm:w-96 w-80 sm:p-8 py-8 px-2 h-screen shadow-lg">
          <div className="authenticationContainer">
            <div
              onClick={handleCloseModal}
              className="border border-black w-fit rounded-full p-1 cursor-pointer"
            >
              <IoArrowBackSharp className="size-4" />
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
              <form className="w-4/5">
                <div className="loginContainer">
                  <div className="emailContainer">
                    <label className=" flex flex-col">Email</label>
                    <input
                      type="email"
                      className="sm:px-4 md:py-4 py-3 lg:w-4/5 w-full border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent border-slate-00 h-7"
                      ref={emailref}
                    />
                  </div>
                  <div className="passwordContainer">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mt-3">
                      Password
                    </label>
                    <input
                      type="password"
                      ref={passref}
                      className="sm:px-4 md:py-4 py-3 lg:w-4/5 w-full border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent border-slate-00 h-7"
                      placeholder="Password"
                    />
                    {loginerrorMsg && (
                      <div className="font-semibold text-red-600">
                        {loginerrorMsg}
                      </div>
                    )}
                    <div className="Loginbtn">
                      <button
                        className="text-white bg-orange-500 font-semibold mt-5 hover:bg-orange-600 w-fit p-2 "
                        onClick={login}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <form>
                <div className="SignUpContainer">
                  <div className="nameContainer flex flex-col">
                    <label className=" text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <input
                      ref={nameref}
                      type="text"
                      className="sm:px-4 md:py-4 py-3 lg:w-4/5 w-full border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent border-slate-00 h-7"
                      placeholder="Name"
                    />
                  </div>
                  <div className="emailContainer">
                    <label className=" flex flex-col">Email</label>
                    <input
                      type="email"
                      className="sm:px-4 md:py-4 py-3 lg:w-4/5 w-full border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent border-slate-00 h-7"
                      ref={emailref}
                    />
                  </div>
                  <div className="passwordContainer">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mt-3">
                      Password
                    </label>
                    <input
                      type="password"
                      ref={passref}
                      className="sm:px-4 md:py-4 py-3 lg:w-4/5 w-full border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent border-slate-00 h-7"
                      placeholder="Password"
                    />
                  </div>
                  {errorMsg && (
                    <div className="errorContainer text-red-600 font-semibold">
                      {errorMsg}
                    </div>
                  )}
                  <div className="signUpbtn">
                    <button
                      className="text-white bg-orange-500 font-semibold mt-5 hover:bg-orange-600 w-fit p-2 "
                      onClick={signUp}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPopup;
