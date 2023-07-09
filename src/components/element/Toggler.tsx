import React from 'react';

type TogglerProps = {
    toggled?: boolean;
    onToggle?: ((value: boolean) => void) | null;
    disabled?: boolean;
};

function Toggler({ toggled, onToggle, disabled }: TogglerProps) {

    const [checked, setChecked] = React.useState<boolean>(!!toggled);

    React.useEffect(() => {
        onToggle?.(checked);
    }, [checked, onToggle]);

    return (
        <span className="relative inline-flex items-center">
            <button data-checked={checked} className="w-11 h-6 bg-gray-200 rounded-full data-[checked=true]:after:translate-x-full data-[checked=true]:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-all data-[checked=true]:bg-teal-600 disabled:after:bg-gray-200 disabled:data-[checked=true]:bg-gray-200" disabled={disabled} onClick={() => setChecked(chk => !chk)} aria-label="Toggle"></button>
        </span>
    );
}

export default Toggler;
