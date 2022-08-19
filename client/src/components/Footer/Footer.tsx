import { Button } from '@mui/material';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FooterContainer from './Footer.style';
import { ReactComponent as ProfileActivateIcon } from 'src/assets/navigationbar/네비게이션_마이페이지(활성화).svg';
import { ReactComponent as ProfileDeactivateIcon } from 'src/assets/navigationbar/네비게이션_마이페이지(활성화X).svg';
import { ReactComponent as CreateActivateIcon } from 'src/assets/navigationbar/네비게이션_새로운사물함(활성화).svg';
import { ReactComponent as CreateDeactivateIcon } from 'src/assets/navigationbar/네비게이션_새로운사물함(활성화x).svg';
import { ReactComponent as StarActivateIcon } from 'src/assets/navigationbar/네비게이션_즐겨찾기(활성화).svg';
import { ReactComponent as StarDeactivateIcon } from 'src/assets/navigationbar/네비게이션_즐겨찾기(활성화X).svg';
import { ReactComponent as HomeActivateIcon } from 'src/assets/navigationbar/네비게이션_홈(활성화).svg';
import { ReactComponent as HomeDeactivateIcon } from 'src/assets/navigationbar/네비게이션_홈(활성화x).svg';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const checkCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  const handleMainClick = () => navigate('/');
  const handleStarClick = () => navigate('/star');
  const handleProfileClick = () => navigate('/profile');
  const handleCreateClick = () => navigate('/create');

  return (
    <FooterContainer>
      <div className="buttons">
        <Button onClick={handleMainClick}>
          {checkCurrentPath('/') ? <HomeActivateIcon /> : <HomeDeactivateIcon />}
        </Button>
        <Button onClick={handleStarClick}>
          {checkCurrentPath('/star') ? <StarActivateIcon /> : <StarDeactivateIcon />}
        </Button>
        <Button onClick={handleCreateClick}>
          {checkCurrentPath('/create') ? <CreateActivateIcon /> : <CreateDeactivateIcon />}
        </Button>
        <Button onClick={handleProfileClick}>
          {checkCurrentPath('/profile') ? <ProfileActivateIcon /> : <ProfileDeactivateIcon />}
        </Button>
      </div>
    </FooterContainer>
  );
};

export default Footer;
