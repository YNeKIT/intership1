import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Charts from "./Pages/Charts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<SignIn />} />
        <Route path="Home" element={<Home />} />
        <Route path="Charts" element={<Charts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
