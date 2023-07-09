import React from 'react';
import * as uuid from 'uuid';
import AppData from '../app/AppData';
import firebase from '../firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import ResumeDataType from '../../types/ResumeDataType';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-hot-toast';

export default function useNewResume(): [(template: string) => void, boolean] {
    const [user] = useAuthState(firebase.auth);
    const navigate = useNavigate();

    const [newLoad, setNewLoad] = React.useState<boolean>(false);

        function newResume(template: string):void {
            setNewLoad(true);
            const id: string = uuid.v4();
            setDoc(doc(firebase.store, AppData.firebase, id), {
                id,
                uid: user?.uid,
                template,
                name: "My Resume",
                created: Date.now(),
                updated: Date.now(),
                deleted: false,
            } as ResumeDataType).then(() => {
                navigate(`/build/${id}/${template}`);
            }).catch((err: FirebaseError) => {
                toast.error(err.message);
            }).finally(() => {
                setNewLoad(false);
            });
        }
    return [newResume, newLoad];
}
