import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Child from './components/Child'
import { Home } from './pages/Home'
import './App.css'
import Counter from './assets/Counter'
import { Navbar } from './components/Navbar'
import About  from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import State from './Hooks/State'
import Hooks from './pages/Hooks'
import Effect from './Hooks/Effect'
import Login   from './pages/Login';
import Ref   from './Hooks/Ref';
import Signup from './pages/Singup'

const App = () => {
   var fruits = ["Apple","Banana","Orange"];
  return (
    <div>
         
      <Navbar/>
      <Routes>
        <Route path ='/home' element={<Home items={fruits}/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/ref' element={<Ref/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
     {/* <Home items={fruits}/>  
     <Child name="viky" phone="98321" dep="IT"/>
      <Child name="viky" phone="98321" dep="IT"/>
      <Home items={fruits}/>  */}

    </div>
  )
}

export default App