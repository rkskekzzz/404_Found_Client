import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import { SignInBox } from 'src/style/SignContainer.styled';
import { Container, SignInForm, Splash, Footer } from 'src/components';
import { Button } from '@mui/material';

const Sign = () => {
  const navigate = useNavigate();
  const { isSignedIn, login } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn]);

  return (
    <>
      <Splash />
      <Container>
        <SignInBox>
          <h1>로그인</h1>
          <SignInForm submitAction={login} submitButtonText="Sign In" />
          <Button variant="text" onClick={() => navigate('/auth/register')}>
            Sign Up
          </Button>
        </SignInBox>
        <Footer />
      </Container>
    </>
  );
};

export default Sign;
