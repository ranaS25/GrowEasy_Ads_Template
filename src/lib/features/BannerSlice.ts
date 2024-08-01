import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const bannerSlice = createSlice({
  name:"banner", 
  initialState: {
    bannerList: [],
  },
  reducers: {
    addBanners: ( state, action: PayloadAction<any>) => {
      state.bannerList = action.payload;
    },
    removeBanners: (state) => {
      return { bannerList: [] };
    }
  }
})
export const { addBanners, removeBanners }= bannerSlice.actions;
export default bannerSlice.reducer;