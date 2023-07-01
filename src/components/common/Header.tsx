import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppData from '../../core/app/AppData';

function Header() {

    const [isScrolled, setScrolled] = React.useState<boolean>(false);

    React.useLayoutEffect(() => {

        function handleScroll() {
            setScrolled(window.scrollY > 30);
        }

        window.document.addEventListener("scroll", handleScroll);

        return () => window.document.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header id="header" className="h-20 w-full px-5 py-2 flex flex-nowrap items-center justify-between fixed top-0 left-0 right-0 bg-white transition-all z-50" data-scrolled={isScrolled}>
            <Link to="/" className="h-10 transition-all" aria-label="Home">
                <img src={AppData.logo} alt={AppData.name} />
            </Link>
            <nav className="flex flex-nowrap items-center gap-5 font-bold">
                <NavLink className="hover:underline" to="/">Home</NavLink>
                <NavLink className="hover:underline" to="/dashboard">Dashboard</NavLink>
                <NavLink className="hover:underline" to="/about">About</NavLink>
                <NavLink className="hover:underline" to="/contact">Contact</NavLink>
            </nav>
            <div className="flex flex-nowrap items-center gap-5">
                <Link to="/login" className="px-5 py-2 rounded-md inline-flex justify-center items-center flex-nowrap bg-teal-500 transition-all hover:bg-teal-700 focus-visible:bg-teal-700 focus-visible:cursor-pointer text-white font-bold">Login</Link>
            </div>
        </header>
    );
}

export default Header;
