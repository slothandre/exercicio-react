import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/classic-rock">Classic Rock</NavLink>
      <NavLink to="/heavy-metal">Heavy Metal</NavLink>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  margin-top: 30px;

  a {
    align-items: center;
    background-color: #ff0;
    border-radius: 10px;
    color: #000;
    display: flex;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    min-width: 100px;
    text-decoration: none;
    width: 15%;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

export default Nav;
