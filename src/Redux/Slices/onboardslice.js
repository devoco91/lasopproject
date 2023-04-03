import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {},
  page: 1
}

const userSlice = createSlice({
  name: 'onboard',
  initialState,
  reducers: {
   
   addData: (state, action) => {
      state.userData = {...state.userData, ...action.payload}
  },

   setPage: (state) => {
      state.page = state.page < 3 ? state.page + 1 : 3
    },

    clearData: (state) =>{
      state.userData = {}
      state.page = 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { addData, setPage, clearData} = userSlice.actions

export default userSlice.reducer