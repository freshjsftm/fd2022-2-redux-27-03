import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'counter',
  initialState: {
    count:0
  },
  reducers:{
    addCount(state, action){
      state.count += action.payload;
    },
    subCount(state, action){
      state.count -= action.payload;
    }
  }
})

export const {addCount, subCount} = countSlice.actions;

export default countSlice.reducer; 