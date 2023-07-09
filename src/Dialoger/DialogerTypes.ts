export interface DialogInputProps {
    title?: React.ReactNode;
    value?: string;
    required?: boolean;
    requiredText?: React.ReactNode;
    onClose?: (() => void) | null;
    onSubmit?: ((value: string) => void) | null;
}

export interface DialogConsentProps {
    title?: React.ReactNode;
    message?: React.ReactNode;
    cancelText?: React.ReactNode;
    selectText?: React.ReactNode;
    onClose?: (() => void) | null;
    onCancel?: (() => void) | null;
    onSelect?: (() => void) | null;
    selectClass?: string;
    cancelClass?: string;
}


export default interface DialogerTypes extends DialogInputProps, DialogConsentProps {
    id?: string;
    title?: React.ReactNode;
    type?: 'input' | 'consent';
};