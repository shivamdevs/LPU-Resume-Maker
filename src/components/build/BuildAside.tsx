import React from 'react';
import { MdKeyboardArrowDown, MdOutlineDriveFileRenameOutline, MdOutlineFileDownload } from 'react-icons/md';
// import { LuLayoutTemplate, LuSlidersHorizontal } from 'react-icons/lu';
import { LuSlidersHorizontal } from 'react-icons/lu';
import { BsFiletypePdf, BsFiletypeTxt, BsPrinter } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { useBuildContext } from '../../core/context/BuildContext';
import ContentType from '../../types/ContentType';
import Button from '../element/Button';
import Section from '../element/Section';
import { useDialoger } from '../../Dialoger/DialogerContext';

function BuildAside() {

    // function handlePDF() {
    //     console.log(layout);

    //     if (layout.current) {
    //         const doc = new jsPDF({
    //             format: 'a4',
    //             unit: 'px',
    //         });

    //         // Adding the fonts.
    //         doc.setFont('Inter-Regular', 'normal');

    //         doc.html(layout.current, {
    //             async callback(doc) {
    //                 await doc.save('document');
    //             },
    //         });
    //     }
    // }

    const dialoger = useDialoger();

    const [title, setTitle] = React.useState<string>("My Resume");

    return (
        <aside className="flex-[4] sticky px-5 flex flex-col gap-5 max-w-sm">
            <Section>
                <Button content={title} icon={<MdOutlineDriveFileRenameOutline />} onClick={() => dialoger.input({
                    title: "Rename Resume",
                    value: title,
                    type: 'input',
                    onSubmit: (value: string) => setTitle(value),
                })} />
            </Section>
            <Section>
                {/* <Button content="Templates" icon={<LuLayoutTemplate />} /> */}
                <p className="border-t border-t-gray-200 text-gray-600 text-xs text-center px-1 py-2 font-medium">No additional templates are available right now.<br />Drop by later to update your resume and/or template.</p>
            </Section>
            <Section title="Manage Sections" icon={<LuSlidersHorizontal />}>
                <Activators />
                <p className="border-t border-t-gray-200 text-gray-600 text-xs text-center px-1 py-2 font-medium">Custom sections are not supported at the moment.</p>
            </Section>
            <Section title="Download Resume" icon={<MdOutlineFileDownload />}>
                <Button icon={<BsFiletypePdf />} content="Download PDF" />
                <Button icon={<BsFiletypeTxt />} content="Download TXT" />
                <Button icon={<BsPrinter />} content="Print Resume" />
            </Section>
        </aside>
    );
}

export default BuildAside;

type TogglerProps = {
    title: string;
    toggled?: boolean;
    children?: React.ReactNode;
    onToggle?: ((value: boolean) => void) | null;
    path: keyof ContentType["active"];
};

function Toggler({ title, toggled, children, onToggle, path }: TogglerProps) {

    const [checked, setChecked] = React.useState<boolean>(!!toggled);
    const [expanded, setExpanded] = React.useState<boolean>(false);
    const { setContent } = useBuildContext();

    React.useEffect(() => {
        setContent((old: ContentType) => {
            const rest: ContentType = { ...old };
            rest.active[path] = checked;
            return rest;
        })
    }, [checked, path, setContent]);

    React.useEffect(() => {
        if (!toggled) setExpanded(false);
    }, [toggled]);

    return (
        <div className="">
            <div className="flex px-5 py-3 gap-5 flex-nowrap items-center font-bold border-t border-t-gray-200 w-full">
                <span className="mr-auto">{title}</span>
                {children && <button disabled={!checked} onClick={() => setExpanded(exp => !exp)} className="transition-all data-[expanded=true]:rotate-180 w-8 h-8 disabled:opacity-50 flex items-center justify-center rounded-3xl" data-expanded={expanded} aria-label="Expand"><MdKeyboardArrowDown className="scale-150" /></button>}
                <span className="relative inline-flex items-center ">
                    <button data-checked={checked} className="w-11 h-6 bg-gray-200 rounded-full data-[checked=true]:after:translate-x-full data-[checked=true]:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-all data-[checked=true]:bg-teal-600" onClick={() => setChecked(chk => !chk)} aria-label="Toggle"></button>
                </span>
            </div>
            {children && <AnimatePresence>
                {expanded && <motion.div
                    initial={{
                        height: 0,
                        opacity: 0,
                    }}
                    animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                            height: {
                                duration: 0.2,
                            },
                            opacity: {
                                duration: 0.15,
                                delay: 0.1,
                            },
                        },
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                            height: {
                                duration: 0.2,
                            },
                            opacity: {
                                duration: 0.1,
                            },
                        },
                    }}
                    className="border-l-8 border-l-teal-600"
                >
                    {children}
                </motion.div>}
            </AnimatePresence>}
        </div>
    );
}


function Activators() {
    const { content: { active: { header, headerImage, headerName, headerRole, headerLinks } } } = useBuildContext();



    return (
        <Toggler title="Header" toggled={header} path="header" >
            <Toggler title='Image' toggled={headerImage} path="headerImage" />
            <Toggler title='Name' toggled={headerName} path="headerName" />
            <Toggler title='Role' toggled={headerRole} path="headerRole" />
            <Toggler title='Links and Details' toggled={headerLinks} path="headerLinks" />
        </Toggler>
    );
}