import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 15px;
  max-width: calc(100% - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  &.light {
    border-top: 2px solid rgba(0, 0, 0, 0.3);
  }
  &.dark {
    border-top: 2px solid rgba(255, 255, 255, 0.582);
  }
`;
