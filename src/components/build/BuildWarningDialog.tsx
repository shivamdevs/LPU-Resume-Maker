import React from 'react';
import Dialog from '../../Dialoger/Dialog';
import AppData from '../../core/app/AppData';

function BuildWarningDialog() {

    const visible: boolean = (() => {
        const saved = window.sessionStorage?.getItem(AppData.storage.build.leave);
        if (!saved) return true;
        return false;
    })();

    function handleDialogClose() {
        window.sessionStorage?.setItem(AppData.storage.build.leave, 'true');
    }

    return (
        <Dialog visible={visible} onClose={handleDialogClose} showClose={false} useOuterClick={false} className="w-80 rounded-lg">
            {(_ref: HTMLDialogElement | null) => (
                <>
                    <h2 className="text-red-600 font-bold text-xl">Important Notice</h2>
                    <p className="font-medium my-5">Please ensure you save or download your resume before leaving this page to prevent any loss of progress.</p>
                    <button type="button" onClick={() => _ref?.close()} className="w-full py-2 bg-teal-500 transition-all rounded-lg text-white hover:bg-teal-700">Understood</button>
                </>
            )}
        </Dialog>
    );
}

export default BuildWarningDialog;
