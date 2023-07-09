import React from 'react';
import { setDoc } from 'firebase/firestore';
import { useBuildContext } from '../context/BuildContext';
import { toast } from 'react-hot-toast';
import { FirebaseError } from 'firebase/app';

export default function useResumeSave(): [(() => void), boolean] {
    const [saving, setSave] = React.useState<boolean>(false);
    const [docContent, , , docReference] = useBuildContext();
    function saver() {
        setSave(true);
        const display: string = toast.loading(`Saving resume to cloud...`);
        setDoc(docReference, { ...docContent, updated: Date.now() }).then(() => {
            toast.success(`Resume saved to cloud.`, { id: display });
        }).catch((err: FirebaseError) => {
            toast.error(`Failed to save resume: ${err.message}`, { id: display });
        }).finally(() => {
            setSave(false);
        });
    }
    return [saver, saving];
}
