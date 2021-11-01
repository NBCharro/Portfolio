import Sun from './Sun';
import Ecolegas from './projects/Ecolegas';
import CoomingSoon from './projects/CoomingSoon';
import SolFoto from '../resources/sun1.png';
import SolFoto2 from '../resources/sun2.png';
import SolFoto4 from '../resources/sun4.png';
import SolFoto5 from '../resources/sun5.png';
import classes from './Projects.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [solClickado, setSolClickado] = useState(false);
    const onSubmit = (sol) => {
        setSolClickado((prev) => !prev);
        console.log(sol);
    };
    const containerVariants = {
        to: {
            scale: 1.6,
            rotate: 0,
            top: '50%',
            left: '50%',
            transition: { duration: 2 },
        },
    };
    return (
        <>
            <div className={classes.contenedorSoles}>
                {/* <div className={classes.sol0}> */}
                <motion.div
                    variants={containerVariants}
                    className={classes.sol0}
                    animate={solClickado ? 'to' : ''}
                >
                    <Sun imagen={SolFoto} clickado={onSubmit} nombre="sol0">
                        <CoomingSoon />
                    </Sun>
                </motion.div>
                <div className={classes.sol1}>
                    <Sun imagen={SolFoto5} clickado={onSubmit} nombre="sol1">
                        <CoomingSoon />
                    </Sun>
                </div>
                <div className={classes.sol2}>
                    <Sun imagen={SolFoto2} clickado={onSubmit} nombre="sol2">
                        <Ecolegas />
                    </Sun>
                </div>
                <div className={classes.sol3}>
                    <Sun imagen={SolFoto4} clickado={onSubmit} nombre="sol3">
                        <CoomingSoon />
                    </Sun>
                </div>
            </div>
        </>
    );
};

export default Projects;
