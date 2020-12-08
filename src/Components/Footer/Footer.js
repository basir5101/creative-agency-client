import React from 'react';
import Contact from '../Contact/Contact';

const Footer = () => {
    return (
        <footer className = 'bg-warning pt-5 pb-2'>
            <Contact />
            <p className="text-muted text-center pt-5">Copyright Orange labs 2020</p>
        </footer>
    );
};

export default Footer;