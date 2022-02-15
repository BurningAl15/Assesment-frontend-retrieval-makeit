/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About</h2>
        {isLoading && <PlaceholderData />}
        {!isLoading && <AboutData data={data} />}
      </motion.div>
    </PageContainer>
  );
}

export default About;
