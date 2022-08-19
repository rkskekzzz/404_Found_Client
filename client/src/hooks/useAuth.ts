import { useEffect, useState } from 'react';
import authController from 'src/api/authController';
import { AuthResponse } from 'src/types/Auth';

// TODO: react query로 리팩토링
const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [signStateMessage, setSignStateMessage] = useState<string>('');

  const handleSignIn = ({ message, token }: AuthResponse) => {
    window.localStorage.setItem('todoAuthToken', token);
    setSignStateMessage(message);
    setIsSignedIn(true);
  };

  const handleAuthError = (error: Error) => {
    alert(error.message);
  };

  const login = async (email: string, password: string) => {
    authController.login(email, password).then(handleSignIn).catch(handleAuthError);
  };

  const register = async (nickname: string, username: string, password: string, password2: string) => {
    authController
      .register(nickname, username, password, password2)
      .then((data) => {
        console.log(data);
      })
      .catch(handleAuthError);
  };

  useEffect(() => {
    if (window.localStorage.getItem('todoAuthToken')) setIsSignedIn(true);
  }, []);

  return {
    isSignedIn,
    signStateMessage,
    login,
    register,
  };
};

export default useAuth;
