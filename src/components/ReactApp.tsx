import * as React from "react";
import {} from "linaria";
import { styled } from "linaria/react";
import { Container } from "./Container.tsx"; // TODO [RM]: another bug causes need for .tsx here

export const ReactApp: React.SFC<{}> = ({}) => {
    return (
        <Container backgroundColor="papayawhip">
            <h1>Hello!</h1>
        </Container>
    );
};
