import react from "react";
import Header from "../Components/Header";
import Drawer from "../Components/Drawer";
import Table from "../Components/table";
import Profile from "../Components/ProfileHead";
import { useState } from "react";

function PostPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggLeVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Header toggLeVisibility={toggLeVisibility} />
      <Drawer isVisible={isVisible} toggLeVisibility={toggLeVisibility} />

      <h1 className="posttitle">Post Page</h1>
    </>
  );
}

export default PostPage;
