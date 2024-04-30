import { useEffect } from "react";
import HotelDesc from "../components/HotelDesc/HotelDesc";
import FoodItemListing from "../components/FoodItemListing/FoodItemListing";
import { useGetIndividualProductQuery } from "../features/counter/apiSlice";
import { useParams } from "react-router-dom";
import IndiPageShimmer from "../components/ShimmerUI/IndiPageShimmer";
import '../components/FoodItemListing/FoodItemListing.css'

const IndividualHotel = () => {
  let { productId } = useParams();
  let { cuisine } = useParams();
  const { data, isLoading } = useGetIndividualProductQuery(productId,cuisine);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);


  if (isLoading) {
    return <IndiPageShimmer />;
  }



  let groupedCardIndex = data?.data?.cards.length-1
  let hotelItemsInfo =data?.data?.cards[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  let hotelInfo = data?.data?.cards[2]?.card?.card?.info;


  return (
    <div
      className=" md:pt-20 pt-10 mb-10 flex flex-col w-full"
     
    >
      {hotelInfo && <HotelDesc hotelInfo={hotelInfo} />}

      <div className="AccordianWrapper pt-10" >
      {hotelItemsInfo &&
        hotelItemsInfo.map((product, index) => (
          
          <FoodItemListing
          key={index}
            product={product}
            parentId={hotelInfo.id}
          />
          
        ))}
        </div>
    </div>
  );
};

export default IndividualHotel;
