import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Drawer from "../Components/Drawer";
import styled from "styled-components";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggLeVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Header toggLeVisibility={toggLeVisibility} />
      <Drawer isVisible={isVisible} toggLeVisibility={toggLeVisibility} />
    </>
  );
};

export default Home;
