import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Charts from "./Pages/Charts";
import PageError from "./Pages/PageError";
import Register from "./Pages/Register";
import PostPage from "./Pages/PostPage";
import ProfilePage from "./Pages/ProfilePage";
import Logoutptt from "./Components/logoutptt";
import { createSecureContext } from "tls";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/PostPage" element={<PostPage />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="Charts" element={<Charts />} /> */}
        <Route path="*" element={<PageError />} />
        <Route path="Profile" element={<ProfilePage />} />
        <Route path="LogOut" element={<Logoutptt />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
