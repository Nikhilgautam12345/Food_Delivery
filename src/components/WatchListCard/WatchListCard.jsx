import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const WatchListCard = ({ CartCard }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stateData = useSelector((state) => state.counter);
  // console.log(stateData)

  const pageNavigate = (e) => {
    const selectedHotel = stateData.products.find(
      (item) => e.target.getAttribute("data-id") === item.id
    );

    // console.log(selectedHotel)
    navigate(`../${selectedHotel.parentId}`);
  }

    const handleAddCart =() =>
   { dispatch(
      increment({
        name: CartCard.name,
        id: CartCard.id,
        quantity: 1,
      })
    )
    toast.success(`${CartCard.name} added to cart`);
  }

  const handleRemovecart =()=>{
    dispatch(
      decrement({
        name: CartCard.name,
        id: CartCard.id,
        quantity: 1,
      })
    )
    toast.success(`${CartCard.name} removed from cart`);
  }

console.log(CartCard)

  return (
    <>
      <div className=" pt-8">
        <div className="watchListItemContainer flex justify-between border p-3 ">
          <div className="watchListItemDesc ">
            <div
              className="watchListItemName sm:text-xl font-medium text-gray-700 cursor-pointer"
              onClick={pageNavigate}
              data-id={CartCard.id}
            >
              {CartCard.name}
            </div>
            <div >₹{CartCard.price} * {CartCard.quantity} = {CartCard.price * CartCard.quantity}</div>
          </div>
          <div className="watchListItemAmount">
            <div className="bg-white border flex items-center border-green-900 rounded h-fit w-fit">
              <span>
                <button
                  className=" text-green-900 sm:p-2"
                  onClick={handleRemovecart}
                >
                  <IoIosRemove />
                </button>
              </span>
              <span className="w-8 justify-center flex">
                <div className=" text-green-900 sm:p-2">
                  {CartCard.quantity}
                </div>
              </span>
              <span
                className=" cursor-pointer"
                onClick={handleAddCart}
              >
                <button className="  text-green-900 sm:p-2" >
                  <IoIosAdd />
                 
                </button>

              </span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default WatchListCard;
