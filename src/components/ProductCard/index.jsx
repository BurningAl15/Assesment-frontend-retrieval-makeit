/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import {
  ProductDetailImg,
  ProductDetailContainer,
  ProductDetailInteractions,
  ButtonInteraction
} from './style';

function ProductDetailData(props) {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <ProductDetailContainer>
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
