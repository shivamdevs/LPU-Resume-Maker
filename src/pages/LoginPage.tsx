import React from 'react';
import "./styles/LoginPage.scss";
import LoadSVG from '../components/element/LoadSVG';
import { ReactComponent as LoginGoogle } from "../images/login/login-google-logo.svg";
import { ReactComponent as LoginFacebook } from "../images/login/login-facebook-logo.svg";
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import firebase from '../core/firebase/firebaseConfig';

function LoginPage() {

    const [signInWithGoogle, , googleLoading, googleError] = useSignInWithGoogle(firebase.auth);
    const [signInWithFacebook, , facebookLoading, facebookError] = useSignInWithFacebook(firebase.auth);

    return (
        <section className="login-paged w-full flex items-center justify-center p-5">
            <div className="w-full max-w-5xl rounded-xl items-center overflow-hidden backdrop-blur-md bg-white flex flex-nowrap">
                <div className="w-[50%] relative py-5 px-16">
                    <h2 className="text-4xl font-bold">Create your <span className="text-blue-600">Resume</span>,<br /> in simple steps.</h2>
                    <p className="mt-2 mb-10 font-bold">Connect your <span className="text-blue-600">Google</span> or <span className="text-blue-600">Facebook</span> account.</p>
                    <button type="button" disabled={googleLoading || facebookLoading} className="w-full rounded-lg px-5 py-3 my-5 text-violet-500 font-bold bg-violet-100 hover:bg-violet-700 hover:text-white focus-visible:bg-violet-700 focus-visible:text-white transition-all disabled:bg-gray-200 disabled:text-gray-500 flex flex-nowrap justify-between items-center" onClick={() => signInWithGoogle()}>
                        <span><LoginGoogle className="scale-150" /></span>
                        <span>Continue with Google</span>
                        <span className="">
                            {googleLoading && <LoadSVG color="#727888" stroke={15} />}
                        </span>
                    </button>
                    <p className="text-sm font-semibold text-orange-700 text-center">{googleError?.message}</p>
                    <button type="button" disabled={facebookLoading || googleLoading} className="w-full rounded-lg px-5 py-3 my-5 text-violet-500 font-bold bg-violet-100 hover:bg-violet-700 hover:text-white focus-visible:bg-violet-700 focus-visible:text-white transition-all disabled:bg-gray-200 disabled:text-gray-500 flex flex-nowrap justify-between items-center" onClick={() => signInWithFacebook()}>
                        <span><LoginFacebook className="scale-150" /></span>
                        <span>Continue with Facebook</span>
                        <span className="">
                            {facebookLoading && <LoadSVG color="#727888" stroke={15} />}
                        </span>
                    </button>
                    <p className="text-sm font-semibold text-orange-700 text-center">{facebookError?.message}</p>
                </div>
                <div className="w-[50%] min-h-[75dvh] overflow-hidden rounded-l-full relative bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/216131159464011.63a03ebd5dd8e.png)] bg-cover bg-left"></div>
            </div>
        </section>
    );
}

export default LoginPage;
