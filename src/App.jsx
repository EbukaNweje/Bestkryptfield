import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import LandingPage from './Component/LandingPage/LandingPage'
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Auth/Login/Login'
import SignUp from './Component/Auth/SignUp/SignUp'
import Market from './Component/Market/Market'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <BrowserRouter>
     <Header/> 
       <Routes>
        <Route path="/" element={ <LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/market' element={<Market/>}/>
       </Routes>
       <Footer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
