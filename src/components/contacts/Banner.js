import React from 'react';
import './Banner.css';
import { NavLink } from 'react-router-dom';

function Banner({bannerImage}) {
    return (
        <div className="banner" style={{backgroundImage: `url(${bannerImage})`}}>
            <div className="banner__content">
                <h2 className="contact__banner__title">Contact</h2>
            </div>
        </div>
    )
}

export default Banner
