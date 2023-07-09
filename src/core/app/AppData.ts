type AppDataType = {
    name: string;
    short_name: string;
    logo: any;

    storage: {
        build: {
            leave: string;
            metadata: string;
        };
    };

    firebase: string;
};


const AppData: AppDataType = {
    name: "Resume Maker",
    short_name: "Resume",
    logo: require("../../images/logo.png"),

    storage: {
        build: {
            leave: "resume:build:leave",
            metadata: "resume:build:metadata",
        },
    },

    firebase: "resume-maker",
};

export default AppData;