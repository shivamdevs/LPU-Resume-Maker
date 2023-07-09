import React from "react";
import BuildContextTypes from "../../types/BuildContextType";
import { DummyResumeData } from "../../types/ResumeDataType";
import firebase from "../firebase/firebaseConfig";
import AppData from "../app/AppData";
import { doc } from "firebase/firestore";



const BuildContext = React.createContext<BuildContextTypes>([
    DummyResumeData,
    () => {},
    true,
    doc(firebase.store, AppData.firebase, "user-root"),
]);

export default BuildContext;

export const useBuildContext = () => React.useContext(BuildContext);