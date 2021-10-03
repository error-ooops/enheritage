import React from 'react';
import './Sobieszyn.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import project_banner from '../../assets/stock/projects_banner.png'; 

function Sobieszyn() {
    return (
        <div className="sobieszyn">
            <Header/>
            <Banner bannerImage={project_banner}/>
        </div>
    )
}

export default Sobieszyn
