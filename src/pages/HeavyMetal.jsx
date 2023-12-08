import styled from "styled-components";

function HeavyMetal() {
  return (
    <StyledSection>
      <h2>Heavy Metal</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
        veniam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisiciing elit. Amet commodi
        labore aperiam eligendi nemo. Sequi.
      </p>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin: 20px;

  h2,
  p {
    margin-bottom: 30px;
  }
`;

export default HeavyMetal;
