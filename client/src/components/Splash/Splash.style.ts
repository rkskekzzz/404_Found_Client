import styled from '@emotion/styled';

const SplashContainer = styled.div`
  background: #65B3FF;
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  animation: fadeOut 100s ease-in-out 0s forwards;

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
    flex-direction: column;
  }

  .title{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1{
    margin : 3px;
  }

`;

export default SplashContainer;
