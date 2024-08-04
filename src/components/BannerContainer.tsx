import React from 'react'
import {  useAppSelector } from '@/lib/hooks'
import EditBanner from './EditBanner'
import Banner from './Banner'


const BannerContainer: React.FC = () => {

  const list1 = useAppSelector(store => store.banner.bannerList)
  const editorOpened = useAppSelector(store => store.banner.editorOpened)

  return (
    <>
      <div className="w-full h-[100dvh] -z-10 fixed top-0 bg-gradient-to-br from-sky-400 to-blue-200  "></div>
      {editorOpened && <EditBanner />}
      <div className='w-fit  pt-10 min-h-96  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4'>
         
        {list1.map((item, index) => <Banner key={index} details={item} displayOnly={false} />)}

      </div>
    </>
  )
}

export default BannerContainer