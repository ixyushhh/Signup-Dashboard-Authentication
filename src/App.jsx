import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './Components/Loginpage/Loginpage'
import Signuppage from './Components/Signuppage/Signuppage'
import Hero from './Components/Dashboard/Hero'


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Loginpage/>}></Route>
      <Route path='/signup' element={<Signuppage/>}></Route>
      <Route path='/dashboard' element={<Hero/>}>
      </Route>
    </Routes>
  )
}

export default App
