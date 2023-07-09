import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type SectionProps = {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    expanded?: boolean;
};

function Section({ title, icon, children, className, expanded: isExpanded }: SectionProps) {

    const [expanded, setExpanded] = React.useState<boolean>(!!isExpanded);

    return (
        <section className={classNames("w-full rounded-lg overflow-hidden bg-white shadow-lg border border-gray-200", className)}>
            {title && <button data-expanded={expanded} className="w-full flex flex-nowrap items-center py-4 px-5 font-bold text-lg transition-all hover:text-purple-600 focus-visible:text-purple-600 rounded-[inherit] data-[expanded=true]:text-purple-800 gap-5" type="button" onClick={() => setExpanded(exp => !exp)} aria-label="Expand">
                <span>{icon}</span>
                <span>{title}</span>
                <MdKeyboardArrowDown className="ml-auto scale-150 transition-all data-[expanded=true]:rotate-180" data-expanded={expanded} />
            </button>}
            <AnimatePresence>
                {(!title || expanded) && <motion.div
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
                    {children}
                </motion.div>}
            </AnimatePresence>
        </section >
    );
}

export default Section;