import {createSlice } from '@reduxjs/toolkit'
const productSlice =createSlice({
      name:'product', 
      initialState:{
        items: [],
        loading:false,
        error:null
      },
      reducers:{
        setLoading(state, action){
            state.loading=action.payload;
        },
        setItems(state, action){
            state.items=action.payload;
            state.loading = false;
            state.error = null;
        },
        setError: (state, action) => {
           state.error = action.payload;
           state.loading = false;
        },
      }
})
export const {setLoading, setItems, setError}=productSlice.actions
export default productSlice.reducer