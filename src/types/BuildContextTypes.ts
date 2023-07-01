import React from "react";
import ContentType from "./ContentType";

export default interface BuildContextTypes {
    content: ContentType;
    setContent: React.Dispatch<React.SetStateAction<ContentType>>,
};