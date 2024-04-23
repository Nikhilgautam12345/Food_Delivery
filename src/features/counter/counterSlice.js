import { createSlice } from "@reduxjs/toolkit";

const storedCartData = JSON.parse(localStorage.getItem("localCartData"));
const initialState = {
  products: storedCartData ? storedCartData.products : [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.products.findIndex((p) => p.id === id);

      // console.log(existingProductIndex)

      if (existingProductIndex !== -1) {
        // If existing product is found
        const updatedProducts = state.products.map((product, index) => {
          if (index === existingProductIndex) 
          {
            
           return {...product,quantity: product.quantity + 1}  
          }
          return product;
        });
        let localStoragedata = JSON.parse(localStorage.getItem('localCartData'))
        localStoragedata.products[existingProductIndex].quantity++
        localStorage.setItem('localCartData', [JSON.stringify(localStoragedata)])
        
        return { ...state, products: updatedProducts };
      } 
      else {
        // If existing product is not found, add a new product
        const newProduct = { ...state, products: [...state.products, action.payload] };
        localStorage.setItem('localCartData', [JSON.stringify(newProduct)])
        return newProduct;
      }
    },
    decrement: (state, action) => {
      const updatedProducts = state.products.map((p) => {
          if (p.id === action.payload.id) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        }).filter((p) => p.quantity > 0); // Remove items with quantity 0 or less

        let localStoragedata = JSON.parse(localStorage.getItem('localCartData'))
       
          localStoragedata = {products : updatedProducts}
          localStorage.setItem('localCartData', [JSON.stringify(localStoragedata)])
          state.products = updatedProducts;
       
      
    },
 
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;




// The presence of a Proxy object in the console log output likely indicates that the state object or its properties are being proxied by some middleware or tool, such as Redux DevTools or some other library that intercepts state changes.

// A Proxy object is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, etc.) on another object (known as the target). When you log an object to the console that is proxied, the console might display information about the proxy itself rather than the target object.

// Regarding how the logic updates the state even with this proxy object:

// In your logic, you're directly modifying the quantity property of the existingProduct object if it exists. Even if the object is proxied, modifying its properties directly will still update the underlying object (the target of the proxy), which in turn updates the Redux state.

// However, directly modifying objects in the Redux state is generally discouraged because it can lead to issues with immutability and tracking state changes. Redux works best when state mutations are handled immutably, meaning you should always create new objects or arrays instead of modifying existing ones. This ensures that Redux can accurately track changes to the state.

// If you're using Redux Toolkit, you can safely modify the state immutably by following the patterns it provides. For example, you can use the slice's extraReducers or reducers section with immutable update logic, or you can use utility functions like immer within your reducers to handle immutability automatically.