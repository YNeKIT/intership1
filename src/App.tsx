import React from 'react';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="Home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
   
  );
};

export default App;
