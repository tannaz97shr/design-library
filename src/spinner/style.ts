import Styled,{keyframes} from 'styled-components/macro';
import { StyledSpinnerProps } from './type';
const SpinnerWrapper = Styled.div<StyledSpinnerProps>`
  transform: ${props=>props.show?'scale(1)':'scale(0)'};
  /* max-width: ${props=>props.show?'100%':'0'}; */
  transition: all 0.5s ease-in-out;
position: absolute;
right: -0.7rem;
align-items: center;
`;
const spinAnimate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.35;
  }
  100% {
    transform: rotate(360deg);
  }
`
const SpinnerStyled = Styled.div<StyledSpinnerProps>`
/* display: none; */
  width: 0.7rem;
  height:0.7rem;
  border-style: solid;
  border-width: 3px;
  border-color: inherit;
  border-radius: 100%;
  border-top: 3px solid transparent;
  animation: ${spinAnimate} infinite linear 1s;

}
`;

export const StyledSpinner = { SpinnerWrapper, SpinnerStyled };
