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
    dncrement : (state,action) => {
       const productID =  action.payload
       state.cartList.forEach(item =>{
        if(item?.id === productID){
            item.count++
        }
       })
    },
    increment : (state,action) => {
        const productID =  action.payload
       state.cartList.forEach(item =>{
        if(item?.id === productID){
            item.count--    
        }
       })
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

