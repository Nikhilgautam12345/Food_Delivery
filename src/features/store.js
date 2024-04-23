import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice.js'
import { setupListeners } from '@reduxjs/toolkit/query'
import {productApi} from './counter/apiSlice.js'

export const store = configureStore({
  reducer: {
   [productApi.reducerPath]: productApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)