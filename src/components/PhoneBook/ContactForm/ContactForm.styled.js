import styled from 'styled-components';

export const FormContact = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${p => `${p.theme.space[7] * 3}px`};
  height: auto;
  gap: ${p => `${p.theme.space[4]}px`};
  padding: ${p => `${p.theme.space[3]}px`};
  /* border: ${p => p.theme.borders.normal + p.theme.colors.accent}; */
  border-radius: ${p => p.theme.radii.lg};
`;
