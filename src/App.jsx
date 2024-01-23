import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import AdInfo from './components/AdInfo'
import Footer from './components/Footer'
import Rodizio from './components/Rodizio'

function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Menu></Menu>
      <Rodizio></Rodizio>
      <AdInfo></AdInfo>
      <Footer></Footer>
    </>
  )
}

export default App
