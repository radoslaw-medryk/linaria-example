import { styled } from "linaria/react";

// This should work: but gets build-time error `Error: Cannot find module './FullScreen'`
import { FullScreen } from "./FullScreen";

// Work-around way to fix this issue is to specify extension explicitly:
// import { FullScreen } from "./FullScreen.jsx";

// Syntax `styled(FullScreen)` fails to properly import component on build time
// when it is imported without explicit extension (only `.js` would be resolved by default).
export const CenteringContainerBroken = styled(FullScreen)`
    background: papayawhip;

    display: flex;
    justify-content: center;
    align-items: center;
`;
