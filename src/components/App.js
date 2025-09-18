import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

// https://reactrouter.com/start/framework/routing

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Home/>}></Route>
        <Route path='/:id' element={<Detail/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;