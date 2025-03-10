import { createSlice } from "@reduxjs/toolkit";
// import {toast} from "react-hot-toast"
const initialState = {
   totalItems:localStorage.getItem("totalItems")?JSON.parse(localStorage.setItem("totalItems")):0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setTotalItems(state, value) { 
      state.token = value.payload; 
    },

    //add to cart

    //remove cart


    //reset cart


  },
});

export const { setTotalItems } = cartSlice.actions;
export default cartSlice.reducer; // Corrected property name from 'reducers' to 'reducer'
