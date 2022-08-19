import React from 'react';
import { Locker } from 'src/types/Locker';
import { useNavigate } from 'react-router';
import { ReactComponent as StarProfileIcon } from 'src/assets/star/프로필 아이콘.svg';
import StarItemContainer from './StarItem.style';

interface StarItemProps {
  lockers: Locker[];
}

const StarItem = ({ lockers }: StarItemProps) => {
  const navigate = useNavigate();

  const handleItemTabbed = (id: string) => navigate(`/locker/${id}`);

  return (
    <StarItemContainer>
      {lockers.map((locker) => (
        <span key={locker.id} onClick={() => handleItemTabbed(locker.id)}>
          <StarProfileIcon />
          <h2>{locker.location}</h2>
        </span>
      ))}
    </StarItemContainer>
  );
};

export default StarItem;
