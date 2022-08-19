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
  return (
    <SearchItemContainer>
      {autoCompliteItem(items).map((item) => (
        <>
          <div className="item" key={item.id}>
            {item.name}
          </div>
          <Divider />
        </>
      ))}
    </SearchItemContainer>
  );
};

export default SearchItem;
