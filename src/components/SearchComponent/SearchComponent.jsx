    import { useState,useEffect } from "react";
    import { useGetAllProductsQuery } from "../../features/counter/apiSlice"
    const SearchComponent = ({setFilteredData,setShowFilterModal}) => {
        const {data,isLoading} = useGetAllProductsQuery();
        const [allProduct,setAllProduct] = useState([])
        const [userInput,setUserInput] = useState ("")


        // Getting all product data from redux store
        useEffect(()=>{
            if(!isLoading) setAllProduct(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
        },[allProduct,data,isLoading])

        // Filtering products from data
         const filterHandler = (e)=>{
             setUserInput(e.target.value)
             if(e.target.value.length>0)
             {
                const filteredProducts = allProduct.filter((p) => p.info.name.toLowerCase().includes(userInput.toLowerCase()));
                setFilteredData (filteredProducts)
                setShowFilterModal(true)
             }  
             if(e.target.value == "") 
             {   
                 setShowFilterModal(false)
                 return
             }
         }

         console.log(data)
             
    return (
        <>
            <div className="SearchContainer font-medium flex justify-center grow sm:ml-5">
                <input
                type="text"
                className="bg-gray-50  sm:px-4 md:py-5 py-3 lg:w-3/5 w-4/5 rounded  border focus:outline-none placeholder:text-sm lg:placeholder:text-base md:placeholder-gray-400 placeholder-transparent focus:border-slate-700  border-slate-400 h-7"
                placeholder="Search for restaurants"
                onChange={filterHandler}
                value={userInput}
                />
            </div>
        </>
    )
    }

    export default SearchComponent