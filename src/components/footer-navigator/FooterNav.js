import React from 'react';
import './FooterNav.css';
import { NavLink } from 'react-router-dom';

function FooterNav() {
    return (
        <div className="footer__nav">
            <ul className="footer__collection">
          <li className="footer__item">
            <NavLink activeClassName="active__footerLink" to="/">Sobieszyn</NavLink>
          </li>
          <li className="footer__item">
            <NavLink activeClassName="active__footerLink" to="/">Pilica</NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/">Short Documentaries</NavLink>
          </li>
        </ul>
        </div>
    )
}

export default FooterNav
