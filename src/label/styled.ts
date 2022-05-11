import Styled from 'styled-components/macro';
import { LabelWrapperProps } from './type';
import { DefaultTheme } from '../theme/theme';

const LabelWrapper = Styled.div<LabelWrapperProps>`
background: ${({mode}) => DefaultTheme.status[mode]}44;
color: ${({mode}) => DefaultTheme.status[mode]};
width: 5rem;
padding: 4px;
display: flex;
justify-content: center;
border-radius: 1.25rem;
`;

export default {LabelWrapper};
