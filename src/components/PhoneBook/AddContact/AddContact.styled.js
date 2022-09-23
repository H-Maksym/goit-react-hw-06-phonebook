import styled from 'styled-components';

export const StyledText = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-weight: ${p => p.theme.colors.text.primaryText};
  text-transform: ${p => p.theme.textTransform.upCase};
  color: #758000;
`;
