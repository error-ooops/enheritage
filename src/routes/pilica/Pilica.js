import React from 'react';
import './Pilica.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import FooterNav from '../../components/footer-navigator/FooterNav';
import project_banner from '../../assets/stock/projects_banner.png'; 
import PilicaContent from '../../components/plilica-content/PilicaContent';

function Pilica({match}) {
    return (
        <div className="pilica">
            <Header/>
            <Banner bannerImage={project_banner} match={match}/>
            <div className="container">
                <PilicaContent/>
            </div>
            <FooterNav/>
            <Footer/>
        </div>
    )
}

export default Pilica
