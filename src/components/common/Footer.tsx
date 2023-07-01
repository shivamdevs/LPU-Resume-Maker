import React from 'react';
import AppData from '../../core/app/AppData';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id="footer" className="w-full flex flex-wrap items-center px-5 py-10 h-[120px]">
            <Link to="/" className="h-10" aria-label="Home">
                <img src={AppData.logo} alt={AppData.name} />
            </Link>
            <div className="flex gap-5 mx-auto">
                <Link to="/about">About</Link>
                <span className=" text-gray-400"> • </span>
                <Link to="/contact">Contact</Link>
                <span className=" text-gray-400"> • </span>
                <span>Copyright <b>{AppData.name}</b> © 2023{/*-new Date().getFullYear()*/}</span>
            </div>
        </footer>
    );
}

export default Footer;
