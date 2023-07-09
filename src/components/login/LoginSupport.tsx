import React from 'react';
import "./Login.scss";
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as LoginImage } from "../../images/login/support-login-key.svg";
import { MdKeyboardBackspace } from 'react-icons/md';

function LoginSupport() {
    const location = useLocation();

    return (
        <div className="login-support w-full flex flex-col">
            <div className="max-w-3xl m-auto text-center">
                <LoginImage className="w-full max-w-md mx-auto max-h-40" />
                <h2 className="font-bold my-5 text-2xl">You are not logged in!</h2>
                <div className="font-semibold">
                    <p>To save or download your Resume, you need to log in.</p>
                    <Link to={"/login?return=" + encodeURI(location.pathname)} className="px-20 py-3 my-5 rounded-md inline-flex justify-center items-center flex-nowrap bg-teal-500 transition-all hover:bg-teal-700 focus-visible:bg-teal-700 focus-visible:cursor-pointer text-white font-bold">Login</Link>
                </div>
                <h3 className="mb-3 text-lg font-bold">Why should you log in?</h3>
                <ul className="text-sm text-left list-disc">
                    <li>Logging in ensures that your data is securely stored, preventing any loss of information.</li>
                    <li>By logging in, you can easily edit or download your resume from any location.</li>
                    <li>Your data is protected and secured. Find out more about our security measures through Firebase.</li>
                </ul>
                <div className="mt-10"><Link className="inline-flex items-center justify-between gap-2 font-bold text-blue-400 hover:underline" to="/"><MdKeyboardBackspace /> <span>Back to Home</span></Link></div>
            </div>
        </div>
    );
}

export default LoginSupport;
