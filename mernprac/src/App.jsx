import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/FunctionalComponents/Home'
import Login from './components/FunctionalComponents/Login'
import About from './components/FunctionalComponents/About'
import Navbar from './components/FunctionalComponents/Navbar'
import Contact from './components/FunctionalComponents/Contact'

import UseEffect from './components/FunctionalComponents/UseEffect' 
//import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <main>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      
    <Route path='/' element={<Home properties="Hello" sjit="SJIT" />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path="/use-effect" element={<UseEffect />} />
    <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
    
      {/* <div>
        <hr />
        <Home properties="Hello" sjit="SJIT" />
        <hr />
        </div>
        <div>
        <hr />
        <Login />
        <hr />
        </div>
        <div>
        <hr />
        <About />
        <hr />
        </div> */}

    </main>
  );
}

export default App;
