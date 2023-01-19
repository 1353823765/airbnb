import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch ,useSelector} from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import { HomeWapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section_header'
import RoomItme from '@/components/room-item'
const Home = memo(() => {
const dispatch=useDispatch()
const  {goodPrice}=useSelector((state)=>({
  goodPrice:state.homeReducer.goodPrice
}),shallowEqual)
console.log(goodPrice)
useEffect(()=>{
  dispatch(fetchHomeDataAction())
},[dispatch])
  return (
    <HomeWapper>
 <HomeBanner> </HomeBanner>
 <div className='content'>
 <div className='good-price'></div>
 <SectionHeader title={goodPrice.title}></SectionHeader>

 <ul className='root-list'>
 {
  goodPrice.list?.slice(0,8).map((item)=><RoomItme key={item.id} itemDate={item}>
  
  </RoomItme>


  )
 }
 </ul>
 </div>
 

    </HomeWapper>
    
    
  )
})

export default Home