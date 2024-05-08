import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GetProjects from './pages/Getprojects/GetProjects'
import Layout from './Layout/Layout'
const App = () => {
  return (
    <div>
      
      <Routes>
      <Route path='/' element={<Layout />}/>
        <Route path='/get-projects' element={<GetProjects />}/>
      </Routes>
    </div>
  )
}

export default App