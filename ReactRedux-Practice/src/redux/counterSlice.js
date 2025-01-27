import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    addition: (state) => {
      return (state += 1);
    },
    subtraction: (state) => {
      return (state -= 1);
    },
  },
});

export const { addition, subtraction } = counterSlice.actions;

export default counterSlice.reducer;
