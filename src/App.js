import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'
import Team from './pages/Team'
import Messages from './pages/Messages'
import Support from './pages/Support'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/reports' element={<Reports />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/messages' element={<Messages />}/>
          <Route path='/support' element={<Support />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App