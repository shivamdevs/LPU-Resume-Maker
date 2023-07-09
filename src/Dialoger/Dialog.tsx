import React from 'react';
import "./Dialog.scss";
import classNames from 'classnames';

export interface DialogProps {
    children?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | ((_ref: HTMLDialogElement | null) => (string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null));
    visible?: boolean;
    showClose?: boolean;
    className?: string;
    useOuterClick?: boolean;
    innerClassName?: string;
    onClose?: (() => void) | null;
    onOpen?: (() => void) | null;
}

function Dialog({
    children,
    visible = false,
    showClose = false,
    innerClassName = "",
    useOuterClick = false,
    className = "",
    onClose = null,
    onOpen = null,
}: DialogProps) {

    const dialogRef = React.createRef<HTMLDialogElement>();

    const [overFlow, setOverFlow] = React.useState<string>("auto");

    const [dialogState, setDialogState] = React.useState<HTMLDialogElement | null>(dialogRef.current);

    React.useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            const handleOpen = () => onOpen?.();
            const handleClose = () => {
                // window.document.body.style.setProperty("overflow", overFlow);
                onClose?.();
            };

            dialog.addEventListener("open", handleOpen);
            dialog.addEventListener("close", handleClose);
            return () => {
                dialog.removeEventListener("open", handleOpen);
                dialog.removeEventListener("close", handleClose);
            }
        }
    }, [dialogRef, onClose, onOpen, overFlow]);

    React.useEffect(() => {
        setDialogState(dialogRef.current);
        if (visible && dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal();
            setOverFlow(window.document.body.style.getPropertyValue("overflow"));
            // window.document.body.style.setProperty("overflow", "hidden");
        }
    }, [dialogRef, overFlow, visible]);


    const handleOuterClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = dialogRef.current;
        if (dialog && useOuterClick) {
            const dialogDimensions = dialog.getBoundingClientRect()
            if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
                e.preventDefault();
                dialog.close();
            }
        }
    };


    return (
        <dialog className={classNames("dialog", className)} ref={dialogRef} onMouseDown={handleOuterClick}>
            {showClose && <button type="button" aria-label="Close popup" onClick={() => dialogRef.current?.close()}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                </svg>
            </button>}
            <div className={innerClassName}>
                {typeof children === 'function' ? children(dialogState) : children}
            </div>
        </dialog>
    );
}

export default Dialog;
