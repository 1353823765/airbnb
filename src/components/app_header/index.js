import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header_center'
import HeaderLeft from './c-cpns/header_left'
import HeaderRight from './c-cpns/header_right'
import { HeaderWapper } from './style'

const   AppHeader = memo(() => {
  return (
    <HeaderWapper>
    <HeaderLeft></HeaderLeft>
    <HeaderCenter></HeaderCenter>
    <HeaderRight></HeaderRight>
    </HeaderWapper>
  )
})

export default AppHeader 
