import React, { memo } from 'react'
import {useRoutes} from "react-router-dom"
import Appfooter from './components/app_footer'
import AppHeader from './components/app_header'
import { routers } from './router'
const App = memo(() => {
  return (
    <div className='app'>
    <AppHeader></AppHeader>
    <div className='page'>
    
    {useRoutes(routers)}
    
    </div>
    <Appfooter></Appfooter>
    
    </div>
  )
})

export default App