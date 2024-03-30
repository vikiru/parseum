import React, { useEffect, useRef, useState } from 'react';

function Footer() {
    return (
        <footer className="footer footer-center bg-primary p-10 text-base-content">
            <nav className="grid grid-flow-col gap-4">
                <a className="link-hover link text-secondary" href="https://vikiru.github.io/parseum/">
                    Documentation
                </a>
                <a className="link-hover link text-secondary" href="https://vikiru.github.io/parseum/syntax/">
                    Supported Syntax
                </a>
                <a className="link-hover link text-secondary" href="https://github.com/vikiru/parseum">
                    GitHub
                </a>
            </nav>
            <aside>
                <p className="text-secondary">
                    &copy; {new Date().getFullYear()} Parseum, built by Visakan Kirubakaran. All rights reserved.
                </p>
            </aside>
        </footer>
    );
}

export default Footer;
