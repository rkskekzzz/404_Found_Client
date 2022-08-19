import React from 'react';
import { CircularProgress } from '@mui/material';
import SplashContainer from './Splash.style';

const Splash = () => {
  return (
    <SplashContainer>
      <div className="logo">
        <img src='./logo.png' alt="Logo"/>
        <div className='title'>
          <h1>4</h1>
          <CircularProgress />
          <h1>4 FOUND</h1>
        </div>
      </div>
    </SplashContainer>
  );
};

export default Splash;
