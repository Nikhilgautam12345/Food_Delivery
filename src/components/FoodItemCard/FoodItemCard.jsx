import  { useState, useEffect } from "react";
import { FaCircle, FaStar } from "react-icons/fa";
import { decrement, increment } from "../../features/counter/counterSlice";
import { useDispatch } from "react-redux";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';



const FoodItemCard = ({ iteminfo, parentId }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState();
  const watchList = useSelector((state) => state.counter);

  const [itemInCart, setItemInCart] = useState(false);
  useEffect(() => {
    const itemCart = watchList.products.find((item) => item.id === iteminfo.id);

    if (itemCart) {
      setQuantity(itemCart.quantity); // Update quantity if item is in cart
      setItemInCart(true);
    } else {
      setQuantity(0); // Reset quantity if item is not in cart
      setItemInCart(false);
    }
  }, [watchList]);

  return (
    <>
      <div className="itemContainer sm:px-8 px-2 flex w-full sm:pt-8 sm:pl-4 border py-6 ">
        <div className="itemDesc w-4/5">
          {iteminfo?.isVeg == 1 ? (
            <div className="FoodVegetarianTag w-fit">
              <span className="p-0.5 rounded border-2 border-green-700 w-fit flex justify-center">
                <FaCircle className="text-green-900 size-2" />
              </span>
            </div>
          ) : (
            <div className="VegetarianTag">
              <span className="p-0.5 rounded border-2 border-red-700 w-fit flex justify-center">
                <FaCircle className="text-red-900 size-2" />
              </span>
            </div>
          )}

          <div className="FooditemName text-sm sm:text-xl font-medium text-gray-700">
            {iteminfo.name}
          </div>
          <div className="FooditemPrice text-xs sm:text-base font-medium">
            ₹
            {iteminfo.price
              ? iteminfo.price / 100
              : iteminfo.defaultPrice / 100}
          </div>
          {iteminfo.ratings.aggregatedRating.rating ? (
            <div className="flex reviewContainer py-2">
              <span className="flex items-center text-green-900 text-sm">
                <FaStar />
                <span className="font-medium">
                  {iteminfo.ratings.aggregatedRating.rating}
                </span>
              </span>
              <span className="text-slate-600 text-sm font-medium">
                ({iteminfo.ratings.aggregatedRating.ratingCountV2})
              </span>
            </div>
          ) : null}

          <div className="FoodItemDesc text-xs text-slate-600 sm:text-sm font-medium">
            {iteminfo.description}
          </div>
        </div>
        <div className="itemImageContainer max-w-48  w-24 grow flex justify-center flex-col">
          {iteminfo.imageId && (
            <span className="itemImage max-h-48">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${iteminfo.imageId}`}
                className=" h-full w-full object-cover"
                alt="Error"
              />
            </span>
          )}

          {itemInCart ? (
            <div className="itemAmount justify-center flex mt-1">
              <div className="bg-white border flex items-center border-green-900 rounded-full h-fit w-fit">
                <span>
                  <button
                    className=" text-green-900 sm:p-2"
                    onClick={() =>
                    {  dispatch(
                        decrement({
                          name: iteminfo.name,
                          id: iteminfo.id,
                          quantity: 1,
                        })
                      )
                      toast.success(`${iteminfo.name} removed from cart`);
                      }
                    }
                  >
                    <IoIosRemove />
                  </button>
                </span>
                <span className=" justify-center flex">
                  <div className=" text-green-900 sm:px-2.5  min-w-8 justify-center flex">{quantity}</div>
                </span>
                <span
                  className=" cursor-pointer"
                  onClick={() =>
                  {  dispatch(
                      increment({
                        name: iteminfo.name,
                        id: iteminfo.id,
                        quantity: 1,
                      })
                    )
                    toast.success(`${iteminfo.name} added to cart`);
                    }
                  }
                >
                  <button className="  text-green-900 sm:p-2">
                    <IoIosAdd />
                  </button>
                </span>
              </div>
            </div>
          ) : (
            <div className=" flex justify-center mt-1  cursor-pointer">
              <div className="bg-white border hover:bg-gray-100 border-gray-500 hover:border-green-700 rounded-full px-3 py-1 flex items-center justify-center">
                <button
                  className="font-bold text-sm hover:text-green-700 text-gray-800"
                  onClick={() => {
                    dispatch(
                      increment({
                        name: iteminfo.name,
                        id: iteminfo.id,
                        quantity: 1,
                        parentId: parentId,
                        price: iteminfo.price
                          ? iteminfo.price / 100
                          : iteminfo.defaultPrice / 100,
                      })
                    )
                    toast.success(`${iteminfo.name} added to cart`);
                   
                  }}
                > 
                  Add
                </button>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodItemCard;
