type ButtonProps = {
    icon?: React.ReactNode;
    content?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ icon, content, onClick }: ButtonProps) {
    return (
        <button type="button" className="flex px-5 py-4 gap-5 flex-nowrap items-center font-bold border-t border-t-gray-200 w-full transition-all hover:text-orange-600 focus-visible:text-orange-600 only-of-type:border-t-0" onClick={onClick}>
            {icon}
            <span className="flex-1 text-left text-ellipsis overflow-hidden whitespace-nowrap" style={{maxWidth: 'calc(100% - 40px)'}}>{content}</span>
        </button>
    );
}

export default Button;