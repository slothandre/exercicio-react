import styled from "styled-components";

const StyledAnimation = styled.div`
  animation-name: animaContainer;
  animation-duration: 0.2s;

  @keyframes animaContainer {
    from {
      transform: scale(0.1);
    }
    to {
      transform: scale(1);
    }
  }
`;

export default StyledAnimation;
