import React,{useEffect} from 'react'
import "./App.css";
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import WebFont from "webfontloader"
import Home from "./components/home/Home"
import Login from './components/user/Login';
import Register from './components/user/Register';
import Newproduct from './components/products/Newproduct';
import Addproduct from './components/products/Addproduct';





const App = () => {

  useEffect(()=>{

    WebFont.load({google:{
      families:["Roboto","Montserrat","Poppins"]
    }})
  },[])
  return (
    <Router>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product' element={<Newproduct/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
      </Routes>
      
    </Router>
  )
}

export default App