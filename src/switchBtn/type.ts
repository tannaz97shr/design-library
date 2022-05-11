import { InputHTMLAttributes } from 'react';

export interface SwitchBtnProps extends InputHTMLAttributes<HTMLInputElement> {
    labelOn?: string;
    labelOff?: string;
}

export interface StyledSwitchLabelProps {
    isActive?: boolean;
}

export interface StyledSwitchBtnProps {

}