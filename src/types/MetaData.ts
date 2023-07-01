export interface MetaData {
    template: 202383848;
    content?: MetaDataContent;
};


export interface MetaDataContent {
    header: {
        active: boolean;
        data: {
            photo: any;
            name: string;
            role: string;
            link: MetaDataContentHeaderLink[],

        },
    },
}

export interface MetaDataContentHeaderLink {
    name: "phone" | "email" | "linkedin" | "github" | "address";
    data: string;
    icon?: React.ReactNode;
}