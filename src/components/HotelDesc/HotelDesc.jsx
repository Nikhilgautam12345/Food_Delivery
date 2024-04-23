
import { FaStar } from "react-icons/fa";

const HotelDesc = ({hotelInfo}) => {



  return (
    <>
    <div className="HotelInfoContainer" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
      <div className="imageContainer">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${hotelInfo.cloudinaryImageId}`}
          alt="Image not found"
          className="w-full object-cover h-64 rounded-lg"
        />
      </div>
      <div className="mt-4 mb-10 descContainer">
        <div className="HotelName sm:text-2xl text-xl font-bold ">{hotelInfo.name}</div>
        <div className="HotelRatingContainer flex my-1">
          <span className="StarImage flex items-center text-white bg-green-700 p-1 rounded-full">
            <FaStar />
          </span>
          <span className="HotelRating ml-1 font-medium">{hotelInfo.avgRating}</span>
        </div>
        <div className="DeliveryTimeContainer sm:my-1 sm:text-xl text-sm">
          Estimated delivery time: <span className="DeliveryTime">{hotelInfo.sla.slaString}</span>
        </div>
        <div className="CuisinesContainer sm:my-1 text-sm sm:text-base">
          <span className="CuisineHeading font-medium text-slate-800">Cuisine: </span>
          <span className="CuisineInfo text-slate-700 font-medium">{hotelInfo.cuisines}</span> 
        </div>
        <div className="AreaContainer sm:my-1 text-sm font-medium text-slate-700">
        <span className="AreaHeading">Area: </span>
        <span className="AreaName text-slate-700">
        {hotelInfo.areaName} ({hotelInfo.city})
        </span>
        </div>

        <div className="sm:my-1 text-sm font-medium text-gray-600">{hotelInfo.costForTwoMessage}</div>
      </div>
      <hr />
      </div>
      
    </>
  );
};

export default HotelDesc;
