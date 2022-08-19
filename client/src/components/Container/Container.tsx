import React from 'react';
import styled from '@emotion/styled';

const Paper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const Container = ({ children }: ContainerProps) => {
  return <Paper>{children}</Paper>;
};

export default Container;
