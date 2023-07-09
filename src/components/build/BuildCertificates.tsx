import React from 'react';
import * as uuid from 'uuid';

// interface BuildCertificatesTypes {
// };

function BuildCertificates() {

    const inputID = `BuildCertificates_${uuid.v4()}`;

    return (
        <fieldset className="flex w-full items-baseline flex-nowrap my-5 gap-5">
            <input className="flex-[3] bg-gray-100 px-3 py-2 border-b-[3px] border-b-gray-300 rounded outline-none focus:border-b-blue-600 transition-all focus:shadow" placeholder="Certificate name (DSA self placed)" type="text" name={`${inputID}_name`} id={`${inputID}_name`} />
            <input className="flex-1 bg-gray-100 px-3 py-2 border-b-[3px] border-b-gray-300 rounded outline-none focus:border-b-blue-600 transition-all focus:shadow" placeholder="Certified from (GFG)" type="text" name={`${inputID}_from`} id={`${inputID}_from`} />
            <input className="flex-1 bg-gray-100 px-3 py-2 border-b-[3px] border-b-gray-300 rounded outline-none focus:border-b-blue-600 transition-all focus:shadow" placeholder="Completed at (July, 2023)" type="month" name={`${inputID}_date`} id={`${inputID}_date`} />
        </fieldset>
    )
}

export default BuildCertificates;
