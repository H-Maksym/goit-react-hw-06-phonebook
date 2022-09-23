import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* min-height: 300px; */
  width: ${p => `${p.theme.space[7] * 3}px`};
  /* padding: 12px; */
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal + p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.034), 0 7px 5px rgba(0, 0, 0, 0.048),
    0 12px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.072),
    0 42px 33px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  /* 
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); */
`;
