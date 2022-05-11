// export type ButtonTypes = "light" | "primary"
export interface ButtonProps {
  children: string | (JSX.Element | string)[] | JSX.Element;
  ghost?: boolean;
  gradient?: boolean;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "submit" | "button";
}
export interface ButtonWrapperProps {
  ghost?: boolean;
  gradient?: boolean;
  isLoading?: boolean;
}
