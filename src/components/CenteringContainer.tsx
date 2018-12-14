import { styled } from "linaria/react";

// This should work: but gets build-time error `Error: Cannot find module './FullScreen'`
import { FullScreen } from "./FullScreen";

// Work-around way to fix this issue:
// import { FullScreen } from "./FullScreen.tsx";


export type ContainerProps = {
    backgroundColor: string;
}

export const CenteringContainer = styled(FullScreen)`
    background: papayawhip;

    display: flex;
    justify-content: center;
    align-items: center;
`;
