import * as React from "react";
import { BorderedColorBox } from "./BorderedColorBox";

export const ReactApp: React.SFC<{}> = ({}) => {
    return (
        <BorderedColorBox
            backgroundColor="orange"
            borderColor="green"
            aria-label="colorful box"
        />
    );
};
