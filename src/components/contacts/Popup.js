import React from 'react'
import './Popup.css'
import whatsappimg from '../../assets/stock/whatsapp 1.png'
import youTube from '../../assets/stock/youtube 1.svg'
import facebook from '../../assets/stock/facebook 1.svg'
import instagram from '../../assets/stock/instagram 1.svg'

function Popup() {
    return (
        <div className="popup">
            <div className="title"><h2 className="title__text">Drop us a line!</h2></div>
            <input type="text" placeholder="Name" className="name_input"/>
            <input type="email" placeholder="Email" className="email_input"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button className="btn_send">SEND</button>
            <button className="whatsapp"><img src={whatsappimg} alt=""/> Message us on WhatsApp</button>
            <div className="title_right"><h2 className="title__text__right">Better yet, see us in person!</h2></div>
            <p className="enjoy__text">We enjoy new views and perspective, so feel free to visit <br/> during normal business hours.</p>
            <div className="hr__popup"></div>
            <p className="newHeritage">New Heritage Fundacja</p>
            <p className="ulitsa">Ulica Mokotowska 60, 00-534 Warsaw, <br/> Mazowieckie, Poland</p>
            <p className="number">0048 602 496 285 <br /> 0048 502 965 353</p>
            <div className="social__links">
            <img src={youTube} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            </div>
        </div>
    )
}

export default Popup
