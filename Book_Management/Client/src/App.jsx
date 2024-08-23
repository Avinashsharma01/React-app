// Desc: Main App component
//       This is the main component of the application. It is the root component of the application.



import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBaar from './Pages/NavBaar'
import Login from './Component/Login'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBaar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
