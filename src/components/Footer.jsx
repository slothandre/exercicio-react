import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <h2>Rodapé bonito e formoso &copy;</h2>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 90%;
  margin: 1rem auto;
  background-color: #fff;
  margin-top: 0;
  padding: 30px;

  h2 {
    text-align: center;
  }
`;

export default Footer;
