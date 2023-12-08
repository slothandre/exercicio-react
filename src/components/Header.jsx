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
  width: 90%;
  background-color: #fff;
  margin: 1rem auto;
  margin-bottom: 0;
  padding: 30px;
  text-align: center;
`;

export default Header;
