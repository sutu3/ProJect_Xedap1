import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from '../product/productSlice'
const store=configureStore({
    reducer:{
        product:ProductSlice.reducer
    }
})
export default store