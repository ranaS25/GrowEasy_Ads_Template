import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from './features/BannerSlice'


export const makeStore = () => {
  return configureStore({
    reducer: {
      banner: bannerReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

