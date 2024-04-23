import  { useState, useEffect } from 'react';
import EmptyWatchlist from "../assets/emptyWatchlist.jpg";
import { Link } from 'react-router-dom';
import WatchListCardListing from '../components/WatchListCardListing/WatchListCardListing';
import { useSelector } from 'react-redux';

const WatchlistPage = () => {
  const [isEmptyWatchlist, setIsEmptyWatchlist] = useState(false);

  const component = useSelector((state) => state.counter.products);

  useEffect(() => {
    setIsEmptyWatchlist(component.length === 0);
  }, [component]);

  return (
    <>
      {isEmptyWatchlist ? (
        <section className="text-center flex flex-col pt-10 sm:mb-10 mb-20 justify center item-center h-96">
          <div className=" justify-center flex">
            <img src={EmptyWatchlist} className="size-60" alt="Swiggy Error" />
          </div>
          <h1 className="sm:text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="sm:text-xl mb-5 text-gray-700">You can go to the home page to view more restaurants</p>
          <div>
            <Link
              to="/"
              className="text-white bg-orange-600 text-sm sm:text-base hover:bg-orange-700 w-fit p-1 sm:p-2"
            >
              SEE RESTAURANTS NEAR YOU
            </Link>
          </div>
        </section>
      ) : (
        <WatchListCardListing />
      )}
    </>
  );
};

export default WatchlistPage;
