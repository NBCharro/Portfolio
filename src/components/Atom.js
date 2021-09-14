import { useState } from 'react';
import classes from './Atom.module.css';

const Atom = (props) => {
    const [animacion, setAnimacion] = useState(false);
    const animacionHandler = () => {
        setAnimacion((prev) => !prev);
    };
    return (
        <>
            <div className={classes.contenedor}>
                <div
                    className={`${classes.electronOrbita} ${
                        animacion && classes.electronOrbitaAnimacionPausada
                    }`}
                >
                    <div className={classes.estela} />
                    <div
                        className={classes.electron}
                        onMouseEnter={animacionHandler}
                        onMouseLeave={animacionHandler}
                        direccion="Inicio"
                    />
                    <div
                        className={classes.electron2}
                        onMouseEnter={animacionHandler}
                        onMouseLeave={animacionHandler}
                        direccion="Contacto"
                    />
                </div>
                <div className={classes.neutron} />
                <div className={classes.proton} direccion="Proyectos" />
                <div className={classes.neutron2} />
                <div className={classes.proton2} direccion="Skills" />
            </div>
            {/* <div className={classes.container}>
                <div className={classes.sun}></div>
                <div className={`${classes.orbit} ${classes.earthOrbit}`}>
                    <div className={`${classes.globe} ${classes.earth}`}></div>
                </div>
                <div className={`${classes.orbit} ${classes.earthOrbit2}`}>
                    <div className={`${classes.globe} ${classes.earth2}`}></div>
                </div>
            </div> */}
        </>
    );
};

export default Atom;
