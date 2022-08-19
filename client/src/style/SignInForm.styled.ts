import styled from '@emotion/styled';
import { TextField } from '@mui/material';

const SignInForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15%;
  .TextField{
    width : 100%;
    border-color : C1E1FF;
  }
`;

const SignInBox = styled.div`
    width : 90vw;
  @media (min-width: 760px) {
    width : 500px;

  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h1 {
    text-align: center;
  }
`;

export { SignInForm, SignInBox };
