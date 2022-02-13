/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useProductDetails from '../../hooks/useProductDetails';
import PlaceholderData from '../../components/PlaceholderData';
import { PageContainer, BackButton } from '../styles/style';
import ProductDetailInfo from '../../components/ProductDetailInfo';
import { ThemeContext } from '../../hooks/ThemeContext';

function ProductDetailByID() {
  const { product, isLoading, fetchDataByID } = useProductDetails();
  const paramValue = useParams();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetchDataByID(paramValue.id);
    // console.log('A');
  }, []);

  return (
    <PageContainer>
      <BackButton className={theme} type="button" onClick={() => navigate(`/`)}>
        <AiOutlineArrowLeft />
      </BackButton>
      <h2>Product Detail</h2>
      {isLoading && <PlaceholderData />}
      {!isLoading && <ProductDetailInfo product={product} />}
    </PageContainer>
  );
}

export default ProductDetailByID;
