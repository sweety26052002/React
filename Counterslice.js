import { createSlice } from '@reduxjs/toolkit'
const initialState={count:0};
// function counterSlice()
// {
 const counterSlice = createSlice({
    name: 'count',
    initialState,
    reducer: {
        increment:(state,action)=>{
            return {...state,count:state.count+1};
        },
        decrement:(state,action)=>{
            return {...state,count:state.count-1};
        }
}
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice;