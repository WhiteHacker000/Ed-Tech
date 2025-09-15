import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import './styles/globals.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

