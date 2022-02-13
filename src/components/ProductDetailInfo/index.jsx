/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { ProductDetailContainer, Image, ProductRatingContainer } from './style';
import { ThemeContext } from '../../hooks/ThemeContext';

function ProductDetailInfo(props) {
  const { product } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <ProductDetailContainer className={theme}>
      <Image className={theme} src={product.image} alt="Product Img" />
      <h5>{product.title}</h5>
      <h5>Price: {product.price}</h5>
      <p>Description: {product.description}</p>
      <p>{product.category}</p>
      <ProductRatingContainer>
        <p>Rating: {product.rating.count}</p>
        <p>Rate: {product.rating.rate}</p>
      </ProductRatingContainer>
    </ProductDetailContainer>
  );
}

export default ProductDetailInfo;
