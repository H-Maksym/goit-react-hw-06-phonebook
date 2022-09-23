import styled from 'styled-components';

export const StyledTextList = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text.primaryText};
  min-width: 160px;
`;
