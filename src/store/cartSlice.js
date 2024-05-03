import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items.pop();

      state.items = state.items.filter((item) => item.id != action.payload.id);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
// export const cartActions = cartSlice.actions;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
