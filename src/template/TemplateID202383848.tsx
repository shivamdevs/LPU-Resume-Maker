import React from 'react';
import { MetaDataContent, MetaDataContentHeaderLink } from '../types/MetaData';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';

function TemplateID202383848({ metadata = MetaDataID202383848 }: { metadata?: MetaDataContent }) {
    const { header: { data: headerData } } = metadata;

    return (
        <section className="w-full">
            <header className="w-full p-5 flex flex-nowrap justify-between items-center bg-[#0c3760] text-[#c4a079]">
                <div className="aspect-square max-h-full">
                    <img src={headerData.photo} alt="" />
                </div>
                <div className="text-center uppercase font-microsoft-sans-serif flex flex-col gap-3">
                    <div className="font-bold text-base">{headerData.name}</div>
                    <div className="text-sm">{headerData.role}</div>
                </div>
                <div className="flex flex-col gap-2 font-lucida-sans-unicode text-xs">
                    {headerData.link.map(link => <HeaderLink key={link.name} {...link} />)}
                </div>
            </header>
            <div className="flex flex-nowrap gap-2 px-5 py-6">
                <div className="flex-[4]">
                    <div className="build-template-section">
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                        <div className="w-full text-[#c4a079] text-base uppercase">Summary</div>
                    </div>
                </div>
                <span className="build-border-separator-vertical bg-[#c4a079]"></span>
                <div className="flex-[9]"></div>
            </div>
        </section>
    );
}

export default TemplateID202383848;

export const MetaDataID202383848: MetaDataContent = {
    header: {
        active: true,
        data: {
            photo: require("../images/build/template-user.png"),
            name: "Full Name",
            role: "Position to apply",
            link: [
                {
                    name: "phone",
                    data: "Phone number",
                    icon: <BsTelephoneFill />,
                },
                {
                    name: "email",
                    data: "Email Address",
                    icon: <MdEmail />,
                },
                {
                    name: "linkedin",
                    data: "Linkedin profile url",
                    icon: <BiLogoLinkedin />,
                },
                {
                    name: "address",
                    data: "Home address",
                    icon: <MdLocationPin />,
                },
                {
                    name: "github",
                    data: "Github profile url",
                    icon: <BsGithub />,
                },
            ],

        },
    },
};


function HeaderLink({ data, icon }: MetaDataContentHeaderLink) {
    return (
        <div className="flex w-full whitespace-nowrap items-center gap-3">
            <span className="text-[#c4a079] bg-white p-1 rounded-full">{icon}</span>
            <span className="">{data}</span>
        </div>
    );
}