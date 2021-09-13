import { motion } from 'framer-motion';
import { useState } from 'react';
import Fondo from './Fondo';
import classes from './Componente1.module.css';

const Componente1 = (props) => {
    const [pulsado, setPulsado] = useState(false);
    // const [textoArray, setTextoArray] = useState([]);

    const containerVariants = {
        to: {
            width: 100,
            height: 100,
            transition: { duration: 2 },
        },
        exit: { x: '-100vw', transition: { ease: 'easeInOut', duration: 1 } },
    };
    const buttonHandler = () => {
        setPulsado((prev) => !prev);
        console.log(pulsado);
        // setTextoArray([]);
    };
    // const texto = 'Hola, soy Nelson Blanco. Soy desarrollador frontend.';
    // useEffect(() => {
    //     let timer = 0;
    //     const reloj = setInterval(function () {
    //         setTextoArray((prev) => {
    //             return [prev, texto.split('')[timer]];
    //         });
    //         timer++;
    //         if (timer === texto.split('').length) {
    //             clearInterval(reloj);
    //         }
    //     }, 10);
    // }, [pulsado]);
    return (
        <Fondo>
            <motion.div
                className={classes.componente1a}
                onClick={props.click}
                variants={props.pulsado && containerVariants}
                animate="to"
            >
                {!props.pulsado && (
                    <span className={classes.parrafo}>
                        Hola, soy
                        <p className={classes.nombre}>Nelson Blanco</p>
                        Soy un desarrollador web front-end
                    </span>
                )}
            </motion.div>
            {/* <motion.div>{textoArray}</motion.div> */}
            <motion.button className={classes.boton} onClick={buttonHandler}>
                Acceder
            </motion.button>
            <motion.div className={classes.movible} drag />
            <motion.div className={classes.movible} drag />
        </Fondo>
    );
};

export default Componente1;
