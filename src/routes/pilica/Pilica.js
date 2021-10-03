import React from 'react';
import './Pilica.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import project_banner from '../../assets/stock/projects_banner.png'; 

function Pilica() {
    return (
        <div className="pilica">
            <Header/>
            <Banner bannerImage={project_banner}/>
        </div>
    )
}

export default Pilica
