import React from 'react';
import Dialog from './Dialog';
import { v4 as uuid } from 'uuid';
import { DialogInputProps } from './DialogerTypes';

function DialogInput({ title, value: defaultValue = "", required = true, requiredText, onClose, onSubmit }: DialogInputProps) {
    const [value, setValue] = React.useState<string>(defaultValue);

    function handleSubmit(e: React.FormEvent<HTMLFormElement> | null, _ref: HTMLDialogElement | null) {
        e?.preventDefault();
        e?.stopPropagation();
        if (!value || value === " ") return;
        onSubmit?.(value);
        _ref?.close();
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, _ref: HTMLDialogElement | null) {
        if ((e.keyCode || e.which) === 13) {
            e.preventDefault();
            handleSubmit(null, _ref);
        }
    }

    return (
        <Dialog visible className="rounded-lg shadow-md w-[420px]" useOuterClick onClose={onClose}>
            {(_ref: HTMLDialogElement | null) => (<form action="" method="post" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e, _ref)}>
                <h2 className="font-bold text-xl">{title}</h2>
                <input type="text" name="dialog-input" autoFocus onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, _ref)} id={"dialog-input-" + uuid()} required={required} value={value} className="w-full px-5 py-3 mb-3 mt-5 border-b-2 bg-gray-100 outline-none transition-all border-b-gray-400 focus:border-b-teal-600" onChange={({ target }: { target: HTMLInputElement }) => setValue(target.value)} />
                {required && (!value || value === " ") && <div className="text-sm font-semibold text-orange-700">{requiredText || "This field is required!"}</div>}
                <div className="flex gap-4 mt-5 flex-nowrap">
                    <button className="flex-1 px-5 py-2 text-orange-600 font-semibold hover:bg-[#faa7] transition-all focus-visible:bg-[#faa7] disabled:bg-gray-400 rounded-md" type="reset" onClick={() => _ref?.close()}>Cancel</button>
                    <button className="flex-1 px-5 py-2 bg-teal-500 text-white font-semibold hover:bg-teal-700 transition-all focus-visible:bg-teal-700 disabled:bg-gray-400 rounded-md" name="submitBtn" type="submit">Submit</button>
                </div>
            </form>)}
        </Dialog>
    );
}

export default DialogInput;
