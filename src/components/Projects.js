import React from 'react';
import ComingSoon from '../resources/comingSoon.png';
import Ecolegas from '../resources/ecolegas.png';
import Sun from './Sun';
import classes from './Projects.module.css';

const Projects = (props) => {
    return (
        <>
            {/* <div className={classes.proyecto}>
                <img src={ComingSoon} alt="Coming Soon" />
            </div>
            <div className={classes.proyecto}>
                <img src={ComingSoon} alt="Coming Soon" />
            </div>
            <div className={classes.proyecto} id="proyecto">
                <img src={Ecolegas} alt="Ecolegas" />
            </div> */}
            <div className={classes.sol0}>
                <Sun imagen={ComingSoon} />
            </div>
            <div className={classes.sol1}>
                <Sun imagen={ComingSoon} />
            </div>
            <div className={classes.sol2}>
                <Sun imagen={Ecolegas} />
            </div>
        </>
    );
};

export default Projects;
