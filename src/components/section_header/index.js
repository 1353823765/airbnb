import React, { memo } from 'react'

const SectionHeader = memo((props) => {
    console.log(props)
    const {title,subtitle="拎包入住品质房源，帮你省心又省钱"}=props
  return (
    <div>
    <h2 className='title'>{title}</h2>
   
   {
    subtitle&&<div className='subtitle'> {subtitle}</div>
   }
    </div>
  )

  
})


export default SectionHeader