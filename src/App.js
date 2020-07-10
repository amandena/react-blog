import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import NavBar from './containers/NavBar'
import Footer from './components/Footer'

function App() {
  return(
    <div className='App'>
      <NavBar/>

      <h1>Amanda M Johnson</h1>
      <h3>Full Stack Software Engineer</h3>

      <Home/>
      <About/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
