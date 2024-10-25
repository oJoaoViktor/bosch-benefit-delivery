import React from "react"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from "./styles/GlobalStyles"


function App() {
  return (
    <>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path= "/" element = {<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
