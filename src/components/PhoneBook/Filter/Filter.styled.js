import styled from 'styled-components';

export const StyledFilterInput = styled.input`
  display: block;
  padding: ${p =>
    `${p.theme.space[3]}px ` +
    `${p.theme.space[2] * 3}px ` +
    `${p.theme.space[3]}px ` +
    `${p.theme.space[2] * 3}px`};

  min-width: ${p => `${p.theme.space[8]}px`};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.text};
  border-color: ${p => p.theme.colors.button.inputBorder};
  border-radius: ${p => p.theme.radii.lg};
  outline: ${p => p.theme.borders.none};
`;

export const StyledFilterLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.form.formText};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.form};
  text-transform: ${p => p.theme.textTransform.cap};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

// export const StyledSearchButton = styled.button`
//   position: absolute;
//   right: 20%;
//   border-radius: ${p => p.theme.radii.round};
//   padding: ${p => `${p.theme.space[3]}px`};
//   /* min-width: ${p => `${p.theme.space[7]}px`}; */
//   text-transform: ${p => p.theme.textTransform.cap};
//   font-size: ${p => p.theme.fontSizes.l};
//   color: ${p => p.theme.colors.button.text};
//   background-color: ${p => p.theme.colors.button.primaryBtnBackground};
//   border: ${p => p.theme.borders.none};

//   /* transition: 250ms; */
// `;
