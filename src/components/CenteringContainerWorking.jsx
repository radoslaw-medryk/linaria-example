import * as React from "react"; 
import { styled } from "linaria/react";

// This works OK even without explicit extension, because we dont use
// `FullScreen` component in syntax like `styled(FullScreen)`.
import { FullScreen } from "./FullScreen";

const CenteringContainer_ = styled.div`
    background: papayawhip;

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CenteringContainerWorking = ({children}) => (
    <FullScreen>
        <CenteringContainer_>{children}</CenteringContainer_>
    </FullScreen>
);
