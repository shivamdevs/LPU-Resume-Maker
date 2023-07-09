import React from 'react';
import DashBoardEditResume from "../images/dashboard/dashboard-edit-resume.png";
import moment from 'moment';
import useUserResumeList, { ResumeType } from '../core/hooks/useUserResumeList';
import { LuLayoutTemplate } from 'react-icons/lu';
import { FiMoreHorizontal } from 'react-icons/fi';
import { GoDesktopDownload, GoDuplicate } from 'react-icons/go';
import useNewResume from '../core/hooks/useNewResume';
import LoadSVG from '../components/element/LoadSVG';
import Tippy from '@tippyjs/react';
import { OasisMenu, OasisMenuBreak, OasisMenuItem, OasisMenuTrigger } from 'oasismenu';
import { MdDelete, MdDriveFileRenameOutline, MdEditNote } from 'react-icons/md';

// type TemplateType = {
//     id: string;
//     name: string;
//     image: string;
//     disabled?: boolean;
//     onClick?: (template: string) => void;
// };


function Dashboard() {
    const [createNewResume, newResumeLoad] = useNewResume();

    return (
        <section className="w-full max-w-5xl mx-auto p-5">
            <header className="py-4 flex flex-nowrap items-center justify-between">
                <h2 className="text-2xl font-bold px-4">My <span className="text-blue-600">Resume</span></h2>
                <button type="button" disabled={newResumeLoad} className="flex flex-nowrap gap-2 items-center bg-blue-50 text-blue-700 border rounded-lg border-blue-200 font-semibold text-sm px-10 py-2 transition-all hover:bg-blue-800 hover:text-white focus-visible:bg-blue-800 focus-visible:text-white disabled:text-slate-500 disabled:bg-slate-200 disabled:border-slate-300" onClick={() => createNewResume("9d8466448c03")}>
                    {newResumeLoad ? <LoadSVG color="#727888" size="1em" stroke={14} /> : <LuLayoutTemplate />}
                    <span>Create new Resume</span>
                </button>
            </header>
            <ResumeList />
        </section>
    );
}

export default Dashboard;

function ResumeList() {

    const [userResume, userResumeHandle, resumeLoad] = useUserResumeList();

    if (resumeLoad) return (
        <div className="px-5 font-semibold text-slate-500">Loading your <span className="text-blue-600">Resumes...</span></div>
    );

    if (!userResume || userResume.length === 0) return (
        <div className="px-5 font-semibold text-slate-500">Looks like you are <span className="text-blue-600">new</span> here. Create your first <span className="text-blue-600">Resume</span> now.</div>
    );


    return (
        <section className="w-full grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-3 px-1">
            {userResume?.map((resume: (ResumeType)) => {
                const { name, updated } = resume;

                const { open, preview, rename, clone, remove } = userResumeHandle(resume);

                return (
                    <div className="min-w-[200px] p-2 w-40 relative group" key={resume.id}>
                        <OasisMenuTrigger name={resume.id} trigger="contextmenu">
                            <button className="w-full p-5 border-dashed border-[1px] rounded-lg border-blue-500 hover:bg-blue-100 focus-visible:bg-blue-100 transition-all" onClick={open} title={name}>
                                <img className="mx-auto" src={DashBoardEditResume} alt={name} />
                                <div className="w-full text-left text-sm font-semibold mt-5 overflow-hidden text-ellipsis whitespace-nowrap">{name}</div>
                                <div className="w-full text-left text-sm font-semibold text-slate-600 overflow-hidden text-ellipsis whitespace-nowrap">{moment(updated).fromNow()}</div>
                            </button>
                        </OasisMenuTrigger>
                        <OasisMenuTrigger name={resume.id}>
                            <Tippy content="More options">
                                <button type="button" className="absolute right-4 top-4 rounded-full w-8 h-8 bg-white flex items-center justify-center invisible transition-all group-hover:visible opacity-0 group-hover:opacity-100 border border-slate-400 text-xl"><FiMoreHorizontal /></button>
                            </Tippy>
                        </OasisMenuTrigger>
                        <OasisMenu name={resume.id}>
                            <OasisMenuItem onClick={open} icon={<MdEditNote />} content="Open Editor" />
                            <OasisMenuItem onClick={preview} icon={<GoDesktopDownload />} content="Preview and Download" />
                            <OasisMenuBreak />
                            <OasisMenuItem onClick={rename} icon={<MdDriveFileRenameOutline />} content="Rename" />
                            <OasisMenuItem onClick={clone} icon={<GoDuplicate />} content="Duplicate" />
                            <OasisMenuBreak />
                            <OasisMenuItem onClick={remove} icon={<MdDelete />} content="Delete" />
                        </OasisMenu>
                    </div>
                );
            })}
        </section>
    );
}

// function Template({ id, name, image, disabled, onClick }: TemplateType) {
//     return (
//         <div className="min-w-[160px] p-2 w-40 first-of-type:ml-5 last-of-type:mr-5">
//             <button className="mx-auto p-5 border-dashed border-[1px] rounded-lg border-teal-500 bg-teal-100 hover:bg-blue-100 focus-visible:bg-blue-100 transition-all disabled:bg-gray-200 disabled:border-gray-400" onClick={() => onClick?.(id)} disabled={disabled}>
//                 <img src={image} alt={name} />
//                 <div className="text-sm font-semibold mt-5 overflow-hidden text-ellipsis whitespace-nowrap">{name}</div>
//             </button>
//         </div>
//     );
// }