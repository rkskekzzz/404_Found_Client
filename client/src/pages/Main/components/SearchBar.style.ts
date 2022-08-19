import styled from '@emotion/styled';

const SearchBarContainer = styled.div`
  display: flex;
  position: fixed;
  top: 10px;
  z-index: 50;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  gap: 10px;
  .search {
    background: white;
    width: 90vw;
    @media (min-width: 768px) {
      width: 50vw;
    }
    height: 5vh;
    border: 0px;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 15px;
    svg {
      color: #ecf6ff;
    }
    input {
      font-size: 1.1rem;
      flex: 1 1 0;
      border: 0px;
    }
    input:focus {
      flex: 9 9 0;
      border: 0px;
      outline: none;
    }
  }
`;

export default SearchBarContainer;
