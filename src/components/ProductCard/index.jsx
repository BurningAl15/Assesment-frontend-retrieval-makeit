/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import {
  ProductDetailImg,
  ProductDetailContainer,
  ProductDetailInteractions,
  ButtonInteraction
} from './style';
import { ThemeContext } from '../../hooks/ThemeContext';

// const calculateTimeLeft = () => {
//   const year = new Date().getFullYear();
//   const difference = +new Date(`10/01/${year}`) - +new Date();

//   let timeLeft = {};

//   if (difference > 0) {
//     timeLeft = {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / 1000 / 60) % 60),
//       seconds: Math.floor((difference / 1000) % 60)
//     };
//   }

//   return timeLeft;
// };

function ProductDetailData(props) {
  const { data } = props;
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isActive, setIsActive] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // });

  const temp = () => {
    // setTimeLeft(calculateTimeLeft());
    setIsActive(false);
  };

  return (
    <ProductDetailContainer className={theme}>
      <ProductDetailImg src={data.image} alt="Product Img" />
      <h5>{data.title}</h5>
      <ProductDetailInteractions>
        <p>AAAAAA</p>
        <ButtonInteraction
          type="button"
          disabled={!isActive}
          onClick={() => navigate(`/product-detail/${data.id}`)}
        >
          Go To Detail
        </ButtonInteraction>
        <button type="button" onClick={temp}>
          aaa
        </button>
      </ProductDetailInteractions>
    </ProductDetailContainer>
  );
}

export default ProductDetailData;
