import React from 'react';
import { CircularProgress } from '@mui/material';
import SplashContainer from './Splash.style';

interface SplashProps {
  isShowSplash: boolean;
}

const Splash = ({ isShowSplash }: SplashProps) => {
  return (
    <SplashContainer>
      <div>logo</div>
      <div className="logo">
        <h1>4</h1>
        <CircularProgress />
        <h1>4 FOUND</h1>
      </div>
    </SplashContainer>
  );
};

export default Splash;
