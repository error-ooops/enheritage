import React from 'react';
import './Banner.css';
import { NavLink } from 'react-router-dom';

function Banner({bannerImage}) {
    return (
        <div className="banner" style={{backgroundImage: `url(${bannerImage})`}}>
            <div className="banner__content">
                <h2 className="privacy__banner__title">Privacy Policy</h2>
            </div>
            <div className="banner__hr"></div>
            <p className="bannerP">The privacy and security of your personal information is extremely  important to us. This privacy policy explains how and why we use your  personal data, to make sure you stay informed and can be confident about  giving us your information.</p>
        </div>
    )
}

export default Banner
