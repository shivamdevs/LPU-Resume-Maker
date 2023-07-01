import React from "react";
import BuildContextTypes from "../../types/BuildContextTypes";
import DemoContent from "../../types/DemoContent";



const BuildContext = React.createContext<BuildContextTypes>({
    content: DemoContent,
    setContent: () => { },
});

export default BuildContext;

export const useBuildContext = () => React.useContext(BuildContext);