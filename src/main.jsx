import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx' 
import Course from './Course.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />  
          <Route path="courses" element={<Course />} />  
        </Route>
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>,
)
