import React from 'react';
import './Projects.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import project_banner from '../../assets/stock/projects_banner.png'; 

function Projects() {
    
    return (
        <div className="projects">
            <Header />
            <Banner bannerImage={project_banner}/>
        </div>
    )
}

export default Projects
