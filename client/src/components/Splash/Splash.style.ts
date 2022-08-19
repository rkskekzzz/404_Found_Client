import styled from '@emotion/styled';

const SplashContainer = styled.div`
  background: blue;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  justify-content: center;
  align-items: center;

  .logo {
    display: flex;
  }
`;

export default SplashContainer;
