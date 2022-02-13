import { useState } from 'react';

function useProfileData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    fetch('profile.json', {
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
  return { data, setData, fetchData, isLoading, setIsLoading };
}

export default useProfileData;
