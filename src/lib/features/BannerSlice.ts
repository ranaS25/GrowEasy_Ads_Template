
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const bannerSlice = createSlice({
  name:"banner", 
  initialState: {
    bannerList: [],
    editorOpened: false,
    editBanner: null,

  },
  reducers: {
    addBanners: ( state, action: PayloadAction<any>) => {
      state.bannerList = action.payload;
    },
    removeBanners: (state) => {
      state.bannerList = [];
      
    },
    setEditorOpened: (state, action:PayloadAction<boolean>) => {
      state.editorOpened = action.payload;
    },
    setEditBanner: (state, action: PayloadAction<any>) => {
      state.editBanner = action.payload;
    }
  }
})
export const { addBanners, removeBanners, setEditorOpened, setEditBanner }= bannerSlice.actions;
export default bannerSlice.reducer;