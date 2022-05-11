import styled from 'styled-components/macro';
import { lighten } from 'polished';

import {
  SelectWrapperProps,
  StyledSelectModalProps,
  OptionProps,
} from './type';
import { DefaultTheme } from '../theme/theme';

const SelectWrapper = styled.div<SelectWrapperProps>`
  direction: rtl;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
`;

const StyledSelectInput = styled.input`
  height: 2.5em;
  padding: 6px 12px 7.1px 8px;
  border-radius: 4px;
  /* border: solid 1px ${lighten(0.4, DefaultTheme.primary)}; */
  border: none;
  box-shadow: 0 0.187em 0.375em 0 rgba(0, 0, 0, 0.12);
  z-index: 20;
  &:focus {
    outline: none;
  }
`;

const StyledSelectDiv = styled.div`
  display: flex;
  align-items: center;
  height: 2.5em;
  padding: 6px 12px 7.1px 8px;
  border-radius: 4px;
  /* border: solid 1px ${lighten(0.4, DefaultTheme.primary)}; */
  border: none;
  box-shadow: 0 0.187em 0.375em 0 rgba(0, 0, 0, 0.12);
  z-index: 20;
  &:focus {
    outline: none;
  }
`;

const StyledSelectModal = styled.div<StyledSelectModalProps>`
  position: absolute;
  display: ${({ show }) => (show ? `flex` : 'none')};
  left: 0;
  right: 0;
  top: 3.2em;
  z-index: 20;
  /* border: 1px solid ${lighten(0.4, DefaultTheme.primary)}; */
  box-shadow: 0 0.187em 0.375em 0 rgba(0, 0, 0, 0.12);
  background-color: white;
  flex-direction: column;
  cursor: pointer;
`;

const SvgWrapper = styled.div<SelectWrapperProps>`
  position: absolute;
  width: 0.5em;
  height: 0.5em;
  z-index: 22;
  top: 1.25rem;
  left: 1em;
  z-index: 25;
  display: flex;
  transform: ${({ show }) => (show ? `rotate(180deg)` : `rotate(0deg)`)};
`;

const SelectBackdrop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
`;


const StyledOption = styled.div<OptionProps>`
  padding: 0.5em;
  &:hover {
    background-color: ${lighten(0.2, DefaultTheme.gray)};
  }
`;

export default {
  SelectWrapper,
  StyledSelectModal,
  StyledSelectInput,
  SvgWrapper,
  SelectBackdrop,
  StyledOption,
  StyledSelectDiv,
};
