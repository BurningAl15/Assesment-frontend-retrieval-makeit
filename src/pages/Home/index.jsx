import { useEffect, useState } from 'react';
import useProductDetails from '../../hooks/useProductDetails';
import { PageContainer, FetchDataContainer } from '../styles/style';
import ProductCard from '../../components/ProductCard';
import PlaceholderDetail from '../../components/PlaceholderDetail';

function Home() {
  const { data, isLoading, fetchData } = useProductDetails();
  const [placeholderLoad, setPlaceholderLoad] = useState([]);

  const initializePlaceholder = () => {
    const newArr = [...placeholderLoad];
    for (let i = 0; i < 20; i += 1) {
      newArr.push([{ id: i + 400 }]);
    }
    setPlaceholderLoad(newArr);
  };

  useEffect(() => {
    initializePlaceholder();
    fetchData();
    // console.log('A');
  }, []);

  return (
    <PageContainer>
      <h2>Home</h2>
      <FetchDataContainer>
        {!isLoading &&
          data.map((value) => {
            return <ProductCard key={value.id} data={value} />;
          })}
        {isLoading &&
          placeholderLoad.map((value) => {
            return <PlaceholderDetail key={value.id} />;
          })}
      </FetchDataContainer>
    </PageContainer>
  );
}

export default Home;
