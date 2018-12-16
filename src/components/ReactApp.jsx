import * as React from "react";
import { CenteringContainerWorking } from "./CenteringContainerWorking";
import { CenteringContainerBroken } from "./CenteringContainerBroken";

export const ReactApp = ({}) => {
    // return (
    //     <CenteringContainerWorking>
    //         <h1>Hello!</h1>
    //     </CenteringContainerWorking>
    // );

    return (
        <CenteringContainerBroken>
            <h1>Hello!</h1>
        </CenteringContainerBroken>
    );
};
