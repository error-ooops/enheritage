import React from 'react'
import './Contact.css'
import Header from '../../components/contacts/Header'
import Banner from '../../components/contacts/Banner'
import contactBg from '../../assets/stock/contact_bg.png'
import Popup from '../../components/contacts/Popup'
import Map from '../../components/contacts/Map'
import Footer from '../../components/contacts/Footer'

function Contact() {
    return (
        <div className="contact">
            <Header/>
            <Banner bannerImage={contactBg}/>
            <Popup/>
            <Map/>
            <Footer/>
        </div>
    )
}

export default Contact
