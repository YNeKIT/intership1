import react from "react";
import Drawer from "../Components/Drawer";
import Header from "../Components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isVisible, setIsVisible] = useState(false);

  const toggLeVisibility = () => {
    setIsVisible(!isVisible);
  };

  type user = {
    user: void;
    isAuthenticated: any;
  };

  return (
    <>
      <Header toggLeVisibility={toggLeVisibility} />
      <Drawer isVisible={isVisible} toggLeVisibility={toggLeVisibility} />

      <img
        className="profileImgPage "
        width={80}
        height={80}
        src={user?.picture}
        alt="users"
      />
      <h2 className="nickname">{user?.name} </h2>
    </>
  );
};
export default ProfilePage;
