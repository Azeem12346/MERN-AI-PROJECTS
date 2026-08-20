import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SideBar from './component/SideBar/SideBar'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard'
import Admin from './component/Admin/Admin'
import History from './component/Dashboard/History/History'
import Login from './component/Login/Login'

 

function App() {
  const [count, setCount] = useState(0)

  return (
   <div  className='App'>
    <SideBar />
    <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/admin' element={<Admin/>} />
    <Route path='/history' element={<History/>} />
    
      
    </Routes>

   </div>
  )
}

export default App