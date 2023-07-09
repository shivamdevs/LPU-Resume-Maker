import React from 'react';
import Toggler from '../element/Toggler';
import { AnimatePresence, motion } from 'framer-motion';

interface BuildSectionTypes {
    children?: React.ReactNode;
    title?: React.ReactNode;
    icon?: React.ReactNode;

    open?: boolean;

    required?: boolean;
};

function BuildSection({ title, icon, open, children, required }: BuildSectionTypes) {
    const [expanded, setExpanded] = React.useState<boolean>(!!open);


    return (
        <section className="w-full rounded-lg border border-gray-300 bg-white my-5">
            <header className="w-full flex flex-nowrap items-center gap-5 p-3">
                {icon}
                <div className="flex-1 font-bold text-lg">{title}</div>
                <Toggler toggled={expanded} onToggle={(tag: boolean) => setExpanded(tag)} disabled={required} />
            </header>
            <AnimatePresence>
                {(expanded) && <motion.div
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
                >
                    <div className="p-3 border-t border-t-gray-200">
                        {children}
                    </div>
                </motion.div>}
            </AnimatePresence>
        </section>
    )
}

export default BuildSection;
