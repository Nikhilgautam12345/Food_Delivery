import { useState } from "react";
import "./ItemsListing.css";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const ItemsListing = ({ carouselProducts }) => {
  let itemsArray = carouselProducts;
  let [itemsStartIndex, setItemsStartIndex] = useState(0);
  let [itemsEndIndex, setItemsEndIndex] = useState(5);

  const showNextItem = () => {
    const remainingItems = itemsArray.length - itemsEndIndex - 1;
    if (remainingItems <= 0) {
      return;
    }

    if (remainingItems < 3) {
      setItemsStartIndex(itemsArray.length - 6);
      setItemsEndIndex(itemsArray.length - 1);
    } else {
      setItemsStartIndex(itemsStartIndex + 3);
      setItemsEndIndex(itemsEndIndex + 3);
    }
  };

  const showPrevItem = () => {
    if (itemsStartIndex === 0) {
      return;
    }

    if (itemsStartIndex < 3) {
      setItemsStartIndex(0);
      setItemsEndIndex(5);
    } else {
      setItemsStartIndex(itemsStartIndex - 3);
      setItemsEndIndex(itemsEndIndex - 3);
    }
  };

  const capitalizeFirstLetter = (text) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  };

  return (
    <div className="sm:font-bold font-semibold ItemsContainer sm:mt-16 sm:mb-8 mt-5">
      <div className="HeadingAndButtons flex items-center justify-between">
        <div className="CarouselHeading sm:text-2xl mb-2">
          {"What's on your mind?"}
        </div>
        <div className="CarouselButtons flex items-center md:mr-12">
        
            <span
              className="preButtonContainer flex items-center bg-gray-300 hover:bg-gray-400 p-1.5 mx-1 rounded-full cursor-pointer"
              onClick={showPrevItem}
              style={{ backgroundColor: itemsStartIndex === 0 ? "rgb(239, 240, 240)" : "" }}
            >
              <button className="preButton"
              
              >
                <GrLinkPrevious className="sm:size-5 size-2" />
              </button>
            </span>
          <span
            className="nextButtonContainer flex items-center bg-gray-300 hover:bg-gray-400 mx-1 p-1.5 rounded-full cursor-pointer"
            onClick={showNextItem}
            style={{ backgroundColor: itemsEndIndex === itemsArray.length-1 ? "rgb(239, 240, 240)" : "" }}
          >
            <button className="nextButton">
              <GrLinkNext className="sm:size-5 size-2" />
            </button>
          </span>
        </div>
      </div>
      <div className="ItemCardsContainer flex transition-transform">
        {itemsArray
          .slice(itemsStartIndex, itemsEndIndex + 1)
          .map((item, index) => (
            <NavLink
              to={
                item.entityId.length === 5
                  ? `${item.entityId}/${capitalizeFirstLetter(
                      item.action.text.split(" ").join("")
                    )}`
                  : `${item.entityId.slice(36, 41)}/${capitalizeFirstLetter(
                      item.action.text.split(" ").join("")
                    )}`
              }
              key={index}
              className="m-auto"
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                alt={`Item ${index}`}
              />
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default ItemsListing;
