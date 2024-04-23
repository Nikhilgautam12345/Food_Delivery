import { useParams } from "react-router-dom";
import HomeHotelCards from "../components/HomeHotelCards/HomeHotelCards";
import { useGetSimilaritemQuery } from "../features/counter/apiSlice";
import ShimmerUICards from "../components/ShimmerUI/ShimmerUICards";
import { useEffect } from "react";
const ItemHotels = () => {
  const { id, cuisine } = useParams();
  const { data, isLoading, isError } = useGetSimilaritemQuery(id, cuisine);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  if (isLoading) {
    return (
      <>
        <div className="w-full flex justify-center">
          <div className="w-1/3 rounded  h-12 bg-gray-100 my-16"></div>
        </div>
        <ShimmerUICards />
      </>
    );
  }

  if (isError) {
    return <div>Oops Error fetching data</div>;
  }

  const allHotels = data?.data?.cards;
  const title =
    allHotels && allHotels.length > 0 && allHotels[0].card.card.title;

  return (
    <>
      <div
        className="itemCard pt-12 pb-12"
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        <div className="itemCardsHeading w-full text-center py-3 sm:text-4xl sm:font-medium font-semibold">
          Restaurants with {title} Listing
        </div>
        <div className="itemCardsContainer  md:my-8 sm:my-4 sm:grid grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2  mx-auto flex flex-wrap ">
          {allHotels &&
            allHotels.map((card) => {
              const info = card?.card?.card?.info;
              if (!info) return null; // Skip rendering if info doesn't exist

              return <HomeHotelCards key={info.id} product={card.card.card} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ItemHotels;
