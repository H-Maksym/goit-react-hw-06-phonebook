import styled from 'styled-components';

export const StyledNotification = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.text.accent};
  font-size: ${p => p.theme.fontSizes.xl};
  letter-spacing: ${p => p.theme.letterSpacing.l};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
