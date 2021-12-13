// setup data layer
import { configureStore } from "@reduxjs/toolkit";
// separate data into different layer
import navReducer from "./slices/navSlice";

export const store = configureStore({
    // store
    reducer:{
        nav:navReducer,
    }
});