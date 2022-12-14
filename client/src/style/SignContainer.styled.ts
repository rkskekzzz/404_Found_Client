import styled from '@emotion/styled';

const SignContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15%;
  #outlined-basic {
    border: 1px solid #c1e0ff !important;
  }
  .Button{
    background-color : #65B3FF;
  }
`;

const SignInBox = styled.div`
  width: 90vw;
  @media (min-width: 760px) {
    width: 500px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h1 {
    text-align: center;
    border-bottom: solid;
    border-color: #cbcbcb;
    border-width: 1px;
    padding-bottom: 6vw;
  }
`;
const SignUpBox = styled.div`
  width: 90vw;
  @media (min-width: 760px) {
    width: 500px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h1 {
    text-align: center;
    border-bottom: solid;
    border-color: #cbcbcb;
    border-width: 1px;
    padding-bottom: 6vw;
  }
`;

export { SignContainer, SignInBox, SignUpBox };
