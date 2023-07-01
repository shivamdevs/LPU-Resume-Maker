export default interface ContentType {
    active: {
        header: boolean;
        headerImage: boolean;
        headerName: boolean;
        headerRole: boolean;
        headerLinks: boolean;
    };
    name?: string;
    role?: string;
    image?: any;
    links?: [];
};