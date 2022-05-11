import styled from 'styled-components/macro';

import { StyledModalProps } from './type';

const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: fit-content;
  border: 1px solid #ccc;
  box-shadow: 0 24px 24px 0 rgba(0, 0, 0, 0.3);
  padding: 16px;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  transform: ${(props) =>
    props.show ? 'translateY(0)' : 'translateY(-100vh)'};
  opacity: ${(props) => (props.show ? '1' : '0')};
  border-radius: 0.2em;
`;

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default { StyledModal, StyledBackdrop, ModalWrapper };
