import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (

      <div className="footer__bottom__owners">
          <p>Copyright © 2021 New Heritage Poland — Wszelkie prawa zastrzeżone.</p>
          <ul className="footer__bottomCollection">
              <li className="footer__bottomItem"> <NavLink to="/">PRIVACY POLICY</NavLink></li>
              <li className="footer__bottomItem"> <NavLink to="/">STATUTE</NavLink> </li>
          </ul>
      </div>
  );
}

export default Footer;
