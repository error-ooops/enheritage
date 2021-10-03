import React from 'react';
import './Projects.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import project_banner from '../../assets/stock/projects_banner.png'; 
import {Router, Route, Switch} from 'react-router-dom';
import Pilica from '../pilica/Pilica';
import Sobieszyn from '../sobieszyn/Sobieszyn';

function Projects({match}) {
    console.log(match)
    return (
        <div className="projects">
            <Header />
            <Banner bannerImage={project_banner} match={match}/>
            <Switch>
                <Route path={`${match.path}/pilica`} component={Pilica}/>
                <Route path={`${match.path}/sobieszyn`} component={Sobieszyn}/>
                <Route path={`${match.path}/pilica`} component={Pilica}/>
            </Switch>
        </div>
    )
}

export default Projects
