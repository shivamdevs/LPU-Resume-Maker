import React from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AppData from '../../core/app/AppData';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import firebase from '../../core/firebase/firebaseConfig';
import LoadSVG from '../element/LoadSVG';
import { OasisMenu, OasisMenuBreak, OasisMenuItem, OasisMenuTrigger } from 'oasismenu';
import { BiSolidDashboard } from 'react-icons/bi';
import { HiOutlineLogout } from 'react-icons/hi';
import { BsInfoCircleFill } from 'react-icons/bs';
import { TbMessage2Bolt } from 'react-icons/tb';

function Header() {

    const [isScrolled, setScrolled] = React.useState<boolean>(false);

    const [user, userLoading] = useAuthState(firebase.auth);

    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();


    const [signOut] = useSignOut(firebase.auth);

    React.useLayoutEffect(() => {

        function handleScroll() {
            setScrolled(window.scrollY > 30);
        }

        window.document.addEventListener("scroll", handleScroll);

        return () => window.document.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header id="header" className="h-20 w-full px-5 py-2 flex flex-nowrap items-center justify-between fixed top-0 left-0 right-0 bg-white transition-all z-50" data-scrolled={isScrolled}>
            <Link to={user ? "/dashboard" : "/"} className="h-10 transition-all" aria-label="Home">
                <img src={AppData.logo} alt={AppData.name} />
            </Link>
            {!user && <nav className="flex flex-nowrap items-center gap-5 font-bold">
                <NavLink className="hover:underline" to="/">Home</NavLink>
                <NavLink className="hover:underline" to="/dashboard">Dashboard</NavLink>
                <NavLink className="hover:underline" to="/build">Build Resume</NavLink>
                <NavLink className="hover:underline" to="/about">About</NavLink>
                <NavLink className="hover:underline" to="/contact">Contact</NavLink>
            </nav>}
            <div className="flex flex-nowrap items-center gap-5">
                {userLoading ?
                    <LoadSVG size={30} /> :
                    user ?
                        <>
                            <OasisMenuTrigger name="user-profile" placement="bottom-right">
                                <button type="button" className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-4 border-slate-400 transition-all hover:border-teal-500 focus-visible:border-teal-500 hover:bg-teal-100 focus-visible:bg-teal-100">
                                    <img src={user.photoURL || undefined} alt={user.displayName || ""} />
                                </button>
                            </OasisMenuTrigger>
                            <OasisMenu name="user-profile">
                                <div className="flex w-full p-4 flex-nowrap items-center gap-5">
                                    <div className="w-20 h-20 bg-slate-200 rounded-full border-2 border-slate-500 overflow-hidden">
                                        <img src={user.photoURL || undefined} alt={user.displayName || ""} />
                                    </div>
                                    <div className="">
                                        <div className="font-bold text-lg">{user.displayName}</div>
                                        <div className="font-semibold text-slate-500 text-sm">{user.email}</div>
                                    </div>
                                </div>
                                <OasisMenuBreak />
                                <OasisMenuItem icon={<BiSolidDashboard />} onClick={() => navigate("/dashboard")} content="Dashboard" />
                                <OasisMenuBreak />
                                <OasisMenuItem icon={<BsInfoCircleFill />} onClick={() => navigate("/about")} content="About" />
                                <OasisMenuItem icon={<TbMessage2Bolt />} onClick={() => navigate("/contact")} content="Contact" />
                                <OasisMenuBreak />
                                <OasisMenuItem icon={<HiOutlineLogout />} onClick={signOut} content="Logout" />
                            </OasisMenu>
                        </> :
                        <Link to={"/login?return=" + encodeURI(searchParams.get("return") || location.pathname)} className="px-5 py-2 rounded-md inline-flex justify-center items-center flex-nowrap bg-teal-500 transition-all hover:bg-teal-700 focus-visible:bg-teal-700 focus-visible:cursor-pointer text-white font-bold">Login</Link>
                }
            </div>
        </header>
    );
}

export default Header;
