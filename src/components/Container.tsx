import * as React from "react";
import {} from "linaria";
import { styled } from "linaria/react";

export type ContainerProps = {
    backgroundColor: string;
}

export const Container = styled.div<ContainerProps>`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.backgroundColor};

    display: flex;
    justify-content: center;
    align-items: center;
`;
