import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import LandingPage from './Component/LandingPage/LandingPage'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/> 
      <LandingPage/>
      <Footer/>
    </>
  )
}

export default App
