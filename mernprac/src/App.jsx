import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/FunctionalComponents/Home'
import Login from './components/FunctionalComponents/Login'
import About from './components/FunctionalComponents/About'
import Navbar from './components/FunctionalComponents/Navbar'
import Contact from './components/FunctionalComponents/Contact'
import Signup from './components/FunctionalComponents/Signup'
import UseState from './components/FunctionalComponents/UseState'
import UseEffectApi from './components/FunctionalComponents/UseEffectApi'
import UseEffect from './components/FunctionalComponents/UseEffect' 
import UseRef from './components/FunctionalComponents/UseRef'
import UseMemo from './components/FunctionalComponents/UseMemo'
import UseMemoize from './components/FunctionalComponents/UseMemoize'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HoC from './components/FunctionalComponents/HoC/HoC'
import Memo from "./components/FunctionalComponents/Memoziation/Memo"
import LazyLoadingAndSuspense from "./components/FunctionalComponents/Memoziation/LazyLoading"
import CoE from "./components/FunctionalComponents/CoE.jsx";
//import './App.css'

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
    <Route path="/use-state" element={<UseState />} />
    <Route path='/contact' element={<Contact />}></Route>
    <Route path="/res" element={<CoE />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/use-api' element={<UseEffectApi />}></Route>
    <Route path='/use-ref' element={<UseRef />} />
    <Route path='/hoc' element={<HoC />} />
    <Route path='/use-memo' element={<UseMemo />}></Route>
    <Route path='/use-memoize' element={<UseMemoize />}></Route>
    <Route path="/memo" element= {<Memo />} />
    <Route path="/lazy" element= {<LazyLoadingAndSuspense />} />
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
