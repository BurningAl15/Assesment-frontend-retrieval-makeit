import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
  &.light {
    background-color: #ffffff;
    color: #222222;
  }
  &.dark {
    background-color: #222222;
    color: #ffffff;
  }
`;

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
    transition: all 0.2s ease;
    &:hover {
      width: 35px;
      height: 35px;
    }
  }
  &.light {
    svg {
      fill: #222222;
    }
  }
  &.dark {
    svg {
      fill: #ffffff;
    }
  }
`;

export const FetchDataContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
`;
