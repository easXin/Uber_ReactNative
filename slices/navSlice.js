import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null
}

export const navSlice = createSlice({
    name:'nav',  // primary layer
    initialState,
    reducer:{  // dispatch action
        // current state object, dispatch action from component to data layer

        setOrigin: (state,action) =>{                     // sub layer
            state.origin = action.payload // information inside the action
        },
        setDestination: (state,action) =>{                // sub layer
            state.destination = action.payload
        },
        setTravelTimeInformation: (state,action) =>{
            state.travelTimeInformation = action.payload  // sub layer
        }
    }
})

// expose available 
export const {  setOrigin,setDestination,setTravelTimeInformation   } = navSlice.actions;

// selectors, access current value in the data layout
export const selectOrigin = state =>state.nav.origin
export const selectDestination = state =>state.nav.destination
export const selectTravelTimeInformation= state =>state.nav.travelTimeInformation


export default navSlice.reducer;


/* connect to 
     navReducer from "./slice/navSlice";
*/