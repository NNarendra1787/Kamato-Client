import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: localStorage.getItem("userId")
      ? localStorage.getItem("userId")
      : null,
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => {
              console.log(item.no);
      
              return item.no === action.payload.no;
            });
            if (itemIndex >= 0) {
              state.cartItems[itemIndex].cartQuantity += 1;
             
            } else {
              const tempProduct = { ...action.payload, cartQuantity: 1 };
              state.cartItems.push(tempProduct);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            // state.push(action.payload)
          },
          
    }
})

export const {
    add,
} = cartSlice.actions;

export default cartSlice.reducer;