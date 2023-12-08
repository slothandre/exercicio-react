import styled from "styled-components";
import StyledAnimation from "../styles/animation";

function Home() {
  return (
    <StyledSection>
      <StyledAnimation>
        <h2>Home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi
          excepturi aut modi hic quidem aspernatur quae placet deserunt
          explicabo provident offciis, ut labore incidunt ratione magnam maxime
          soluta volupate.
        </p>
      </StyledAnimation>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin: 20px;
  height: 30vh;

  h2,
  p {
    margin-bottom: 30px;
  }
`;

export default Home;
