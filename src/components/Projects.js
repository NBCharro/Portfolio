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
    const [solActivo, setSolActivo] = useState('');
    const onSubmit = (sol) => {
        setSolClickado((prev) => !prev);
        setSolActivo(sol);
    };
    const pantalla = window.screen.availWidth;
    const containerVariants = {
        sol0: {
            scale: `${pantalla > 1080 ? 0.5 : 0.35}`,
            rotate: 60,
            transition: { duration: 0.5 },
        },
        sol1: {
            scale: `${pantalla > 1080 ? 0.25 : 0.2}`,
            rotate: 30,
            transition: { duration: 0.5 },
        },
        sol2: {
            scale: `${pantalla > 1080 ? 0.75 : 0.45}`,
            rotate: 22,
            transition: { duration: 0.5 },
        },
        sol3: {
            scale: `${pantalla > 1080 ? 0.35 : 0.28}`,
            rotate: 0,
            transition: { duration: 0.5 },
        },
        inactivo: {
            scale: 0,
            originX: '50%',
            transition: { duration: 0.5 },
        },
        to: {
            // scale: `${pantalla > 640 ? 1.6 : 1}`,
            scale: 1.6,
            rotate: 0,
            top: '50%',
            left: '50%',
            transition: { duration: 0.25 },
        },
    };
    return (
        <>
            <div className={classes.contenedorSoles}>
                <motion.div
                    className={classes.sol0}
                    variants={containerVariants}
                    // animate={solClickado ? 'to' : 'sol0'}
                    initial="sol0"
                    animate={
                        solClickado
                            ? solActivo === 'sol0'
                                ? 'to'
                                : 'inactivo'
                            : ''
                    }
                >
                    <Sun imagen={SolFoto} clickado={onSubmit} nombre="sol0">
                        <CoomingSoon />
                    </Sun>
                </motion.div>
                <motion.div
                    className={classes.sol1}
                    variants={containerVariants}
                    initial="sol1"
                    animate={
                        solClickado
                            ? solActivo === 'sol1'
                                ? 'to'
                                : 'inactivo'
                            : ''
                    }
                >
                    <Sun imagen={SolFoto5} clickado={onSubmit} nombre="sol1">
                        <CoomingSoon />
                    </Sun>
                </motion.div>
                <motion.div
                    className={classes.sol2}
                    variants={containerVariants}
                    initial="sol2"
                    animate={
                        solClickado
                            ? solActivo === 'sol2'
                                ? 'to'
                                : 'inactivo'
                            : ''
                    }
                >
                    <Sun imagen={SolFoto2} clickado={onSubmit} nombre="sol2">
                        <Ecolegas />
                    </Sun>
                </motion.div>
                <motion.div
                    className={classes.sol3}
                    variants={containerVariants}
                    initial="sol3"
                    animate={
                        solClickado
                            ? solActivo === 'sol3'
                                ? 'to'
                                : 'inactivo'
                            : ''
                    }
                >
                    <Sun imagen={SolFoto4} clickado={onSubmit} nombre="sol3">
                        <CoomingSoon />
                    </Sun>
                </motion.div>
            </div>
        </>
    );
};

export default Projects;
