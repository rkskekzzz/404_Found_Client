import React from 'react';
import { useLocation } from 'react-router';

const LockerItem = () => {
  const location = useLocation();
  console.log(location);
  return <div>{location.pathname}</div>;
};

export default LockerItem;
