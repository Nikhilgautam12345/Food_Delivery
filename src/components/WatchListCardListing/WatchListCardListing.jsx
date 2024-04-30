
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
   <div className="WatchListContainer py-8 sm:text-2xl sm:py-16 font-semibold mx-auto max-w-4xl">
  <div className="text-3xl mb-6">WatchList</div>
  {cartCards.map((CartCard, index) => (
    <WatchListCard key={index} CartCard={CartCard} />
  ))}
  <div className="px-6 mt-6 py-4 border">
    <div className="flex justify-between items-center">
      <span className="text-xl">Total:</span>
      <span className="text-green-800 text-xl font-bold pr-3">₹{cartCards.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      )}</span>
    </div>
    <div className="flex justify-end mt-4">
      <button className="px-5 py-1 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 focus:outline-none" onClick={addId}>
        Pay
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default WatchListCardListing;
