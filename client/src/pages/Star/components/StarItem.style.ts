import styled from '@emotion/styled';

const StarItemContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: center;

  span {
    width: 90%;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    align-items: center;
    padding: 5px 20px;
    gap: 20px;
    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export default StarItemContainer;
