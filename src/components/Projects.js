import React from 'react';
import classes from './Projects.module.css';
import ComingSoon from '../resources/comingSoon.png';
import Ecolegas from '../resources/ecolegas.png';

const Projects = (props) => {
    return (
        <>
            <div className={classes.proyecto}>
                <img src={ComingSoon} alt="Coming Soon" />
            </div>
            <div className={classes.proyecto}>
                <img src={ComingSoon} alt="Coming Soon" />
            </div>
            <div className={classes.proyecto} id="proyecto">
                <img src={Ecolegas} alt="Ecolegas" />
            </div>
        </>
    );
};

export default Projects;
