import React from 'react';

type Features = {
    title: string;
    subtitle: string;
    image: any;
};

const features: Features[] = [
    {
        title: "Effortless Resume Creation",
        subtitle: "Build a visually stunning resume in minutes with our drag-and-drop interface.",
        image: require("../../images/landing/features-1-easy.png"),
    },
    {
        title: "Customizable Templates",
        subtitle: "Choose from a wide range of professionally designed templates and customize them to match your unique style.",
        image: require("../../images/landing/features-2-editable.png"),
    },
    {
        title: "Industry-Specific Guidance",
        subtitle: "Benefit from tailored tips and suggestions for each industry, ensuring your resume stands out in the crowd.",
        image: require("../../images/landing/features-3-guidance.png"),
    },
    {
        title: "Real-Time Previews",
        subtitle: "Instantly see how your resume looks as you make edits, ensuring a flawless presentation every time.",
        image: require("../../images/landing/features-4-preview.png"),
    },
    {
        title: "Easy PDF Downloads",
        subtitle: "Download your resume as a high-quality PDF file, ready to be shared with potential employers.",
        image: require("../../images/landing/features-5-download.png"),
    },
];

function LandingKeyFeature() {
    return (
        <section className="hero-features w-full px-12 flex justify-center flex-col items-center py-20">
            <h2 className="mb-5 font-bold text-2xl">Key Features</h2>
            <div className="flex w-full flex-wrap gap-5 justify-center mt-10">
                {features.map((feature, index) => <Feature key={index} {...feature} />)}
            </div>
        </section>
    );
}

export default LandingKeyFeature;


function Feature({ title, subtitle, image }: Features) {
    return (
        <div className="w-full max-w-[260px] p-5 text-center rounded-xl bg-white shadow-lg border-gray-200 border">
            <img className="mx-auto" src={image} alt={title} />
            <h4 className="my-5 font-bold text-xl">{title}</h4>
            <p className="text-gray-600 font-medium">{subtitle}</p>
        </div>
    );
}