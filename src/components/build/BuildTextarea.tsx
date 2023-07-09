import React from 'react';
import * as uuid from 'uuid';
import { useBuildContext } from '../../core/context/BuildContext';
import ResumeDataType from '../../types/ResumeDataType';
import autosize from 'autosize';

interface BuildTextareaTypes {
    label?: React.ReactNode;
    placeholder?: string;
    tree: string;
    node: string;
};

function BuildTextarea({ label, placeholder, tree, node }: BuildTextareaTypes) {

    const inputID = `buildTextarea_${uuid.v4()}`;

    const [content, setContent] = useBuildContext();

    function update(value: string) {
        setContent((old: ResumeDataType) => {
            let updatedContent: ResumeDataType = { ...old };
            if (!updatedContent.data) updatedContent.data = {};
            if (!updatedContent.data[tree]) updatedContent.data[tree] = {};
            updatedContent.data[tree][node] = value;
            return updatedContent;
        });
    }

    const areaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
        if (areaRef.current) autosize(areaRef.current);
    }, []);

    return (
        <fieldset className="flex w-full items-baseline flex-nowrap my-5">
            <div className="flex-[2]">
                <label className="" htmlFor={inputID}>{label}</label>
            </div>
            <textarea className="flex-[3] bg-gray-100 px-3 py-2 border-2 border-gray-300 rounded outline-none focus:border-blue-600 transition-all focus:shadow min-h-[70px] max-h-[500px]" ref={areaRef} value={(content.data as any)?.[tree]?.[node] || ""} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => update(e.target.value)} placeholder={placeholder} name={inputID} id={inputID} />
        </fieldset>
    )
}

export default BuildTextarea;
