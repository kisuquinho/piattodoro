import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import AdInfo from './components/AdInfo'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Menu></Menu>
      <AdInfo></AdInfo>
      <Footer></Footer>
    </>
  )
}

export default App
