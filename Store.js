import { configureStore } from '@reduxjs/toolkit'
import Counterslice from './Slice/Counterslice'
// import Counterslice from './Slice/Counterslice'
export const store=configureStore({
    reducer:{counter:Counterslice.reducer}
})