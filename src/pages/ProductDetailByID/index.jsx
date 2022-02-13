import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useProductDetails from '../../hooks/useProductDetails';
import PlaceholderData from '../../components/PlaceholderData';
import { PageContainer, BackButton } from '../styles/style';
import ProductDetailInfo from '../../components/ProductDetailInfo';

function ProductDetailByID() {
  const { product, isLoading, fetchDataByID } = useProductDetails();
  const paramValue = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataByID(paramValue.id);
    // console.log('A');
  }, []);

  return (
    <PageContainer>
      <BackButton type="button" onClick={() => navigate(`/`)}>
        <AiOutlineArrowLeft />
      </BackButton>
      <h2>Product Detail</h2>
      {isLoading && <PlaceholderData />}
      {!isLoading && <ProductDetailInfo product={product} />}
    </PageContainer>
  );
}

export default ProductDetailByID;
