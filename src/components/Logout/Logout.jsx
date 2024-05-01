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
      <div className="w-80 bg-white rounded shadow-lg p-4">
  <div className="flex justify-end">
    <button onClick={() => setLogoutModal(false)} className="text-gray-600 hover:text-gray-800">
      <IoClose />
    </button>
  </div>
  <div className="text-center my-4">
    <h2 className="text-xl font-semibold text-gray-800">Logout</h2>
    <p className="text-gray-600">Are you sure you want to logout?</p>
  </div>
  <div className="flex justify-center mt-6">
    <button onClick={SignOut} className="px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-400">
      Confirm
    </button>
  </div>
</div>

      </div>
    </>
  );
};

export default Logout;
