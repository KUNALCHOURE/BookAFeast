import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Footer/>
    </>
  )
}

export default App
