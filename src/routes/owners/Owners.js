import React from 'react'
import './Owners.css'
import Navbar from '../../components/owner/Navbar'
import Banner from '../../components/owner/Banner'
import bannerIMG from '../../assets/stock/background.png'
import About from '../../components/owner/About'
import Dukla from '../../components/owner/DuklaPalace'
import Footer from '../../components/owner/Footer'

function Owners() {
    return (
        <div>
            <Navbar/>
            <Banner  bannerImage={bannerIMG}/>
            <About/>
            <Dukla/>
            <Footer/>
        </div>
    )
}

export default Owners
