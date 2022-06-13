import React from "react";
import styled from "styled-components";

interface isVisbleDiv {
  isVisible: boolean;
}

const MenuDrawerWrapper = styled.div<isVisbleDiv>`
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0px;
  background-color: white;
  z-index: 12;
  transform: translateX(${(props) => (props.isVisible ? 0 : "-100%")});
  transition: transform 0.3s easy-out;
`;

const MenuDrawerOverlay = styled.div<isVisbleDiv>`
position: fixed;
widh: 100vw;
height: 100%;
background-color: black;
opacity: 0.3;
z-index: 11;
opacity: ${(props) => (props.isVisible ? 0.3 : 0)} 
transition: opacity 0.3s easy-out;
`;

const MenuTab = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10% 16px;
  align-items: center;
  cursor: pointer;
`;
const MenuLabel = styled.label`
  text-transform: upercase;
  font-size: 20px;
  font-weight: bold;
`;

const ListMenu = styled.li`
  font-size: 19px;
  font-weight: bold;
  padding: 50;
`;

const Wrapper = styled.div`
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &:hover {
    .button {
      display: none;
    }
  }
`;

interface Props {
  isVisible: boolean;
  toggLeVisibility: () => void;
}

const MenuIcon = styled.i`
  marfin-left: auto;
`;
const Drawer: React.FC<Props> = ({ isVisible, toggLeVisibility }) => (
  <>
    <MenuDrawerWrapper isVisible={isVisible}>
      <MenuTab>
        <MenuIcon>
          <img
            onClick={toggLeVisibility}
            width={20}
            height={20}
            src="/images/close.svg"
            alt="closetype"
          />
        </MenuIcon>
      </MenuTab>
      <ListMenu>
        <ul className="clear">
          <li className="mt-20 mr-20 cu-p ">
            <img
              className="mr-10 mt-10"
              onClick={toggLeVisibility}
              width={20}
              height={20}
              src="/images/menu.svg"
              alt="closetype"
            />
            Ascunde
          </li>
          <li className="mt-20 cu-p">
            <img
              
              className="mr-10 mt-10"
              width={20}
              height={20}
              src="/images/Panou.svg"
              alt="closetype"
            />
            Panou Control
          </li>

          <li className="mt-20 cu-p">
            <img
              className="mr-10 mt-10"
              width={20}
              height={20}
              src="/images/users.svg"
              alt="closetype"
            />
            Utilizatori
          </li>

          <li className="mt-20 cu-p">
            <img
              className="mr-10 mt-10"
              width={20}
              height={20}
              src="/images/question.svg"
              alt="closetype"
            />
            Întrebări frecvente
          </li>
        </ul>
      </ListMenu>
    </MenuDrawerWrapper>
    <MenuDrawerOverlay onClick={toggLeVisibility} isVisible={isVisible} />
  </>
);

export default Drawer;
