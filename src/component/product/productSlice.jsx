import {createSlice} from '@reduxjs/toolkit'
const ProductSlice=createSlice({
    name: 'product',
    initialState:{state:'idle',products:[],filter:''},
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload);
            console.log(state.products)
        },
        changefilter:(state,action)=>{
            state.filter = action.payload
        }
    }
})
export default ProductSlice;