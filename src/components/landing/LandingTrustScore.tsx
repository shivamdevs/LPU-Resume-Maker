import React from 'react';

type Testimonies = {
    name: string;
    role: string;
    comment: string;
    rating: number;
    image: any;
};

const testimonies: Testimonies[] = [
    {
        name: "Shivam Dewangan",
        role: "Student, LPU",
        comment: "A very good app.",
        rating: 5,
        image: require("../../images/landing/testimony-1-shivam.jpg"),
    }
];

for (let i = 0; i < 5; i++) testimonies.push(testimonies[0]);

function LandingTrustScore() {
    return (
        <section className="hero-trust w-full px-5 pt-10 pb-32 text-center">
            <h2 className="text-white font-extrabold text-5xl">1,000+</h2>
            <h3 className="mt-5 text-2xl font-semibold text-white">Successful Resume created till now.<br />And still rising.</h3>
            <div className="flex w-full flex-wrap gap-5 justify-center mt-20">
                {testimonies.map((testimony, index) => <Testimony key={index} {...testimony} />)}
            </div>
        </section>
    );
}

export default LandingTrustScore;

function Testimony({ name, role, comment, rating, image }: Testimonies) {
    return (
        <div className="w-full max-w-md p-5 gap-5 rounded-xl bg-white shadow-lg flex flex-nowrap items-center border-gray-200 border">
            <img className="rounded-full w-24 aspect-square" src={image} alt={name} />
            <div className="flex-1 text-left">
                <h4 className="font-bold text-xl">{name}</h4>
                <p className="text-blue-400 font-semibold text-sm">{role}</p>
                <p className="text-gray-600 font-medium">{comment}</p>
            </div>
            <p className="text-orange-500 text-xs font-bold self-end">{rating}/5</p>
        </div>
    );
}