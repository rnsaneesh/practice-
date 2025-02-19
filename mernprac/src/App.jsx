import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/FunctionalComponents/Home'
import Login from './components/FunctionalComponents/Login'
import About from './components/FunctionalComponents/About'
import Navbar from './components/FunctionalComponents/Navbar'
//import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <main>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/About' element={<About />}></Route>
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
