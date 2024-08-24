import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import './index.css'
import './App.css'
import Signup from './components/user/signup'
import Login from './components/user/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
      
      <main className="flex-grow">
        
      </main>
      <Footer/>
    </div> */}
{/* <Signup/> */}
<Login/>

     
    </>
  )
}

export default App
