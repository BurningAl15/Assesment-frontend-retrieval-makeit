import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: calc(80% - 40px);
  padding: 20px;
  margin: 10px auto 0 auto;
  /* background: coral; */
  border-radius: 10px;
  &.light {
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(0, 0, 0, 0.3);
  }
  &.dark {
    box-shadow: 0px 2px 10px 0 rgba(255, 255, 255, 0.582);
    border: 2px solid rgba(255, 255, 255, 0.582);
  }
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
  &.light {
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.3);
  }
  &.dark {
    box-shadow: 0px 2px 10px 0 rgba(255, 255, 255, 0.582);
  }

  /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2); */
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Li = styled.li`
  margin-top: 5px;
  list-style: none;
  font-size: 16px;
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
    transition: all 0.2s ease;
  }

  &.light {
    svg {
      fill: #222222;
      filter: drop-shadow(0px 0px 2px rgba(34, 34, 34, 0.72));
    }
  }
  &.dark {
    svg {
      fill: #ffffff;
      filter: drop-shadow(0px 0px 2px rgba(204, 204, 204, 0.72));
    }
  }

  &:hover {
    svg {
      padding-bottom: 10px;
      border-bottom: 2.5px solid black;
      &.light {
        border-bottom: 2.5px solid rgba(0, 0, 0, 0.3);
      }
      &.dark {
        border-bottom: 2.5px solid rgba(255, 255, 255, 0.582);
      }
    }
  }
`;
