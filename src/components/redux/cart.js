import { createSlice } from "@reduxjs/toolkit"


const INITIAL_STATE = {
    cartList:[],
    cartCount:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers:{
    addToCart : (state,action) => {
    state.cartList.push({
        ...action.payload,
        count:1
    })
    },
    dncrement : (state) => {
        state.cartCount -=1
    },
    increment : (state) => {
        state.cartCount += 1
    },
    }
})

export const {addToCart,increment,dncrement} = cartSlice.actions
export default cartSlice.reducer;
























// 1. Provider
// 2. Store
// 3. Reducer
// 4. Action

// Store = state
// Action = Button Click
// Reducer = State Update
// Providet = Recat inject

