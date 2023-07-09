import React from 'react';
import LoadSVG from '../element/LoadSVG';

function LoginLoading() {
    return (
        <section className="w-full h flex items-center justify-center flex-col px-10 py-16">
            <LoadSVG size={40} />
            {/* <h2 className="font-bold text-2xl mt-10">Please wait while we check your <span className="text-blue-500">Login</span> state...</h2> */}
        </section>
    );
}

export default LoginLoading;
