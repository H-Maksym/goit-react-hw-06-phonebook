import styled from 'styled-components';

export const StyledContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  margin-top: ${p => `${p.theme.space[4]}px`};
`;
