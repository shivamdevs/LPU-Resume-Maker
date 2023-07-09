import React from "react";
import DialogerTypes, { DialogConsentProps, DialogInputProps } from "./DialogerTypes";
import { v4 as uuid } from 'uuid';

export interface DialogerContextTypes {
    get: DialogerTypes[];
    set: React.Dispatch<React.SetStateAction<DialogerTypes[]>>;
};

const DialogerContext = React.createContext<DialogerContextTypes>({
    get: [],
    set: () => { },
});

export default DialogerContext;

export const useDialogerContext = () => React.useContext(DialogerContext);

export const useDialoger = () => {
    const { set } = useDialogerContext();

    function input(props: DialogInputProps) {
        set((get: DialogerTypes[]) => {
            const dlg: DialogerTypes[] = [...get];
            dlg.push({
                ...props,
                type: 'input',
                id: uuid(),
            });
            return dlg;
        });
    }

    function consent(props: DialogConsentProps) {
        set((get: DialogerTypes[]) => {
            const dlg: DialogerTypes[] = [...get];
            dlg.push({
                ...props,
                type: 'consent',
                id: uuid(),
            });
            return dlg;
        });
    }
    return {
        input,
        consent,
    };
};