"use client"

import React, {  useRef } from 'react'
import Header from './Header'
import AdsContainer from './AdsContainer'
import JSONData from '../data/bannerData.json'


import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { addBanners } from '@/lib/features/BannerSlice'


// using bannerSlice


import { useAppSelector } from '../lib/hooks'
import EditBanner from './EditBanner'







const Body: React.FC = () => {
  // const arr = Array.from(JSONData.bannerAds);
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    console.log("ref created...")
    storeRef.current = makeStore();
    storeRef.current.dispatch(addBanners(JSONData.bannerAds))
  }
  

  return (
    <Provider store={storeRef.current}>
      <Header />
      
      <AdsContainer />


    </Provider>
  )
}

export default Body