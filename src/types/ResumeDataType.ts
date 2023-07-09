import ContentType from "./ContentType";

export default interface ResumeDataType {
    id: string;
    uid: string;
    name: string;

    template: string;

    created: number;
    updated: number;
    deleted: boolean;

    data?: ContentType;
}

export const DummyResumeData = {
    id: "",
    uid: "",
    name: "",

    template: "",

    created: Date.now(),
    updated: Date.now(),
    deleted: false,
};