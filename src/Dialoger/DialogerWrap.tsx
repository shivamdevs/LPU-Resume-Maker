import React from 'react'
import Dialog from './Dialog';
import DialogerTypes from './DialogerTypes';
import DialogerContext from './DialogerContext';
import DialogInput from './DialogInput';
import DialogerConsent from './DialogerConsent';

function DialogerWrap({ children }: { children?: React.ReactNode }) {
    const [dialogs, setDialogs] = React.useState<DialogerTypes[]>([]);

    React.useEffect(() => { console.log(dialogs); }, [dialogs]);

    function handleDialogClose(id: string) {
        setDialogs((get: DialogerTypes[]) => {
            const dlg: DialogerTypes[] = [...get];
            dlg.splice(get.findIndex(dlg => dlg.id === id), 1);
            return dlg;
        })
    }
    return (
        <DialogerContext.Provider value={{ get: dialogs, set: setDialogs }}>
            {children}
            {dialogs.map((dialog: DialogerTypes) => (dialog.type === 'input' ?
                <DialogInput
                    {...dialog}
                    key={dialog.id}
                    onClose={() => handleDialogClose(dialog.id || "")}
                /> : dialog.type === 'consent' ?
                    <DialogerConsent
                        {...dialog}
                        key={dialog.id}
                        onClose={() => handleDialogClose(dialog.id || "")}
                    />
                    :
                    <Dialog
                        visible
                        useOuterClick
                        {...dialog}
                        key={dialog.id}
                        onClose={() => handleDialogClose(dialog.id || "")}
                    >{dialog.title}</Dialog>))}
        </DialogerContext.Provider>
    )
}

export default DialogerWrap;
