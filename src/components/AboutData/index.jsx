/* eslint-disable react/prop-types */
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

function AboutData(props) {
  const { data } = props;
  return (
    <AboutContainer>
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
        <SocialLink href={`mailto:${data.email}`}>
          <MdEmail />
        </SocialLink>
        <SocialLink href={data.github}>
          <FaGithub />
        </SocialLink>
      </SocialMediaContainer>
    </AboutContainer>
  );
}
export default AboutData;
