import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 315px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  flex-grow: 1;
  align-items: stretch;
`;

export const ProductDetailImg = styled.img`
  width: 150px;
  height: 150px;
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
