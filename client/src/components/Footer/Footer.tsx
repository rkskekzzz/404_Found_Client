import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterContainer from './Footer.style';

const Footer = () => {
  const navigate = useNavigate();

  const handleMainClick = () => navigate('/');
  const handleStarClick = () => navigate('/Star');
  const handleProfileClick = () => navigate('/Profile');
  const handleCreateClick = () => navigate('/Create');

  return (
    <FooterContainer>
      <Button onClick={handleMainClick}>Main</Button>
      <Button onClick={handleStarClick}>Star</Button>
      <Button onClick={handleCreateClick}>Create</Button>
      <Button onClick={handleProfileClick}>Profile</Button>
    </FooterContainer>
  );
};

export default Footer;
