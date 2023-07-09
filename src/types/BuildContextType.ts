import { DocumentData, DocumentReference } from "firebase/firestore";
import ResumeDataType from "./ResumeDataType";

type BuildContextType = [
    ResumeDataType,
    React.Dispatch<React.SetStateAction<ResumeDataType>>,
    boolean,
    DocumentReference<DocumentData>,
];

export default BuildContextType;