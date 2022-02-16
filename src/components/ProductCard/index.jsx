/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
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
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState(props.minutes * 60);

  useEffect(() => {
    let myInterval = null;
    if (time === 1) setIsActive(false);
    if (isActive) {
      myInterval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }

    return () => {
      clearInterval(myInterval);
    };
  }, [time]);

  return (
    <ProductDetailContainer className={theme}>
      <ProductDetailImg src={data.image} alt="Product Img" />
      <h5>{data.title}</h5>
      <ProductDetailInteractions>
        <p>
          {parseInt(time / 60, 3).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          })}
          :
          {(time % 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          })}
        </p>
        <ButtonInteraction
          type="button"
          disabled={!isActive}
          className={!isActive && 'disabled'}
          onClick={() => navigate(`/product-detail/${data.id}`)}
        >
          Go To Detail
        </ButtonInteraction>
      </ProductDetailInteractions>
    </ProductDetailContainer>
  );
}

export default ProductDetailData;
