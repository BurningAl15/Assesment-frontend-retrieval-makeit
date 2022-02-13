import { useState } from 'react';

function useProductDetails() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  const fetchData = () => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        // console.log(myJson);
        setData(myJson);
        setIsLoading(false);
      });
  };

  const fetchDataByID = (id) => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        const newProduct = myJson.filter((value) => {
          return value.id === Number(id);
        })[0];
        setProduct(newProduct);
        setIsLoading(false);
      });
  };

  return {
    data,
    setData,
    fetchData,
    isLoading,
    setIsLoading,
    product,
    setProduct,
    fetchDataByID
  };
}
export default useProductDetails;
