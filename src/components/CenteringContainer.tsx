import { styled } from "linaria/react";
import { FullScreen } from "./FullScreen.tsx"

export type ContainerProps = {
    backgroundColor: string;
}

export const CenteringContainer = styled(FullScreen)`
    background: papayawhip;

    display: flex;
    justify-content: center;
    align-items: center;
`;
