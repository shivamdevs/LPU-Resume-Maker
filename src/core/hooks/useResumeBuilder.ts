import React from 'react';
import BuildContextType from '../../types/BuildContextType';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import firebase from '../firebase/firebaseConfig';
import AppData from '../app/AppData';
import { useParams } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import ResumeDataType, { DummyResumeData } from '../../types/ResumeDataType';
import deepCompareObjects from '../function/deepCompareObjects';
import { useAuthState } from 'react-firebase-hooks/auth';

function useResumeBuilder(): [BuildContextType, boolean, FirebaseError | boolean | undefined] {
    const params = useParams();
    const [user] = useAuthState(firebase.auth);

    const docReference = doc(firebase.store, AppData.firebase, (params.resume || ""));

    const [docSnap, docLoading, docError] = useDocument(docReference);
    const [original, setOriginal] = React.useState<ResumeDataType>(DummyResumeData);
    const [content, setContent] = React.useState<ResumeDataType>(DummyResumeData);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<FirebaseError | boolean | undefined>(undefined);

    React.useEffect(() => {
        if (docSnap?.exists()) {
            const docData: ResumeDataType = docSnap.data() as ResumeDataType;
            if (docData.uid === user?.uid) {
                setContent(docSnap.data() as ResumeDataType);
                setOriginal(docSnap.data() as ResumeDataType);
                return;
            }
        }
        setContent(DummyResumeData);
        setOriginal(DummyResumeData);
    }, [docSnap, user?.uid]);

    React.useEffect(() => {
        setError(docError || !docSnap?.exists());
    }, [docError, docSnap]);

    React.useEffect(() => {
        setLoading(docLoading);
    }, [docLoading]);

    const context: BuildContextType = [content, setContent, deepCompareObjects(content, original), docReference];
    return [context, loading, error];
}

export default useResumeBuilder;
