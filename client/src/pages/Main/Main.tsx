import React, { useState } from 'react';

import { Footer } from 'src/components';
import { MapBox, SearchBar } from './components';

const Main = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChanged = (currentText: string) => setSearchText(currentText);

  return (
    <>
      <SearchBar handleSearchTextChanged={handleSearchTextChanged} />
      <MapBox searchText={searchText} />
      <Footer />
    </>
  );
};

export default Main;
