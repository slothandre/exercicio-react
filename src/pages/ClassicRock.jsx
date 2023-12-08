import styled from "styled-components";
import StyledAnimation from "../styles/animation";

function ClassicRock() {
  return (
    <StyledSection>
      <StyledAnimation>
        <h2>Classic Rock</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
          debitis mollita? Omnis ipsum blanditiis, nam dolores voluptatem at
          voluptate accusantium.
        </p>
        <ul>
          <li>Black Sabbath</li>
          <li>Deep Purple</li>
          <li>Led Zeppelin</li>
        </ul>
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

export default ClassicRock;
