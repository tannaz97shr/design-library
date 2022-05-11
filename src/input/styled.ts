import styled from 'styled-components/macro';

import { DefaultTheme } from '../theme/theme';
import { InputProps } from './type';
import { colorToRgba } from '../utilities/utilities';

export const InputWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  & span {
    color: ${DefaultTheme.errorMsg};
    font-size: 0.7rem;
    margin-top: 0.7em;
  }
  input {
    transition: all linear 0.5s;
    outline: unset;
    border-radius: 5px;
    box-shadow: 0 0.187em 0.375em 0 rgba(0, 0, 0, 0.12);
    border: none;
    padding: 0.625rem 0.75rem;
    ::placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
    &:hover,
    &:focus {
      box-shadow: 0 0.187em 0.375em 0 ${colorToRgba(DefaultTheme.primary, 0.12)};
    }
    ${({ error }) =>
      error?.message
        ? `box-shadow: 0 0.187em 0.375em 0 ${colorToRgba(
            DefaultTheme.errorMsg,
            0.12
          )};`
        : null}
  }
`;
