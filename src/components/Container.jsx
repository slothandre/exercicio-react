import styled from "styled-components";

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.main`
  width: 90%;
  margin: 1rem auto;
  margin-top: 0;
  background-color: #fff;
  border: 5px solid #000;
`;

export default Container;
