/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {
  ProductDetailImg,
  ProductDetailContainer,
  ProductDetailInteractions,
  ButtonInteraction
} from './style';
import { ThemeContext } from '../../hooks/ThemeContext';

function ProductDetailData(props) {
  const { data } = props;
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <ProductDetailContainer className={theme}>
      <ProductDetailImg src={data.image} alt="Product Img" />
      <h5>{data.title}</h5>
      <ProductDetailInteractions>
        <p>AAAA</p>
        <ButtonInteraction
          type="button"
          onClick={() => navigate(`/product-detail/${data.id}`)}
        >
          Go To Detail
        </ButtonInteraction>
      </ProductDetailInteractions>
    </ProductDetailContainer>
  );
}

export default ProductDetailData;
