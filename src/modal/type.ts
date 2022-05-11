export interface ModalProps {
    children?: JSX.Element | (JSX.Element | string)[];
    show: boolean;
    modalClosed?: Function;
  }
  export interface BackdropProps {
    clicked?: Function;
    show: boolean;
  }

  export interface StyledModalProps {
    show: boolean;
  }