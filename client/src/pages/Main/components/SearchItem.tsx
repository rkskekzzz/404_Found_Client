import React from 'react';
import SearchItemContainer from './SearchItem.style';
import { Item } from './SearchBar';
import { Divider } from '@mui/material';

interface SearchItemProps {
  items: Item[];
  searchText: string;
}

const SearchItem = ({ items, searchText }: SearchItemProps) => {
  const autoCompliteItem = (items: Item[]): Item[] => {
    return items.filter((item) => item.name.includes(searchText));
  };
  if (searchText === '') return <></>;
  return (
    <SearchItemContainer>
      {autoCompliteItem(items).map((item) => (
        <React.Fragment key={item.id}>
          <div className="item">{item.name}</div>
          <Divider />
        </React.Fragment>
      ))}
      {autoCompliteItem(items).length === 0 && <div className="item">검색 결과가 없습니다.</div>}
    </SearchItemContainer>
  );
};

export default SearchItem;
