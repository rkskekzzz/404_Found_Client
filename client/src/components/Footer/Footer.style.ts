import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  box-shadow: 0px -3px 4px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0%;
  justify-content: center;
  z-index: 50;
  background: white;

  .buttons {
    width: 100%;
    @media (min-width: 768px) {
      width: 50%;
    }
    display: flex;
    justify-content: space-around;
  }
  * {
    width: 100%;
  }
`;

export default FooterContainer;
