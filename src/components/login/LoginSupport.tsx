import React from 'react';
import "./Login.scss";
import { Link } from 'react-router-dom';
import keyImage from "../../images/login/support-login-key.png";

function LoginSupport() {
    return (
        <div className="login-support w-full flex flex-col">
            <div className="w-full max-w-3xl m-auto text-center text-white">
                <img src={keyImage} alt="" className="mx-auto" />
                <h2 className="font-bold my-5 text-2xl">You are not logged in!</h2>
                <div className="font-semibold">
                    <p>To save or download your Resume, you need to log in.</p>
                    <Link to="/login" className="px-20 py-2 rounded-md inline-flex justify-center items-center flex-nowrap bg-[#fff7] transition-all hover:bg-[#fff] focus-visible:bg-[#fff] hover:text-teal-800 focus-visible:text-teal-800 focus-visible:cursor-pointer text-white  font-bold my-10">Login</Link>
                </div>
                <h3 className="mb-3 text-lg font-bold">Why should you log in?</h3>
                <div className="text-sm">
                    <p>Logging in ensures that your data is securely stored, preventing any loss of information.</p>
                    <p>By logging in, you can easily edit or download your resume from any location.</p>
                    <p>Your data is protected and secured. Find out more about our security measures through Firebase.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSupport;
