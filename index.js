import React, { useState, useEffect } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import './index.sass'

// COMPOS

import Header from '../Header'
import HomePage from '../Home-page'
import AboutMe from '../About-me'
import Projects from '../Projects'
import ProjectsContainer from '../Projects-container'
import Time2Padel from '../Time2Padel'
import SkyBeer from '../SkyBeer'
import PersonalWebsite from '../Personal-website'

export default withRouter(function ({ history }) { 
    
// HEADER

    function handleGoToHomePage() { history.push('/home-page') } 

    function handleGoToAboutMe() { history.push('/about-me')}

    function handleGoToProjects() { history.push('/projects-container')}

// PROJECTS

    function handleGoToTime2Padel() { history.push('/time2padel')}

    function handleGoToSkyBeer() { history.push('/skybeer')}

    function handleGoToPersonalWebsite() { history.push('/personal-website')}

// ROUTES

    return ( 
        <>
            { <> <Header onHomePage={handleGoToHomePage} onAboutMe={handleGoToAboutMe} onProjects={handleGoToProjects}/> 
                    <Route exact path="/" render={() => <Redirect to="/home-page" /> }/>
                    <Route path="/home-page" render={() => <HomePage onProjects={handleGoToProjects} /> }/>  
                    <Route path="/about-me" render={() => <AboutMe /> }/>
                    <Route path="/projects-container" render={() => <ProjectsContainer /> && <> <Projects onTime2Padel={handleGoToTime2Padel} onSkyBeer={handleGoToSkyBeer} onPersonalWebsite={handleGoToPersonalWebsite} />  <Time2Padel /> </> }/> 
                    <Route path="/time2padel" render={() => <ProjectsContainer /> && <> <Projects onTime2Padel={handleGoToTime2Padel} onSkyBeer={handleGoToSkyBeer} onPersonalWebsite={handleGoToPersonalWebsite} /> <Time2Padel /> </> }/> 
                    <Route path="/skybeer" render={() => <ProjectsContainer /> && <> <Projects onTime2Padel={handleGoToTime2Padel} onSkyBeer={handleGoToSkyBeer} onPersonalWebsite={handleGoToPersonalWebsite} /> <SkyBeer /> </> }/>
                    <Route path="/personal-website" render={() => <ProjectsContainer /> && <> <Projects onTime2Padel={handleGoToTime2Padel} onSkyBeer={handleGoToSkyBeer} onPersonalWebsite={handleGoToPersonalWebsite} /> <PersonalWebsite /> </> }/>
            </> }

        </>
    )
})