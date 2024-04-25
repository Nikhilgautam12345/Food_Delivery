import BannerComponent from '../components/BannerComponent/BannerComponent'
import HomeHotelListing from '../components/HomeHotelListing/HomeHotelListing'
import ItemsListing from '../components/ItemsListing/ItemsListing'
import {useGetAllProductsQuery} from '../features/counter/apiSlice'
import ShimmerUICards from '../components/ShimmerUI/ShimmerUICards'
import CarouselShimmer from '../components/ShimmerUI/CarouselShimmer'
const HomePage = () => {

  const {data, isError, isLoading} = useGetAllProductsQuery();

  if(isError)
  {
    return <div></div>
  }

  if(isLoading)
  { 
    return (
      <>
      <CarouselShimmer/>
      <div className="w-full" style={{ paddingLeft: "10%" , paddingRight: "10%" }}>
          <div className="w-1/4 rounded  h-12 bg-gray-100 my-16"></div>
        </div>
        <ShimmerUICards/>
      </>
    )
  }


  const productListing = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const carouselProducts = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
  const allProducts = productListing ? productListing : data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 

  

  return (

    <>
    
      <BannerComponent/>
      {
        carouselProducts &&
        <ItemsListing carouselProducts={carouselProducts}/>
      }
      <HomeHotelListing allProducts={allProducts}/>
  
    </>
  )
}

export default HomePage