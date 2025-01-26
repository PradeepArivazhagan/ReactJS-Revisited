import { createSlice } from "@reduxjs/toolkit";

let dataFromWeb = JSON.parse(localStorage.getItem("cart"));
const cartSlice = createSlice({
  name: "cart",
  initialState: dataFromWeb,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify([...state]));
    },
    removeItem: (state, action) => {
      let newProductsList = state.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
      localStorage.setItem("cart", JSON.stringify([...newProductsList]));
      return newProductsList;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
