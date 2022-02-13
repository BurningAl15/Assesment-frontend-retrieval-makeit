import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  border-radius: 10px;
  width: 315px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  flex-grow: 1;
  align-items: stretch;
  /* border: 2px solid rgba(0, 0, 0, 0.3); */
  &.light {
    border: 2px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.3);
  }
  &.dark {
    border: 2px solid rgba(255, 255, 255, 0.582);
    box-shadow: 0px 2px 10px 0 rgba(255, 255, 255, 0.582);
  }
`;

export const ProductDetailImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  padding: 5px;
  margin: 0 auto 15px auto;
`;

export const ProductDetailInteractions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonInteraction = styled.button`
  color: white;
  padding: 10px;
  background: #0099ff;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;
