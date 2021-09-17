import React from 'react';
import ComingSoon from '../resources/comingSoon.png';
import Ecolegas from '../resources/ecolegas.png';
import Sun from './Sun';
import classes from './Projects.module.css';

const Projects = (props) => {
    return (
        <>
            <div className={`${classes.sol} ${classes.sol0}`}>
                <Sun imagen={ComingSoon} />
            </div>
            <div className={`${classes.sol} ${classes.sol1}`}>
                <Sun imagen={ComingSoon} />
            </div>
            <div className={`${classes.sol} ${classes.sol2}`}>
                <Sun imagen={Ecolegas} />
            </div>
            <div className="texto">Esto es un texto</div>
        </>
    );
};

export default Projects;
