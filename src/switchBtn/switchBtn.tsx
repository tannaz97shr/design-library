import React from 'react';

import { SwitchBtnProps } from './type';
import { SwitchStyles } from './styled';

export const SwitchBtn = (props: SwitchBtnProps) => {
  const { labelOn, labelOff, ...rest } = props;
  const { SwitchBtnWrapper, StyledSwitchLabel, Switch, Slider } = SwitchStyles
  console.log('switch btn props', props);
  return (
    <SwitchBtnWrapper>
      <StyledSwitchLabel isActive={rest.checked}>
        {props.labelOn}
      </StyledSwitchLabel>
      <Switch>
        <input type="checkbox" {...rest} />
        <Slider/>
      </Switch>
      <StyledSwitchLabel isActive={!rest.checked}>
        {props.labelOff}
      </StyledSwitchLabel>
    </SwitchBtnWrapper>
  );
};

