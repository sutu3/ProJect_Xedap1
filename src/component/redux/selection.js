import {createSelector} from '@reduxjs/toolkit'
export const product =(state)=>state.product.products;
export const filter =(state)=>state.product.filter;
export const remaining = createSelector(product, filter, (product, filter) => {
    return product.filter((el) => {
        console.log(filter);
        console.log(el.type);
        return el.type.includes(filter);
    });
});
