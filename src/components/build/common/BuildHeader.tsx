import React from 'react';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { useBuildContext } from '../../../core/context/BuildContext';
import { BsCloudArrowUp, BsCloudCheck } from 'react-icons/bs';
import useResumeSave from '../../../core/hooks/useResumeSave';

function BuildHeader() {
    const [context, , isSame] = useBuildContext();
    const [saveContext, saving] = useResumeSave();
    return (
        <header className="flex w-full items-center justify-between px-1">
            <button className="inline-flex gap-3 items-center font-bold" type="button"><MdDriveFileRenameOutline /><span>{context.name}</span></button>
            <button className="inline-flex gap-3 items-center bg-blue-100 text-blue-800 px-5 rounded py-2 hover:text-white focus-visible:text-white hover:bg-blue-600 focus-visible:bg-blue-600 transition-all text-sm disabled:bg-gray-200 disabled:text-gray-700 font-bold" onClick={saveContext} type="button" disabled={saving || isSame}>
                {isSame ? <BsCloudCheck className="text-lg" /> : <BsCloudArrowUp className="text-lg" />}
                <span>Save{isSame && "d"} to Cloud</span>
            </button>
        </header>
    );
}

export default BuildHeader;
