import { IoClose } from "react-icons/io5";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
const Logout = ({ setLogoutModal }) => {

    const SignOut=(e)=>{
        e.preventDefault();
        const auth = getAuth();
        signOut(auth)
          .then(() => {
           toast.success("Logged out successfully")
           window.location.reload();
          })
          .catch((error) => {
            console.log(error)
          }); 
    }

  return (
    <>
      <div className="fixed top-0 right-0 w-full h-screen items-center flex justify-center bg-black bg-opacity-50 z-50">
        <div
          className=" w-96  bg-white h-fit items-center justify-center rounded p-4 "
          onClick={() => setLogoutModal(false)}
        >
          <div className="w-full  flex justify-end ">
            <IoClose className="hover:bg-red-600" />
          </div>
          <div className=" flex items-center justify-center p-4 ">
          <div>Do you want to Logut</div>
          </div>
          <div><button className="cursor-pointer text-white bg-orange-500 font-semibold  hover:bg-orange-600 p-1" onClick={SignOut}>Confirm</button></div>
        </div>
      </div>
    </>
  );
};

export default Logout;
