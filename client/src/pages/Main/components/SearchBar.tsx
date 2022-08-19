import React, { useState } from 'react';
import SearchBarContainer from './SearchBar.style';
import { ReactComponent as SearchIcon } from 'src/assets/search.svg';

type Item = {
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
    name: 'hi',
  },
  {
    id: 'asdfasdf',
    lat: 1234,
    lng: 1234,
    name: 'hi',
  },
  {
    id: 'asdfzxcv',
    lat: 1234,
    lng: 1234,
    name: 'hi',
  },
];

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChanged = ({ target: { value } }) => setSearchText(value);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('여기서 중심좌표 이동');
  };

  const autoCompliteItem = (items: Item[]): Item[] => {
    return items.filter((item) => item.name.includes(searchText));
  };

  return (
    <SearchBarContainer>
      <form className="search" onSubmit={handleSearch}>
        <SearchIcon />
        <input
          type="text"
          name="text"
          value={searchText}
          onChange={handleSearchTextChanged}
          placeholder="장소, 주소를 검색해주세요"
        />
      </form>
      <div>
        {autoCompliteItem(dummyitem).map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </SearchBarContainer>
  );
};

export default SearchBar;
