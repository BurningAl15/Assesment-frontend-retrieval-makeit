import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  max-width: calc(80% - 40px);
  padding: 20px;
  margin: 10px auto 0 auto;
  /* background: coral; */
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  margin: 20px 0;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const ProductRatingContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
