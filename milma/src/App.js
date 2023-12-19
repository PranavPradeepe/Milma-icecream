import react from 'react'
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Home from './component/Home'
import Admin from './component/Admin'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import Form from './component/Addnew'


import React from 'react'
function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/'element={<Home/>} />
          <Route path='/admin'element={<Admin/>} />
          <Route path='/form'element={<Form/>} />


        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App