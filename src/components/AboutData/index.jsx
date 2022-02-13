/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  AboutContainer,
  Name,
  Description,
  Image,
  SocialMediaContainer,
  Ul,
  Li,
  SocialLink
} from './style';
import { ThemeContext } from '../../hooks/ThemeContext';

function AboutData(props) {
  const { data } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <AboutContainer className={theme}>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <Image src={data.profile_img} alt="" />
      <Ul>
        <h2>What I learned in Make It Real</h2>
        {data.learning.map((learnPoint) => {
          return (
            <Li key={learnPoint.id}>
              {learnPoint.id + 1}. {learnPoint.value}
            </Li>
          );
        })}
      </Ul>
      <SocialMediaContainer>
        <SocialLink className={theme} href={`mailto:${data.email}`}>
          <MdEmail />
        </SocialLink>
        <SocialLink className={theme} href={data.github}>
          <FaGithub />
        </SocialLink>
      </SocialMediaContainer>
    </AboutContainer>
  );
}
export default AboutData;
