import styled from '@emotion/styled';

const SplashContainer = styled.div`
  background: blue;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  animation: fadeOut 1s ease-in-out 0s forwards;

  @keyframes fadeOut {
    0% {
      z-index: 100;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
      z-index: -1;
    }
  }

  .logo {
    display: flex;
  }
`;

export default SplashContainer;
