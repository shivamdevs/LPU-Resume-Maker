import React from 'react';
import * as uuid from 'uuid';
import ResumeDataType from '../../types/ResumeDataType';
import { useBuildContext } from '../../core/context/BuildContext';

interface BuildInputTypes {
    label?: React.ReactNode;
    placeholder?: string;
    tree: string;
    node: string;
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
};

function BuildInput({ label, placeholder, tree, node, type }: BuildInputTypes) {

    const inputID = `buildInput_${uuid.v4()}`;

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

    return (
        <fieldset className="flex w-full items-baseline flex-nowrap my-5">
            <div className="flex-[2]">
                <label className="" htmlFor={inputID}>{label}</label>
            </div>
            <input className="flex-[3] bg-gray-100 px-3 py-2 border-b-[3px] border-b-gray-300 rounded outline-none focus:border-b-blue-600 transition-all focus:shadow" value={(content.data as any)?.[tree]?.[node] || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => update(e.target.value)} placeholder={placeholder} type={type} name={inputID} id={inputID} />
        </fieldset>
    )
}

export default BuildInput;
