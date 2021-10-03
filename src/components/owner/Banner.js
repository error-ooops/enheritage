import React from 'react';
import './Banner.css';
import { NavLink } from 'react-router-dom';

function Banner({bannerImage}) {
    return (
        <div className="banner" style={{backgroundImage: `url(${bannerImage})`}}>
            <div className="banner__content">
                <h1 className="banner__title">Owners</h1>
            </div>
        </div>
    )
}

export default Banner
