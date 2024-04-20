import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Menu } from '../components/menu'
import { Menu2 } from '../components/menu2'
import { Home } from '../pages/home'
import { About } from '../components/about'

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path='/btn/:id' element= {<About/>}/>
      <Route path='/' element= {<Menu/>}/>
      <Route path='/logo' element= {<Home/>}/>
      <Route path='/jadid' element= {<Menu/>} />
      <Route  path='/soved' element= {<Menu2/>}/>
    </Routes>
  )
}
