import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: calc(80% - 40px);
  padding: 20px;
  margin: 10px auto 0 auto;
  /* background: coral; */
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`;

export const Name = styled.p`
  font-size: 25px;
  margin-bottom: 20px;
  /* color: white; */
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  /* color: white; */
`;

export const Image = styled.img`
  margin: 20px 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  /* color: white; */
  margin-bottom: 20px;
`;

export const Li = styled.li`
  margin-top: 5px;
  list-style: none;
  font-size: 16px;
  /* width: 200px; */
  /* margin: 0 auto; */
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  max-width: calc(50% - 20px);
  padding: 10px;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
`;

export const SocialLink = styled.a`
  height: 42.5px;
  svg {
    width: 30px;
    height: 30px;
    /* color: #ffffff; */
    color: black;
    transition: all 0.2s ease;
  }
  &:hover {
    svg {
      padding-bottom: 10px;
      border-bottom: 2.5px solid black;
    }
  }
`;
