import styled from 'styled-components';

export const LabelStyled = styled.label`
  display: block;
  color: ${p => p.theme.colors.form.formText};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.form};
  text-transform: ${p => p.theme.textTransform.cap};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const InputStyled = styled.input`
  display: block;
  padding: ${p =>
    `${p.theme.space[3]}px ` +
    `${p.theme.space[2] * 3}px ` +
    `${p.theme.space[3]}px ` +
    `${p.theme.space[2] * 3}px`};

  min-width: 100%;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.text};
  border-color: ${p => p.theme.colors.button.inputBorder};
  border-radius: ${p => p.theme.radii.lg};
  outline: ${p => p.theme.borders.none};
`;
