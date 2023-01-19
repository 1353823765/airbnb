import Icomheart from '@/assets/svg/icon_heart'
import React, { memo } from 'react'
import { ItemWapper } from './style'

const RoomItme = memo((props) => {
    const {itemDate}=props
   
  return (
    
    <ItemWapper>
   
    <div className='inner'>
    <div className='cover'>
     <div className='icon-heart'><Icomheart></Icomheart></div> 
     <img src={itemDate.picture_url} alt=''></img>
    </div>
   { /*<div className='desc'>
    <h5>  {itemDate.verify_info.messages.join("·")}</h5>
  </div>*/}
    <div className='name'>
    <h4>{itemDate.name}</h4> 
    </div>
    <div className='price'>
    <span className='price-after'> ¥{itemDate.price}</span> <span className='price-before'>/晚</span>
    </div>
    </div>
    
    </ItemWapper>
    
  )
})

export default RoomItme