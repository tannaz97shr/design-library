interface Theme {
  primary: string;
  secondary: string;
  gray: string;
  text: string;
  deactive: string;
  errorMsg: string;
  status: {
    active: string;
    deactive: string;
    pending: string;
  }
}

export const DefaultTheme: Theme = {
  primary: '#00aeef',
  secondary: '#fff',
  gray: '#b1b1b1',
  text: 'rgba(0, 0, 0, 0.87)',
  deactive: '#d5d5d5',
  errorMsg: '#b00020',
  status: {
    active: '#3acc6c',
    deactive: '#b00020',
    pending: '#e68a00'
  }
};
