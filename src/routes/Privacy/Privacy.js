import React from 'react'
import './Privacy.css'
import Header from '../../components/header/Header'
import Banner from '../../components/privacy/Banner'
import Texts from '../../components/privacy/Texts'
import Footer from '../../components/privacy/Footer'

function Privacy() {
    return (
        <div className="privacy">
            <Header/>
            <Banner/>
            <Texts/>
            <Footer/>
        </div>
    )
}

export default Privacy
