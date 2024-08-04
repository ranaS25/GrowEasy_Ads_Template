"use client"

import React, {  useRef } from 'react'
import Header from './Header'
import BannerContainer from './BannerContainer'
import JSONData from '../data/bannerData.json'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { addBanners } from '@/lib/features/BannerSlice'


const Body: React.FC = () => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    
    // Create the store instance the first time this renders
 
    storeRef.current = makeStore();
    storeRef.current.dispatch(addBanners(JSONData.bannerAds))
  }
  

  return (
    <Provider store={storeRef.current}>
      
      <Header />
      <BannerContainer />

    </Provider>
  )
}

export default Body