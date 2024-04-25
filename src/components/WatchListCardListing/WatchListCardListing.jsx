
import WatchListCard from "../WatchListCard/WatchListCard";
import { useSelector } from "react-redux";


const WatchListCardListing = () => {
  const watchList = useSelector((state) => state.counter);
  let cartCards = watchList.products;

  let newUser = { id: "1" };

  const addId = async () => {
    const res = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    return res.json();
  };

  return (
    <>
      <div
        className="WatchListContainer py-8 sm:text-2xl  sm:py-16 font-semibold"
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        <div className="text-3xl">WatchList</div>
        <div>
          {cartCards.map((CartCard, index) => (
            <WatchListCard key={index} CartCard={CartCard} />
          ))}
        </div>
        <div className="px-10 mt-4 py-4  border">
        <div className="justify-between flex items-center">
        <span className="text-xl"> Total: </span>
        <span className="text-green-800 text-xl font-bold px-4">₹{cartCards.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )}</span> 
          </div>
          <div className="flex justify-end py-2 pr-2">
          <button className="text-white bg-orange-600 hover: hover:bg-orange-700 w-fit py-1 px-4 rounded-full" onClick={addId}>Pay</button>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default WatchListCardListing;
