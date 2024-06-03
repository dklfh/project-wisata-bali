import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo goBali.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function handleScroll() {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`px-7 py-5 fixed w-full top-0 box-border z-10 ${isScrolled ? 'bg-black-bg' : 'bg-transparent'} transition-all duration-300 bg-opacity-90`}>
            <div className="flex justify-between items-center">
                <img src={logo} alt="logo" className="w-28 sm:w-40"/>
                <div className="md:hidden">
                    <button id="menu-toggle" className="text-white" onClick={handleMenuToggle}>
                        <svg className="w-8 h-8 z-50 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 6h18M3 18h18"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center">
                    <ul className="flex text-white justify-between gap-7 items-center">
                        <li className="hover:underline underline-offset-4 text-lg">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:underline underline-offset-4 text-lg">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:underline underline-offset-4 text-lg">
                            <Link to="/Destination">Destination</Link>
                        </li>
                        <li className="hover:underline underline-offset-4 text-lg">
                            <Link to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div ref={menuRef} className={`fixed top-0 left-0 w-full h-10vh bg-button-bg opacity-80 z-10 py-7 flex justify-center items-center transition-all duration-200 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <ul className="flex flex-col text-white gap-5 text-center">
                    <li className="hover:underline underline-offset-4 text-lg">
                        <Link to="/" onClick={handleMenuToggle}>Home</Link>
                    </li>
                    <li className="hover:underline underline-offset-4 text-lg">
                        <Link to="/about" onClick={handleMenuToggle}>About</Link>
                    </li>
                    <li className="hover:underline underline-offset-4 text-lg">
                        <Link to="/Destination" onClick={handleMenuToggle}>Destination</Link>
                    </li>
                    <li className="hover:underline underline-offset-4 text-lg">
                        <Link to="/Contact" onClick={handleMenuToggle}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;