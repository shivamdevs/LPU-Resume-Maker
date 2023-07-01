import React from 'react';
import AppData from '../../core/app/AppData';
import { Link } from 'react-router-dom';

function LandingHero() {
    return (
        <section className="hero-banner w-full flex flex-col">
            <div className="flex flex-row-reverse flex-nowrap items-center justify-around px-5 gap-5 pt-52">
                <div className="flex-1 flex max-w-md flex-col">
                    Image
                </div>
                <div className="flex-1 flex max-w-2xl flex-col">
                    <h1 className="font-bold text-4xl my-5">Unlock Your Professional Potential</h1>
                    <h3 className="text-gray-700 font-bold text-xl">Create Your Perfect Resume with Our Easy-to-Use Resume Builder</h3>
                    <p className="mt-8 font-bold text-white">
                        Welcome to <b>{AppData.name}</b>, where crafting a standout resume is just a few clicks away. Our intuitive resume builder empowers you to showcase your skills, experience, and achievements in a polished and professional format. Get ready to impress hiring managers and land your dream job!
                    </p>
                    <p className="mt-10 font-bold text-white text-xl">
                        Specially crafted for <b>LPU</b> students.
                    </p>
                </div>
            </div>
            <div className="flex flex-nowrap w-full items-center justify-center my-auto">
                <Link to="/dashboard" className="flex flex-nowrap items-center justify-center px-12 py-3 rounded-3xl text-white bg-[#fff4] hover:text-teal-700 hover:bg-white focus-visible:bg-white focus-visible:text-teal-700 transition-all font-bold">Get Started</Link>
            </div>
        </section>
    );
}

export default LandingHero;
