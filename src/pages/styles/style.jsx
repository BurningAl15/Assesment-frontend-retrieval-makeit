import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: calc(100% - 40px);
  padding: 20px;
  min-height: 100vh;
  position: relative;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const FetchDataContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
`;
