import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${p => `${p.theme.space[3]}px`};
  min-width: ${p => `${p.theme.space[7]}px`};
  text-transform: ${p => p.theme.textTransform.cap};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.form};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  color: ${p => p.theme.colors.button.text};
  background-color: ${p => p.theme.colors.button.primaryBtnBackground};
  border: ${p => {
    if (p.type === 'submit') {
      return p.theme.borders.normal + p.theme.colors.button.btnShadow;
    } else {
      return p.theme.borders.none;
    }
  }};

  border-radius: ${p => p.theme.radii.xl};

  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: ${p => p.theme.borders.none};

  :hover:not(:disabled) {
    background-color: ${p => p.theme.colors.button.accentBtnBackground};
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: ${p => p.theme.colors.white};
    transform: translateY(${p => ` ${p.theme.space[3] * -1}px`});
  }
`;
