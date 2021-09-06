import { motion } from 'framer-motion';
import { useState } from 'react';
import Fondo from './Fondo';
import classes from './Componente1.module.css';

const Componente1 = (props) => {
    const [pulsado, setPulsado] = useState(false);
    const containerVariants = {
        to: {
            width: 100,
            height: 100,
            transition: { duration: 2 },
        },
        exit: { x: '-100vw', transition: { ease: 'easeInOut', duration: 1 } },
    };
    const buttonVariants = {
        to: {
            backgroundColor: 'green',
            transition: { duration: 3 },
        },
    };
    const buttonHandler = () => {
        setPulsado((prev) => !prev);
    };
    return (
        <Fondo>
            <motion.div
                className={classes.componente1a}
                onClick={props.click}
                variants={props.pulsado && containerVariants}
                animate="to"
            >
                {!props.pulsado && (
                    <div className={classes.parrafo}>
                        Hola, soy
                        <p className={classes.nombre}>Nelson Blanco</p> Soy un
                        desarrollador web front-end
                    </div>
                )}
            </motion.div>
            <motion.button
                className={classes.boton}
                onClick={buttonHandler}
                variants={pulsado && buttonVariants}
                animate="to"
            >
                Acceder
            </motion.button>
            <motion.div
                className={classes.movible}
                drag
                dragConstraints={{
                    left: 200,
                    top: 0,
                    right: 0,
                    bottom: 200,
                }}
            />
        </Fondo>
    );
};

export default Componente1;
