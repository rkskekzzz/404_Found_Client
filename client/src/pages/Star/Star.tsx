import React from 'react';
import { Footer } from 'src/components';
import { StarItem, StarHeader } from './components';
import useLocker from 'src/hooks/useLocker';
import { Divider } from '@mui/material';

const Star = () => {
  const { lockers } = useLocker();

  return (
    <>
      <StarHeader />
      <Divider />
      <StarItem lockers={lockers} />
      <Footer />
    </>
  );
};

export default Star;
