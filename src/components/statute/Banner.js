import React from 'react';
import './Banner.css';
import { NavLink } from 'react-router-dom';

function Banner({bannerImage}) {
    return (
        <div className="banner" style={{backgroundImage: `url(${bannerImage})`}}>
            <div className="banner__content">
                <p className="topP">Our updated statute of the organization on the 18th of February 2021</p>
                <h2 className="privacy__banner__title">Statute of the New Heritage Foundation</h2>
            </div>
            <div className="banner__hr"></div>
            <p className="bannerP">Plik będzie dostępny wkrótce.</p>
        </div>
    )
}

export default Banner
