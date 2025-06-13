import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  check: false,
  arr:[]
}

export const counterSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setFalse: (state) => {
      
      state.check =false
    },
    setTrue: (state) => {
      state.check =true
    },
    setvalue_data: (state, action) => {
     state.arr.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFalse, setTrue, setvalue_data } = counterSlice.actions

export default counterSlice.reducer