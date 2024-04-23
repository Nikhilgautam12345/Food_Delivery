import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './HomeHotelCards.css'
import { useParams } from "react-router-dom";

const HotelCards = ({ product }) => {
  const {cuisine} =useParams();
  let productData = product.info;
  let cuisineLength = productData?.cuisines?.length;
  let productId = product.info.id;


  return (
    <>
      <NavLink
        to={cuisine ? `../../${productId}` : `${productId}`}
        className="hotelCardsWrapper m-3 hover:shadow-xl rounded-lg"
      >
        <div className="hotelCards m-1 hover:scale-95 transition-transform duration-300 origin-center">
          <div className="hotelImageContainer  truncate flex relative">
            <div className="hotelImage max-h-48 min-h-48">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${productData.cloudinaryImageId}`}
                className=" rounded-2xl h-full w-full object-cover"
                alt="Hotel"
              />
            </div>
            <div className="absolute imageText bottom-0 left-0 text-lg text-white w-full font-bold text-center pb-4  content-end
               sm:text-lg xl:text-xl md:text-sm lg:text-base">
              {productData?.aggregatedDiscountInfoV3?.header}{" "}
              {productData?.aggregatedDiscountInfoV3?.subHeader}
            </div>
          </div>
          <div className="descContainer py-1.5 pl-2">
            <div className="hotelName font-medium">{productData.name}</div>
            <div className="infoContainer py-1 font-medium flex">
              <div className="ratingContainer flex ">
                <span className="starImage flex items-center text-white bg-green-700 p-1 rounded-full">
                  <FaStar className=" size-3" />
                </span>
                <span className="rating text-sm px-1">
                  {productData.avgRating}  <span className="font-bold">• </span>
                </span>
              </div>
              <div className="text-sm">{productData.sla.slaString}</div>
            </div>
            <div className="cuisineContainer text-gray-500 font-medium text-xs py-0.5">
              {cuisineLength > 2
                ? `${productData.cuisines.slice(0, 2)}...`
                : productData.cuisines}
            </div>

            <div className="areaContainer text-gray-500 font-medium text-xs py-0.5">
              {productData.areaName}
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default HotelCards;
