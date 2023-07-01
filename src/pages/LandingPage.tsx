import React from 'react';
import "./styles/LandingPage.scss";
import LandingHero from '../components/landing/LandingHero';
import LandingKeyFeature from '../components/landing/LandingKeyFeature';
import LandingTrustScore from '../components/landing/LandingTrustScore';

function LandingPage() {
    return (
        <>
            <LandingHero />
            <LandingKeyFeature />
            <LandingTrustScore />
        </>
    );
}

export default LandingPage;
