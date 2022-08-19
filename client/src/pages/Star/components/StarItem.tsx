import React from 'react';
import { Locker } from 'src/types/Locker';
import { ReactComponent as StarProfileIcon } from 'src/assets/star/프로필 아이콘.svg';
import StarItemContainer from './StarItem.style';

interface StarItemProps {
  lockers: Locker[];
}

const StarItem = ({ lockers }: StarItemProps) => {
  return (
    <StarItemContainer>
      {lockers.map((locker) => (
        <span key={locker.id}>
          <StarProfileIcon />
          <h2>{locker.location}</h2>
        </span>
      ))}
    </StarItemContainer>
  );
};

export default StarItem;
