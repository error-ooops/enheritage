import React from 'react';
import './Banner.css';
import { NavLink } from 'react-router-dom';

function Banner({bannerImage}) {
    return (
        <div className="banner" style={{backgroundImage: `url(${bannerImage})`}}>
            <div className="banner__content">
                <h1 className="banner__title">Projects</h1>
                <ul className="banner__collection">
                    <li className="banner__item">
                        <NavLink to="/">
                            Sobieszyn
                        </NavLink>
                    </li>
                    <li className="banner__item">
                        <NavLink to="/">
                            Pilica
                        </NavLink>
                    </li>
                    <li className="banner__item">
                        <NavLink to="/">
                            Short Documentaries
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Banner
