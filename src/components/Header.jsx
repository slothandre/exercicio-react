import styled from "styled-components";
import Nav from "./Nav";

function Header() {
  return (
    <StyledHeader>
      <h1>Exercício React</h1>
      <Nav />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  margin: 50px;
  text-align: center;
`;

export default Header;
