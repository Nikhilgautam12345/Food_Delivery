    import { useState } from "react";
    import { useGetAllProductsQuery } from "../../features/counter/apiSlice"
    const SearchComponent = ({setFilteredData,setShowFilterModal}) => {
        const {data,isLoading} = useGetAllProductsQuery();
        const [allProduct,setAllProduct] = useState([])
        const [userInput,setUserInput] = useState ("")

         

        // Filtering products from data
         const filterHandler = (e)=>{
            if(!isLoading) 
            {
                const productListing = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                const jsonProducts = productListing ? productListing : data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 

                setAllProduct(jsonProducts)
            }   

             setUserInput(e.target.value)
             if(e.target.value.length>0)
             {
                const filteredProducts = allProduct.filter((p) => p.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
                setFilteredData (filteredProducts)
                setShowFilterModal(true)
             }  
             if(e.target.value == "") 
             {   
                 setShowFilterModal(false)
                 return
             }
         }
             
    return (
        <>
            <div className="SearchContainer font-medium flex justify-center grow sm:ml-5">
                <input
                type="text"
                className="bg-gray-50  sm:px-4 px-2 md:py-5 py-3 lg:w-3/5 w-9/12 rounded  border focus:outline-none placeholder:text-xs md:placeholder:text-base placeholder-gray-400  focus:border-slate-700  border-slate-400 h-7"
                placeholder="Search for restaurants"
                onChange={filterHandler}
                value={userInput}
                />
            </div>
        </>
    )
    }

    export default SearchComponent