export default interface ContentType {
    [key: string]: any;
    basicInfo?: {
        name?: string;
    };
};