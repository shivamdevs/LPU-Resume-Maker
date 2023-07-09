import React from 'react';
import Dialog from './Dialog';
import classNames from 'classnames';
import { DialogConsentProps } from './DialogerTypes';

function DialogerConsent({ title, message, onClose, onCancel, cancelText, onSelect, selectText, selectClass, cancelClass }: DialogConsentProps) {

    return (
        <Dialog visible className="rounded-lg shadow-md w-[420px]" useOuterClick onClose={() => {
            onClose?.();
            onCancel?.();
        }}>
            {(_ref: HTMLDialogElement | null) => (<div>
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="my-6 text-sm text-slate-600">{message}</p>
                <div className="flex gap-4 mt-5 flex-nowrap">
                    <button className={classNames("flex-1 px-5 py-2 font-semibold transition-all rounded-md", cancelClass || "text-blue-700 focus-visible:bg-blue-100 hover:bg-blue-100 disabled:bg-gray-400")} type="button" autoFocus onClick={() => _ref?.close()}>{cancelText || "Cancel"}</button>
                    <button className={classNames("flex-1 px-5 py-2 font-semibold  transition-all rounded-md", selectClass || "bg-teal-500 text-white hover:bg-teal-700 focus-visible:bg-teal-700 disabled:bg-gray-400")} type="button" onClick={() => {
                        _ref?.close();
                        onSelect?.();
                    }}>{selectText || "Confirm"}</button>
                </div>
            </div>)}
        </Dialog>
    );
}

export default DialogerConsent;
