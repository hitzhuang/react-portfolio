import React from "react";

import "../styles/Footer.styles.css";

const Footer = ({ cakeresume }) => {
    return (
        <footer>
            <a href={cakeresume} target="_blank" rel="noopener noreferrer">
                Hitz Huang's React Portfolio | 2020
            </a>
        </footer>
    );
};

export default Footer;
