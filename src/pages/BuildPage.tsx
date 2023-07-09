import React from 'react';
import BuildSection from '../components/build/BuildSection';
import BuildInput from '../components/build/BuildInput';
import BuildTextarea from '../components/build/BuildTextarea';
import BuildCertificates from '../components/build/BuildCertificates';
import BuildContext from '../core/context/BuildContext';
import useResumeBuilder from '../core/hooks/useResumeBuilder';
import BuildOops from '../images/build/build-oops.png';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import BuildHeader from '../components/build/common/BuildHeader';

function BuildPage() {
    const [context, loading, error] = useResumeBuilder();


    if (loading) return (
        <div className="px-5 font-semibold text-slate-500 text-center">Launching your <span className="text-blue-600">Resume...</span></div>
    );

    if (error) return (
        <div className="flex flex-col items-center py-10 px-5">
            <img src={BuildOops} alt="Oops!" />
            <div className="my-4 text-red-500 font-bold text-xl">Oops!</div>
            <div className="my-5 text-gray-700 font-semibold">Looks like what you are trying to access is invalid!</div>
            <div className="mt-5"><Link className="inline-flex items-center justify-between gap-2 font-bold text-blue-400 hover:underline" to="/dashboard"><MdKeyboardBackspace /> <span>Back to Dashboard</span></Link></div>
        </div>
    );

    return (
        <BuildContext.Provider value={context}>
            <section className="w-full flex flex-nowrap items-start justify-around p-5 gap-5">
                <section className="flex-[9] p-3">
                    <BuildHeader />
                    <BuildSection title="Basic Info" open required>
                        <BuildInput tree="basicInfo" node="name" placeholder="John Doe" label="Full name" />
                        <BuildInput tree="basicInfo" node="role" placeholder="Software Developer Intern" label="Role" />
                        <BuildTextarea tree="basicInfo" node="summary" placeholder="An SDE qualified scholar focused on developing..." label="Summary" />
                    </BuildSection>
                    <BuildSection title="Links and Details" open>
                        <BuildInput tree="linkDetail" node="phone" placeholder="+91 9876543210" type="tel" label="Phone number" />
                        <BuildInput tree="linkDetail" node="email" placeholder="john.doe@gmail.com" type="email" label="Email Address" />
                        <BuildInput tree="linkDetail" node="address" placeholder="City, Country, Pin code" label="Home Address" />
                        <BuildInput tree="linkDetail" node="linkedin" placeholder="https://linkedin.com/in/---" type="url" label="Linkedin profile" />
                        <BuildInput tree="linkDetail" node="github" placeholder="https://github.com/---" type="url" label="Github profile" />
                    </BuildSection>
                    <BuildSection title="Technical Skills" open>
                        <BuildInput tree="basicInfo" node="skills" placeholder="Skill 1, skill 2, skill 3,..." />
                    </BuildSection>
                    <BuildSection title="Certifications" open>
                        <BuildCertificates />
                        <BuildCertificates />
                        <BuildCertificates />
                        <BuildCertificates />
                    </BuildSection>
                </section>
                <section className="flex-[5] border border-dashed border-slate-400"></section>
            </section>
        </BuildContext.Provider>
    );
}

export default BuildPage;
