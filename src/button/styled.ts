import styled, { css } from 'styled-components/macro';
import { ButtonWrapperProps } from './type';
import { DefaultTheme } from '../theme/theme';
import { lighten } from 'polished';
export const ButtonWrapperStyles = css<ButtonWrapperProps>`
  .context {
    display: flex;
    position: relative;
    transition: 0.5s;
    padding-right: ${({ isLoading }) => (isLoading ? `0.7rem` : `0`)};
    align-items: center;
  }
  max-height: 2rem;
  border: ${({ ghost }) =>
    ghost ? `1px solid ${DefaultTheme.primary}` : `none`};
  color: ${({ ghost }) =>
    ghost ? DefaultTheme.primary : DefaultTheme.secondary};
  display: flex;
  align-items: center;
  outline: none;
  padding: 0.5rem 2rem;
  border-radius: 1.5rem;
  font-weight: 500;
  cursor: ${({ isLoading }) => (isLoading ? `not-allowed` : `pointer`)};
  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.ghost ? DefaultTheme.primary : DefaultTheme.secondary};
    color: ${({ ghost }) =>
      ghost ? DefaultTheme.secondary : DefaultTheme.primary};
    border: ${({ ghost }) =>
      !ghost ? `1px solid ${DefaultTheme.primary}` : `none`};
  }
  ${({ gradient, ghost }) =>
    gradient
      ? `background-image: linear-gradient(to bottom, ${
          DefaultTheme.primary
        }, ${lighten(0.2, DefaultTheme.primary)})`
      : `background-color: ${
          ghost ? DefaultTheme.secondary : DefaultTheme.primary
        }`}
`;
const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  justify-content: center;
  button {
    ${ButtonWrapperStyles}
  }
`;

export default { ButtonWrapper };
