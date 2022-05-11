import React from "react";
import {Meta} from "@storybook/react";

import { Textarea } from "../src/textarea/textarea";
import { useState } from "@storybook/addons";

export default {
    component: Textarea,
    title: "Components/Textarea",
    argTypes: {}
} as Meta;

export const text = (props) => {
    const [value, setValue] = useState(props.value);
    return (
        <Textarea value={value} onChange={e => setValue(e.target.value)} />
    )
}