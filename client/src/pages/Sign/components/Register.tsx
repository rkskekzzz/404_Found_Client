import React from 'react';
import useAuth from 'src/hooks/useAuth';
import { Container, SignUpForm, Footer } from 'src/components';
import { SignUpBox } from 'src/style/SignContainer.styled';

const Register = () => {
  const { register } = useAuth();
  return (
    <>
      <Container>
        <SignUpBox>
          <h1>회원가입</h1>
          <SignUpForm submitAction={register} submitButtonText="Sign In" />
        </SignUpBox>
        <Footer />
      </Container>
    </>
  );
};
export default Register;
