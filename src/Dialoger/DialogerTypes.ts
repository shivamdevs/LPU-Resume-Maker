export default interface DialogerTypes {
    title?: string;
    value?: string;
    id?: string;
    type: 'dialog' | 'input';
    required?: boolean;
    onSubmit?: ((value: string) => void) | null;
};
