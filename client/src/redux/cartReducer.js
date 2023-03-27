import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state,action) => {
     // verify if the item exists and if is like that just increases his quantity. 
     const item = state.products.find(item => item.id === action.payload.id);

     if(item) {
        item.quantity += action.payload.quantity;
     }else {
        state.products.push(action.payload);
     }

    },
    removeItem: (state,action) => {
      // add everything items except the selected item. 
      state.products = state.products.find(item => item.id !== action.payload); 
    },
    resetCart: (state, action) => {
      state.products = [];
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart} = cartSlice.actions

export default cartSlice.reducer