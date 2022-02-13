/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import PlaceholderData from '../../components/PlaceholderData';
import useProfileData from '../../hooks/useProfileData';
import { PageContainer } from '../styles/style';
import AboutData from '../../components/AboutData';

function About() {
  const { data, isLoading, fetchData } = useProfileData();

  useEffect(() => {
    fetchData();
    // console.log('A');
  }, []);

  return (
    <PageContainer>
      <h2>About</h2>
      {isLoading && <PlaceholderData />}
      {!isLoading && <AboutData data={data} />}
    </PageContainer>
  );
}

export default About;
