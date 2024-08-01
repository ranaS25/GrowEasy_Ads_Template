import React from 'react'
import AdSquare from './AdSquare'
import { useAppSelector } from '@/lib/hooks'

const AdsContainer: React.FC = () => {

  const list1 = useAppSelector(store => store.banner.bannerList)
  return (
    <div className='w-[80%] min-h-96  grid grid-cols-2 gap-2 pt-10'>
      
     
     
      {list1.map((item, index) => <AdSquare key={index }  details={item} />)}

    </div>
  )
}

export default AdsContainer