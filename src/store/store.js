import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"; 
import { baseApi } from "../features/adsSlice/Api"; 
// import adsUserReducer from '../features/AdsSlice/AdsSlice'

export const store =configureStore({
    reducer:{
        // adsUser: adsUserReducer,
        [baseApi.reducerPath]:baseApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(baseApi.middleware)
});
setupListeners(store.dispatch)