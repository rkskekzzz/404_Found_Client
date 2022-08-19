import React, { useState } from 'react';
import SearchBarContainer from './SearchBar.style';
import SearchItem from './SearchItem';
import { ReactComponent as SearchIcon } from 'src/assets/search.svg';

export type Item = {
  id: string;
  lat: number;
  lng: number;
  name: string;
};

const dummyitem: Item[] = [
  {
    id: 'asdf',
    lat: 1234,
    lng: 1234,
    name: '반월당역',
  },
  {
    id: 'asdfasdf',
    lat: 1234,
    lng: 1234,
    name: '반월당역 2',
  },
  {
    id: 'asdfzxcv',
    lat: 1234,
    lng: 1234,
    name: '반월당역 2',
  },
];

interface SearchBarProps {
  handleSearchTextChanged: (currentText: string) => void;
}

const SearchBar = ({ handleSearchTextChanged }: SearchBarProps) => {
  const [currentText, setCurrentText] = useState('');
  const handleCurrentTextChanged = ({ target: { value } }) => setCurrentText(value);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(currentText);
    handleSearchTextChanged(currentText);
  };

  return (
    <SearchBarContainer>
      <form className="search" onSubmit={handleSearch}>
        <SearchIcon />
        <input
          type="text"
          name="text"
          value={currentText}
          onChange={handleCurrentTextChanged}
          placeholder="장소, 주소를 검색해주세요"
        />
      </form>
      <SearchItem items={dummyitem} searchText={currentText} />
    </SearchBarContainer>
  );
};

export default SearchBar;
