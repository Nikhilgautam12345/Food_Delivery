
import HotelCards from '../HomeHotelCards/HomeHotelCards'
import './HomeHotelListing.css'

const HotelListing = ({allProducts}) => {
  return (
    <>
    <div className='HotelListing md:my-16 sm:my-12 my-4'>
    <div className='HotelCardHeading sm:text-2xl sm:font-bold font-semibold sm:pb-2 md:pb-4 sm:text-left text-center'>Restaurant chains</div>
    <div className='HotelCardsContainer md:my-8 sm:my-4 sm:grid grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2  mx-auto flex flex-wrap '>
    {allProducts.map((product)=> <HotelCards key={product.info.id} product={product} />) }
    </div>
    </div>
    </>
  )
}

export default HotelListing