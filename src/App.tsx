import React from 'react';
import SignIn from './Pages/SignIn';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
    
   
  );
};

export default App;
