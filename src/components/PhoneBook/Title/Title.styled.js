import styled from 'styled-components';

export const StyledTitle = styled.h2`
  text-align: center;
  color: ${p => p.theme.colors.text.sectionTitle};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: ${p => p.theme.lineHeights.sectionTitle};
  letter-spacing: ${p => p.theme.letterSpacing.m};
`;
