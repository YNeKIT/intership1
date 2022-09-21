import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Charts from "./Pages/Charts";
import PageError from "./Pages/PageError";
import Register from "./Pages/Register";
import PostPage from "./Pages/PostPage";
import ProfilePage from "./Pages/ProfilePage";
import Logoutptt from "./Components/logoutptt";
import LogIn from "./Pages/LogIn";
import { useState, useContext, createContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import axios from "./Api/axiosMockConfig";
import { mockapiCard } from "./Api/axiosMock";
import { getItems } from "./Api/axiosMock";
import { onAddToItemPost } from "./Api/axiosMock";
import { getItemsLesna } from "./Api/axiosLensa";

function App() {
  const [userProfile, setUserProfile] = useState<{
    email?: string;
    first_name?: string;
    role?: string;
    last_name?: string;
  }>({});
  let [isAutentificated, setIsAutentificated] = useState(false);
  const [postCard, setPostCard] = useState();
  const [postitem, setPostitem] = useState<any[]>([]);
 
 

  useEffect(() => {
   
    getItemsLesna
      .getMe()
      .then((res) => {
        console.log(res.data);
        setUserProfile(res.data);
      })
      .catch((err) => console.log(err));

      getItems.getPosts().then((res)=> {
        console.log(res.data);
        setPostCard(res.data);
      })


  }, []);

  return (
    <UserContext.Provider
      value={{
        userProfile,
        setUserProfile,
        isAutentificated,
        postCard,
        setPostCard,
        mockapiCard,
        postitem,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/PostPage" element={<PostPage post />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="Charts" element={<Charts />} /> */}
          <Route path="*" element={<PageError />} />
          <Route path="Profile" element={<ProfilePage />} />
          <Route path="LogOut" element={<Logoutptt />} />
          <Route path="Register" element={<Register />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
