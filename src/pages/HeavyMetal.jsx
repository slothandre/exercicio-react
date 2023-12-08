import styled from "styled-components";
import StyledAnimation from "../styles/animation";

function HeavyMetal() {
  return (
    <StyledSection>
      <StyledAnimation>
        <h2>Heavy Metal</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
          veniam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisiciing elit. Amet commodi
          labore aperiam eligendi nemo. Sequi.
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

export default HeavyMetal;
