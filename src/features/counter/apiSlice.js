import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
let lat ,long 
navigator.geolocation.getCurrentPosition((p)=>{
   lat = p.coords.latitude
   long = p.coords.longitude
    
})
//  console.log(lat,long)

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.swiggy.com/' }),  
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => {
        return `dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      },
    }),
    getIndividualProduct: builder.query({
      query: (productId) => {
      
        return `dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${long}&restaurantId=${productId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
      },
    }),
    getSimilaritem: builder.query({
      query:  (id,cuisine) => {
        return `/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&collection=${id}&tags=layout_CCS_${cuisine}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetIndividualProductQuery, useGetSimilaritemQuery } = productApi;
