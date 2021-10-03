import React from 'react';
import './Projects.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import project_banner from '../../assets/stock/projects_banner.png'; 
import Footer from '../../components/footer/Footer';
import FooterNav from '../../components/footer-navigator/FooterNav';
import ProjectMembership from '../../components/project-membership/ProjectMembership';
import ProjectContent from '../../components/project-content/ProjectContent';


function Projects({match}) {
    console.log(match)
    return (
        <div className="projects">
            <Header />
            <Banner bannerImage={project_banner} match={match}/>
            <ProjectContent/>
            <ProjectMembership/>
            <FooterNav/>
            <Footer/>
        </div>
    )
}

export default Projects
