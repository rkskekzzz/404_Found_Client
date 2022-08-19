import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import { SignInBox } from 'src/style/SignInForm.styled';
import { Container, SignForm, Splash, Footer } from 'src/components';
import { Button } from '@mui/material';
import { SignUpModal } from './components';

const Sign = () => {
  const navigate = useNavigate();
  const [isShowSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  const { isSignedIn, login, signUp } = useAuth();

  const handleIsShowSignUpModalOpen = () => setShowSignUpModal(true);
  const handleIsShowSignUpModalClose = () => setShowSignUpModal(false);

  useEffect(() => {
    if (isSignedIn) {
      handleIsShowSignUpModalClose();
      navigate('/');
    }
  }, [isSignedIn]);

  return (
    <>
      <Splash />
      <Container>
        <SignInBox>
          <h1>로그인</h1>
          <SignForm submitAction={login} submitButtonText="Sign In" />
          <Button variant="text" onClick={handleIsShowSignUpModalOpen}>
            Sign Up
          </Button>
        </SignInBox>
        <SignUpModal
          isShowSignUpModal={isShowSignUpModal}
          handleIsShowSignUpModalClose={handleIsShowSignUpModalClose}
          submitAction={signUp}
        />
        <Footer/>
      </Container>
    </>
  );
};

export default Sign;
