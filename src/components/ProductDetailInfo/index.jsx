/* eslint-disable react/prop-types */
import { ProductDetailContainer, Image, ProductRatingContainer } from './style';

function ProductDetailInfo(props) {
  const { product } = props;
  return (
    <ProductDetailContainer>
      <Image src={product.image} alt="Product Img" />
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
