import { createSlice, configureStore } from '@reduxjs/toolkit'

const productUrl = "http://localhost:3000/Products";

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: undefined
  },
  reducers: {
    update: (state, action) => {
        const {products} = action.payload;
        console.log(products);
        state.products = products;
    }
  }
})

export const { update } = productSlice.actions



export default productSlice.reducer



// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())