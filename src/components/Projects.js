import React from 'react';
import Sun from './Sun';
import Ecolegas from './projects/Ecolegas';
import CoomingSoon from './projects/CoomingSoon';
import ComingSoonFoto from '../resources/comingSoon.png';
import EcolegasFoto from '../resources/ecolegas.png';
import classes from './Projects.module.css';

const Projects = (props) => {
    return (
        <>
            <div className={classes.contenedorSoles}>
                <div className={classes.sol0}>
                    <Sun imagen={ComingSoonFoto}>
                        <CoomingSoon />
                    </Sun>
                </div>
                <div className={classes.sol1}>
                    <Sun imagen={ComingSoonFoto}>
                        <CoomingSoon />
                    </Sun>
                </div>
                <div className={classes.sol2}>
                    <Sun imagen={EcolegasFoto}>
                        <Ecolegas />
                    </Sun>
                </div>
                <div className={classes.sol3}>
                    <Sun imagen={ComingSoonFoto}>
                        <CoomingSoon />
                    </Sun>
                </div>
            </div>
        </>
    );
};

export default Projects;
