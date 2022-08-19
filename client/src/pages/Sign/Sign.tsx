import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import { SignInBox } from 'src/style/SignInForm.styled';
import { Container, SignForm, Splash } from 'src/components';
import { Button } from '@mui/material';
import { SignUpModal } from './components';

const Sign = () => {
  const navigate = useNavigate();
  const [isShowSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  const { isSignedIn, login, signUp } = useAuth();
  const [isShowSplash, setIsShowSplash] = useState(true);

  const handleIsShowSignUpModalOpen = () => setShowSignUpModal(true);
  const handleIsShowSignUpModalClose = () => setShowSignUpModal(false);

  useEffect(() => {
    if (isSignedIn) {
      handleIsShowSignUpModalClose();
      navigate('/');
    }
  }, [isSignedIn]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 33000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Splash isShowSplash={isShowSplash} />
      <Container>
        <SignInBox>
          <h1>Todos</h1>
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
      </Container>
    </>
  );
};

export default Sign;
