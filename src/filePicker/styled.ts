import styled from 'styled-components';
import { ButtonWrapperStyles } from '../button/styled';
import { ButtonWrapperProps } from '../button/type';

const Label = styled.label<ButtonWrapperProps>`
width: max-content;
  input {
    display: none;
  }
  ${ButtonWrapperStyles}
`;
export const FilePickerStyles = { Label };
