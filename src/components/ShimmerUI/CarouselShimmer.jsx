const CarouselShimmer =()=>{
return(
    <>
        <div className="carouselShimmerCompoent sm:mt-16 sm:mb-8 mt-5"
        style={{marginLeft:"10%", marginRight:"10%"}}>
            <div className="carouselHeadingButtonShimmer h-10 flex items-center justify-between mb-8">
                <div className="carouselHeadingShimmer bg-gray-100  h-full w-1/3 "></div>
                <div className="carouselButtonShimmer flex items-center h-full md:mr-12">
                    <span className="flex items-center bg-gray-100 mx-2 h-full w-10   rounded-full"></span>
                    <span className="flex items-center bg-gray-100 h-full w-10 rounded-full"></span>
                </div>
            </div>
            <div className="carouselContainerShimmer flex items-center justify-between gap-5">
    <div className="flex-1 min-w-6 min-h-10 sm:min-h-10 bg-gray-100" style={{aspectRatio : "1/1"}}></div>
    <div className="flex-1 min-w-6 min-h-10 sm:min-h-10 bg-gray-100" style={{aspectRatio : "1/1"}}></div>
    <div className="flex-1 min-w-6 min-h-10 sm:min-h-10 bg-gray-100" style={{aspectRatio : "1/1"}}></div>
    <div className="flex-1 min-w-6 min-h-10 sm:min-h-10 bg-gray-100" style={{aspectRatio : "1/1"}}></div>
    <div className="flex-1 min-w-6 min-h-10 sm:min-h-10 bg-gray-100" style={{aspectRatio : "1/1"}}></div>
    <div className="flex-1 min-w-6 min-h-10 sm:min-h-10 bg-gray-100" style={{aspectRatio : "1/1"}}></div>
            </div>


        </div>
    </>
)
}
export default CarouselShimmer

