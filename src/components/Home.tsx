import TemplateRenderer from './TemplateRenderer'
import React from 'react'
import data from '../data/bannerData.json'



export default function Home() {
  const Myarray = data.bannerAds
  console.log(Myarray);
  return (
    <div>
      {/* <TemplateRenderer data={data.bannerAds} /> */}
    </div>
  )
}
