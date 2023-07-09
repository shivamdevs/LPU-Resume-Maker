import { DocumentData, QuerySnapshot, collection, deleteDoc, doc, query, setDoc, updateDoc, where } from 'firebase/firestore';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebase/firebaseConfig';
import AppData from '../app/AppData';
import { useAuthState } from 'react-firebase-hooks/auth';
import ResumeDataType from '../../types/ResumeDataType';
import sortBy from 'sort-by';
import { useNavigate } from 'react-router-dom';
import { useDialoger } from '../../Dialoger/DialogerContext';
import { toast } from 'react-hot-toast';
import * as uuid from 'uuid';
import { FirebaseError } from 'firebase/app';

export interface ResumeType extends ResumeDataType {
    docRef?: DocumentData;
}

export type ResumeOperativeHandle = ($ref: ResumeType) => {
    open: () => void;
    preview: () => void;
    rename: () => void;
    clone: () => void;
    remove: () => void;
    hide: () => void;
};

export default function useUserResumeList(): [ResumeType[] | null, ResumeOperativeHandle, boolean] {
    const [user] = useAuthState(firebase.auth);
    const collectionSnapOnce = useCollection(query(collection(firebase.store, AppData.firebase), where("uid", "==", user?.uid), where("deleted", "==", false)))
    const collectionSnap: QuerySnapshot<DocumentData> | undefined = collectionSnapOnce[0];
    const userLoading: boolean = collectionSnapOnce[1];

    const [userResume, setUserResume] = React.useState<ResumeType[] | null>(null);

    const navigate = useNavigate();

    const dialoger = useDialoger();

    React.useEffect(() => {
        if (!collectionSnap?.empty) {
            const collection: ResumeType[] = collectionSnap?.docs.map((item: DocumentData) => ({ ...item.data(), docRef: item } as ResumeType)) || [];
            collection?.sort(sortBy("-updated"));
            
            setUserResume(collection);
        } else {
            setUserResume([]);
        }
    }, [collectionSnap]);

    function operations($ref: ResumeType) {
        return {
            open: () => navigate(`/build/${$ref.id}/${$ref.template}`),
            preview: () => navigate(`/build/${$ref.id}/${$ref.template}/preview`),
            rename: () => {
                const name = $ref.name;
                dialoger.input({
                    title: "Rename Resume",
                    value: name,
                    onSubmit: (value: string) => {
                        if (value === name) return toast.error(`Can't rename ${name} to same value.`);
                        if ($ref.docRef) {
                            const display: string = toast.loading(`Renaming ${name} to ${value}...`);
                            updateDoc($ref.docRef.ref, {
                                name: value,
                                updated: Date.now(),
                            }).then(() => {
                                toast.success(`${name} renamed to ${value}.`, { id: display });
                            }).catch((err: FirebaseError) => {
                                toast.error(`Failed to rename ${name}: ${err.message}`, { id: display });
                            });
                        }
                    },
                });
            },
            clone: () => {
                const display: string = toast.loading(`Cloning ${$ref.name}...`);

                const id: string = uuid.v4();

                const duplicate = { ...$ref, name: `${$ref.name} (Duplicate)`, updated: Date.now(), id };
                delete duplicate.docRef;

                setDoc(doc(firebase.store, AppData.firebase, id), duplicate).then(() => {
                    toast.success(`${$ref.name} cloned to ${$ref.name} (Duplicate).`, { id: display });
                }).catch((err: FirebaseError) => {
                    toast.error(`Failed to clone ${$ref.name}: ${err.message}`, { id: display });
                });
            },
            remove: () => {
                dialoger.consent({
                    title: `Delete ${$ref.name}`,
                    message: 'Are you sure you want to delete this resume? This action cannot be undone. Proceed with caution and make sure you have a backup of your resume if needed.',
                    selectText: "Delete",
                    selectClass: "bg-red-500 hover:bg-red-800 focus-visible:bg-red-800 text-white",
                    onSelect: () => {
                        if ($ref.docRef) {
                            const display: string = toast.loading(`Deleted ${$ref.name}...`);
                            deleteDoc($ref.docRef.ref).then(() => {
                                toast.success(`${$ref.name} deleted successfully.`, { id: display });
                            }).catch((err: FirebaseError) => {
                                toast.error(`Failed to delete ${$ref.name}: ${err.message}`, { id: display });
                            });
                        }
                    },
                });
            },
            hide: () => {
                dialoger.consent({
                    title: `Delete ${$ref.name}`,
                    message: 'Are you sure you want to delete this resume? This action cannot be undone. Proceed with caution and make sure you have a backup of your resume if needed.',
                    selectText: "Delete",
                    selectClass: "bg-red-500 hover:bg-red-800 focus-visible:bg-red-800 text-white",
                    onSelect: () => {
                        if ($ref.docRef) {
                            const display: string = toast.loading(`Deleted ${$ref.name}...`);
                            updateDoc($ref.docRef.ref, {
                                deleted: true,
                            }).then(() => {
                                toast.success(`${$ref.name} deleted successfully.`, { id: display });
                            }).catch((err: FirebaseError) => {
                                toast.error(`Failed to delete ${$ref.name}: ${err.message}`, { id: display });
                            });
                        }
                    },
                });
            },
        }
    }

    return [userResume, operations, userLoading];
}
