
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
    },
    updateBanner: (state, action: PayloadAction<any>) => {
      const originalBanner:any = state.bannerList.find((item: any) => item.id === action.payload.id);

      if (originalBanner) {
        originalBanner.title = action.payload.title;
        originalBanner.description = action.payload.description;
        originalBanner.CTAtext = action.payload.CTAtext;
        originalBanner.imageSrc = action.payload.imageSrc;
      }

    }
  }
})
export const { addBanners, removeBanners, setEditorOpened, setEditBanner, updateBanner }= bannerSlice.actions;
export default bannerSlice.reducer;