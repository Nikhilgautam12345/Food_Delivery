import { useEffect, useState } from "react";
import SwiggyImage from "../../assets/SwiggyLogo.png";
import "./Navigation.css";
import { RxAvatar } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import SignInPopup from "../SignInPopup/SignInPopup";
import { useSelector } from "react-redux";
import SearchComponent from "../SearchComponent/SearchComponent";
import HotelCards from "../HomeHotelCards/HomeHotelCards";

const Navigation = () => {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [cartQuantity , setCartQuantity] = useState(0);
  const [filtereddata , setFilteredData] = useState([])
  const watchList = useSelector((state) => state.counter);
  const [showfilterModal, setShowFilterModal] = useState(false)

  //Cart from redux store
  useEffect(() => {
      setCartQuantity(watchList.products.length);
  }, [watchList]);


  //Sigin Popup Handlers
  const handleSignInClick = () => { 
    setShowSignInPopup(!showSignInPopup);
  };

  const handleCloseSiginModal = () => {
    setShowSignInPopup(false);
  };

  return (
    <>
    {/*Whole Nvigation Container*/}
      <div className="NavigationContainer sticky top-0 z-50 flex items-center bg-white w-full justify-between">
        <div className="flex items-center py-4 grow">

        {/*Logo Container*/}
          <NavLink to="/">
            <div className="logoContainer sm:ml-5 flex items-center mx-4 transform transition duration-300 ease-in-out hover:scale-110">
              <span className="logoImageContainer">
                <img src={SwiggyImage} className="logoImage" alt="Swiggy Logo" />
              </span>
              <span className="logoTextContainer pl-1 hidden sm:block  text-orange-600 font-bold">
                SWIGGY
              </span>
            </div>
          </NavLink>

          {/*Search Component*/}
         <SearchComponent setFilteredData={setFilteredData} setShowFilterModal={setShowFilterModal}/></div>

        {/*Signin Logo*/}  
        <div className="flex items-center">
          <div className="flex font-medium items-center sm:mx-2">
            <span className="flex px-1 text-gray-600 hover:text-orange-600 cursor-pointer" onClick={handleSignInClick}>
              <RxAvatar className="size-7 " />
              <span className="hidden sm:block ">Sign In</span>
            </span>
            {
              
            }

            {/*Watchlist Logo*/}
            <NavLink
              to="/watchlist"
              className="flex px-1 font-medium items-center sm:mx-2 text-gray-600"
            >
               <span className={  cartQuantity ?
               " flex justify-center  hover:text-orange-600 text-orange-400 items-center relative"
               :
               " flex justify-center  hover:text-orange-600  items-center relative"
              }>
    
            {/* cart */}
            <span >
              <CiShoppingCart className="size-8   " />
              </span>
              <span className="hidden sm:block">Cart </span>
              <span className="absolute  left-3.5 text-sm">{cartQuantity!=0 && (cartQuantity)}</span>
            </span>
            </NavLink>
          </div>
        </div>
      </div>
     
     {/* signin modal */}
      {showSignInPopup && (
        <div className="modal-overlay">
          <SignInPopup handleCloseModal={handleCloseSiginModal}/>
        </div>
      )}

      {/* filter modal */}
      {
        ( showfilterModal) && (
          <div className='filteredDatamodal md:my-16 sm:my-12 my-4'>
           <div className="fixed top-0 right-0 w-full h-screen pt-40 bg-white overflow-y-auto z-40 "
           >
           <div  style={{ marginLeft: "10%", marginRight: "10%" }}  >
           <div className='modalCardHeading  sm:text-2xl font-bold sm:pb-2 md:pb-4 sm:text-left pl-10 z-40'
           
           >Search for Your Hotels</div>

           <div className='ModalCardsContainer md:my-8 sm:my-4 flex sm:grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mx-auto justify-center flex-wrap '
               
           >          
           
           {filtereddata.map((item)=><HotelCards key={item.info.id} product={item}/>)}
           </div>
           </div>
           </div>
          </div>
        )
      }

    </>
  );
};

export default Navigation;
