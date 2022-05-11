import styled from 'styled-components/macro';
import { lighten, darken } from 'polished';

import { StyledSwitchLabelProps } from './type';
import { DefaultTheme } from '../theme/theme';
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${lighten(0.1, DefaultTheme.gray)};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: '';
    height: 1.25em;
    width: 1.25em;
    top: -0.2em;
    left: -0.2em;
    bottom: 4px;
    background-color: ${DefaultTheme.gray};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.25em;
  height: 0.875em;
  margin: 0 0.5em;
  input {
    display: none;
    &:checked + ${Slider} {
      &:before {
        background-color: ${DefaultTheme.primary};
      }
    }
    &:focus + ${Slider} {
      box-shadow: 0 0 1px #2196f3;
    }
    &:checked + ${Slider}:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`;
const SwitchBtnWrapper = styled.div`
  direction: rtl;
  display: flex;
  align-items: center;
`;

const StyledSwitchLabel = styled.div<StyledSwitchLabelProps>`
  color: ${({ isActive }) =>
    isActive ? darken(0.2, DefaultTheme.gray) : DefaultTheme.gray};
`;

export const SwitchStyles =  { SwitchBtnWrapper, StyledSwitchLabel, Switch, Slider };
