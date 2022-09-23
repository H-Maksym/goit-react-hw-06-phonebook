import styled from 'styled-components';

export const StyledSearchButton = styled.button`
  /* position: absolute;
  right: 20%; */
  border-radius: ${p => p.theme.radii.round};
  /* padding: ${p => `${p.theme.space[3]}px`}; */
  text-transform: ${p => p.theme.textTransform.cap};
  /* width: ${p => `${p.theme.space[5]}px`};
  height: ${p => `${p.theme.space[5]}px`}; */
  color: ${p => p.theme.colors.button.text};
  background-color: ${p => p.theme.colors.button.primaryBtnBackground};
  border: ${p => p.theme.borders.none};

  :hover,
  :focus {
    outline: ${p => p.theme.borders.none};
    border: ${p => p.theme.borders.none};
  }
  /* transition: 250ms; */
`;
