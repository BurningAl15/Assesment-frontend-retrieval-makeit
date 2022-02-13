import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  max-width: calc(80% - 40px);
  padding: 20px;
  margin: 10px auto 0 auto;
  border-radius: 10px;
  &.light {
    border: 2px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.3);
  }
  &.dark {
    border: 2px solid rgba(255, 255, 255, 0.582);
    box-shadow: 0px 2px 10px 0 rgba(255, 255, 255, 0.582);
  }
`;

export const Image = styled.img`
  margin: 20px 0;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  &.light {
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.3);
  }
  &.dark {
    box-shadow: 0px 2px 10px 0 rgba(255, 255, 255, 0.582);
  }
`;

export const ProductRatingContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
