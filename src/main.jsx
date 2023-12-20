import React from 'react'
import './App.css'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Blogs from './pages/blogs.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/About.jsx'
import Services from './pages/services.jsx'
import {
 BrowserRouter, Routes, Route
} from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
